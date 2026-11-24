const corsHeaders = (origin) => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
  Vary: "Origin",
});

const json = (body, status, origin) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
  });

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char],
  );

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (origin !== env.ALLOWED_ORIGIN) {
      return new Response("Forbidden", { status: 403 });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== "POST") return json({ success: false }, 405, origin);

    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return json({ success: false }, 415, origin);
    }

    let data;
    try {
      const raw = await request.text();
      if (raw.length > 12_000) return json({ success: false }, 413, origin);
      data = JSON.parse(raw);
    } catch {
      return json({ success: false }, 400, origin);
    }

    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const topic = typeof data.topic === "string" ? data.topic.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";
    const website = typeof data.website === "string" ? data.website : "";

    // Silently accept honeypot submissions so bots don't learn the field name.
    if (website) return json({ success: true }, 200, origin);
    if (
      name.length < 1 || name.length > 120 ||
      email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !["Role / Internship", "Project", "Just saying hi"].includes(topic) ||
      message.length < 1 || message.length > 5000
    ) {
      return json({ success: false, error: "Invalid form data." }, 400, origin);
    }
    if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.CONTACT_RECIPIENT) {
      return json({ success: false, error: "Mail service is not configured." }, 503, origin);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeTopic = escapeHtml(topic);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const mail = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: [env.CONTACT_RECIPIENT],
        reply_to: email,
        subject: `Portfolio contact: ${topic}`,
        html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Topic:</strong> ${safeTopic}</p><p><strong>Message:</strong><br>${safeMessage}</p>`,
        text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
      }),
    });

    if (!mail.ok) {
      return json({ success: false, error: "Mail provider rejected the message." }, 502, origin);
    }
    return json({ success: true }, 200, origin);
  },
};

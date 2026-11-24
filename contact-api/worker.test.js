import assert from "node:assert/strict";
import test from "node:test";
import worker from "./src/index.js";

const origin = "https://rajmagdum05.github.io";
const env = {
  ALLOWED_ORIGIN: origin,
  CONTACT_RECIPIENT: "rajmagdum6844@gmail.com",
  RESEND_API_KEY: "test-key",
  RESEND_FROM_EMAIL: "Raj <contact@example.com>",
};
const validMessage = {
  name: "Test Sender",
  email: "sender@example.com",
  topic: "Project",
  message: "This is a delivery test.",
  website: "",
};

const request = (body, requestOrigin = origin) =>
  new Request("https://contact.example/contact", {
    method: "POST",
    headers: {
      Origin: requestOrigin,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

test("sends a valid message to Resend and returns accepted", async () => {
  const originalFetch = globalThis.fetch;
  let sent;
  globalThis.fetch = async (url, options) => {
    sent = { url, options };
    return Response.json({ id: "email_test_id" }, { status: 200 });
  };

  try {
    const response = await worker.fetch(request(validMessage), env);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { success: true });
    assert.equal(sent.url, "https://api.resend.com/emails");
    assert.equal(sent.options.headers.Authorization, "Bearer test-key");
    const email = JSON.parse(sent.options.body);
    assert.deepEqual(email.to, [env.CONTACT_RECIPIENT]);
    assert.equal(email.reply_to, validMessage.email);
    assert.match(email.text, /This is a delivery test\./);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("rejects a disallowed origin without calling Resend", async () => {
  const originalFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return Response.json({ id: "unexpected" });
  };

  try {
    const response = await worker.fetch(request(validMessage, "https://evil.example"), env);
    assert.equal(response.status, 403);
    assert.equal(called, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("rejects invalid email before sending", async () => {
  const originalFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return Response.json({ id: "unexpected" });
  };

  try {
    const response = await worker.fetch(
      request({ ...validMessage, email: "not-an-email" }),
      env,
    );
    assert.equal(response.status, 400);
    assert.equal(called, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("reports provider rejection without claiming success", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () =>
    Response.json({ message: "domain is not verified" }, { status: 403 });

  try {
    const response = await worker.fetch(request(validMessage), env);
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), {
      success: false,
      error: "Mail provider rejected the message.",
    });
  } finally {
    globalThis.fetch = originalFetch;
  }
});

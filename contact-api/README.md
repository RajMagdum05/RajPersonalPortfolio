# Contact mail API setup

The portfolio is hosted as a static GitHub Pages site, so the form uses this
Cloudflare Worker as its server-side mail endpoint. The Worker sends messages
through Resend and keeps the Resend API key out of the public site.

## One-time setup

1. Create a Resend account, add a sending domain you control, and complete its
   DNS verification. Create an API key limited to sending from that domain.
2. In Cloudflare, create an API token that can deploy Workers and copy the
   account ID. Add both as GitHub Actions secrets named
   `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
3. Deploy the Worker from the Actions tab with **Deploy contact mail API**. In
   Cloudflare Worker settings, add these secrets:
   - `RESEND_API_KEY`: the Resend sending key
   - `RESEND_FROM_EMAIL`: a sender on the verified domain, such as
     `Raj Magdum <contact@your-verified-domain>`
4. Copy the Worker URL. In GitHub repository settings, add a repository
   variable named `CONTACT_API_URL` with that URL. Re-run **Deploy to GitHub
   Pages** to bake it into the static site.

The destination is `rajmagdum6844@gmail.com`, and the allowed browser origin is
the current GitHub Pages site. Update `contact-api/wrangler.toml` if either
changes. The key must only be stored as a Cloudflare Worker secret; never put
it in the portfolio source or a GitHub Actions variable.

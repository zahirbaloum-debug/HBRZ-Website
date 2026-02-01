const { Resend } = require("resend");

module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    // Make sure JSON is parsed
    const body = req.body || {};
    const { fullName, organization, email, inquiryType, message } = body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "Missing required fields: fullName, email, message",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.log("RESEND_API_KEY missing in environment variables");
      return res.status(500).json({ ok: false, error: "RESEND_API_KEY not set" });
    }

    const resend = new Resend(apiKey);

    const subject = `New Inquiry (${inquiryType || "General"}) - ${fullName}`;

    const html = `
      <h2>New Website Inquiry</h2>
      <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(organization || "-")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryType || "-")}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>
    `;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",            // safest sender for now
      to: ["info@hbrzglobalpurity.com"],
      reply_to: email,                           // NOTE: resend uses reply_to (snake_case)
      subject,
      html,
    });

    console.log("Resend result:", result);

    return res.status(200).json({ ok: true, result });
  } catch (err) {
    console.error("API /api/contact error:", err);
    return res.status(500).json({ ok: false, error: String(err) });
  }
};

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


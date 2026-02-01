import { Resend } from "resend";

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { fullName, organization, email, inquiryType, message } = req.body || {};

    // Basic validation
    if (!fullName || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "Missing required fields: fullName, email, message",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // IMPORTANT:
    // Use a verified sender on your verified domain.
    // If you already have info@ working, use it.
    const fromAddress = "HBRZ Website <info@hbrzglobalpurity.com>";

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

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: ["info@hbrzglobalpurity.com"],
      replyTo: email, // So you can reply directly to the sender
      subject,
      html,
    });

    if (error) {
      return res.status(500).json({ ok: false, error });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) });
  }
}

// Small helper to prevent HTML injection in email body
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
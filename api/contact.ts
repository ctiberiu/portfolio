import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    res.status(500).json({
      ok: false,
      error: "Server is not configured. Missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL",
    });
    return;
  }

  let body: unknown = req.body;

  // Vercel typically parses JSON, but handle string body just in case
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ ok: false, error: "Invalid JSON" });
      return;
    }
  }

  const { name, email, message } = (body || {}) as Partial<ContactPayload>;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    res.status(400).json({ ok: false, error: "Missing required fields" });
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const subject = `Portfolio contact: ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      "---",
      "Sent from your portfolio contact form.",
    ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      text,
    });

    if (error) {
      res.status(500).json({ ok: false, error: error.message || "Failed to send" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err?.message || "Failed to send" });
  }
}

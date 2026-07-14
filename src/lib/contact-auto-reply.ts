import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const autoReplyInput = z.object({
  to: z.string().email(),
  name: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtmlTemplate({ name, message }: { name: string; message: string }) {
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html lang="fr">
  <body style="margin:0;padding:0;background-color:#f4f7fb;font-family:Segoe UI,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7fb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 18px rgba(15,23,42,0.06);">
            <tr>
              <td style="background:linear-gradient(135deg,#2f6fed,#5b9bff);padding:28px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:40px;height:40px;background-color:#ffcc33;border-radius:10px;text-align:center;vertical-align:middle;font-weight:800;font-size:18px;color:#1f2a44;">R</td>
                    <td style="padding-left:12px;color:#ffffff;font-size:18px;font-weight:800;">Retex <span style="color:#ffcc33;">Solution</span></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 4px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2f6fed;">Confirmation de votre demande</p>
                <h1 style="margin:6px 0 20px;font-size:22px;color:#1f2a44;">Bonjour ${safeName},</h1>
                <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3a4257;">${safeMessage}</p>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 28px;">
                  <tr>
                    <td style="background-color:#ffcc33;border-radius:10px;">
                      <a href="mailto:solutionretex@gmail.com" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:#1f2a44;text-decoration:none;">Nous contacter</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0;font-size:13px;color:#8892a6;">— L'équipe Retex Solution</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#f4f7fb;border-top:1px solid #eef1f6;">
                <p style="margin:0;font-size:12px;color:#9aa3b5;">solutionretex@gmail.com · Miami, Alexandrie, Égypte</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();
}

export const sendContactAutoReply = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => autoReplyInput.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured — contact auto-reply skipped");
      return { sent: false as const, reason: "not_configured" as const };
    }

    const from =
      process.env.RESEND_FROM_EMAIL ?? "Retex Solution <onboarding@resend.dev>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [data.to],
        subject: data.subject,
        text: `${data.name},\n\n${data.message}\n\n— Retex Solution\nsolutionretex@gmail.com`,
        html: buildHtmlTemplate({ name: data.name, message: data.message }),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend contact auto-reply failed:", errorBody);
      return { sent: false as const, reason: "send_failed" as const };
    }

    return { sent: true as const };
  });

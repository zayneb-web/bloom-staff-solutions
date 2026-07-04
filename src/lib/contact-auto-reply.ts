import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const autoReplyInput = z.object({
  to: z.string().email(),
  name: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
});

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
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend contact auto-reply failed:", errorBody);
      return { sent: false as const, reason: "send_failed" as const };
    }

    return { sent: true as const };
  });

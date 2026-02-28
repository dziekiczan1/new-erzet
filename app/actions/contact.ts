"use server";
import { z } from "zod";

const contactSchema = z
  .object({
    user_email: z.string().email().max(120),
    user_name: z.string().max(100).optional(),
    user_subject: z.string().max(150).optional(),
    message: z.string().max(3000).optional(),
  })
  .strict();

export async function sendContactEmail(formData: FormData) {
  const serviceID = process.env.CONTACT_SERVICE;
  const templateID = "contact_form";
  const publicKey = process.env.CONTACT_PUBLIC_KEY;
  const privateKey = process.env.CONTACT_PRIVATE_KEY;

  if (!serviceID || !publicKey || !privateKey) {
    return {
      success: false,
      error: "Brak konfiguracji EmailJS",
    };
  }

  try {
    const rawData = Object.fromEntries(formData);

    const blacklistedPatterns = [
      /curl\s/i,
      /wget\s/i,
      /bash/i,
      /sh\s+-c/i,
      /eval/i,
      /exec/i,
      /child_process/i,
      /\/tmp/i,
      /nohup/i,
      /base64/i,
      /atob/i,
      /kdevtmpfsi/i,
      /kinsing/i,
      /xmrig/i,
    ];

    for (const value of Object.values(rawData)) {
      if (typeof value === "string") {
        if (blacklistedPatterns.some((pattern) => pattern.test(value))) {
          return { success: false, error: "Nieprawidłowa treść wiadomości" };
        }
      }
    }

    const validated = contactSchema.parse(rawData);

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          template_params: validated,
          user_id: publicKey,
          accessToken: privateKey,
        }),
      },
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`EmailJS error: ${response.status} - ${errorText}`);
    }

    return { success: true };
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error("Błąd walidacji:", err);
      return { success: false, error: "Nieprawidłowe dane w formularzu" };
    }

    console.error("Błąd wysyłania maila:", err);
    return {
      success: false,
      error: "Nie udało się wysłać wiadomości",
    };
  }
}

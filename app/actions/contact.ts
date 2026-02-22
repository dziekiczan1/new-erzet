"use server";

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
    const data = Object.fromEntries(formData);

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
          template_params: data,
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
    console.error("Błąd wysyłania maila:", err);
    return {
      success: false,
      error: "Nie udało się wysłać wiadomości",
    };
  }
}

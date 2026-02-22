import { FormEvent, useRef, useState } from "react";
import { FormStatus } from "@/lib/contact-form";
import { sendContactEmail } from "@/app/actions/contact";

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    const formData = new FormData(formRef.current);
    const email = formData.get("user_email") as string;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      formRef.current.reset();
    } else {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 2200);
  }

  return { formRef, status, handleSubmit };
};

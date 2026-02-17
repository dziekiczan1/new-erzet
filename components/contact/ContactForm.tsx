"use client";

import { m } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { formFields } from "@/lib/contact-form";
import { useContactForm } from "@/hooks/useContactForm";

const FormField = ({ children }: { children: React.ReactNode }) => (
  <m.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="space-y-6 lg:space-y-10 w-full xl:w-4/5 mx-auto"
  >
    {children}
  </m.div>
);

export const ContactForm = () => {
  const { formRef, status, handleSubmit } = useContactForm();
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative px-4 py-6 lg:p-8 lg:max-w-3xl xl:max-w-5xl w-full glass-card"
    >
      <FormField>
        {formFields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            pattern={field.pattern}
          />
        ))}
      </FormField>

      <div className="flex justify-center mt-6 lg:mt-8">
        {status === "idle" ? (
          <button type="submit">Send Message</button>
        ) : (
          "status"
        )}
      </div>
    </form>
  );
};

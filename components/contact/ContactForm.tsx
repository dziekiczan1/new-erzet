"use client";

import { m } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { formFields } from "@/lib/contact-form";
import { useContactForm } from "@/hooks/useContactForm";
import Button from "@/components/ui/Button";

const FormField = ({ children }: { children: React.ReactNode }) => (
  <m.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="space-y-4 lg:space-y-8 w-full"
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
      className="relative lg:max-w-3xl mx-auto"
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
          <Button type="submit">Send Message</Button>
        ) : (
          "status"
        )}
      </div>
    </form>
  );
};

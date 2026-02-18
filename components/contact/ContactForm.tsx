"use client";

import { m } from "framer-motion";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { useContactForm } from "@/hooks/useContactForm";
import { CONTACT_CTA, formFields } from "@/lib/contact-form";

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
      className="relative w-full lg:max-w-4/5 mx-auto"
    >
      <FormField>
        {formFields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            errorMessage={field.errorMessage}
            pattern={field.pattern}
            textarea={field.textarea}
            rows={field.rows}
          />
        ))}
      </FormField>

      <div className="flex justify-center mt-6 lg:mt-8">
        {status === "idle" ? (
          <Button type="submit" size="lg">
            {CONTACT_CTA}
          </Button>
        ) : (
          <StatusIndicator status={status} />
        )}
      </div>
    </form>
  );
};

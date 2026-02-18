export type FormStatus = "idle" | "loading" | "success" | "error";

export type FormFieldConfig = {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  errorMessage: string;
  textarea?: boolean;
  rows?: number;
  pattern?: string;
};

export const CONTACT_HEADING = "Kontakt";

export const CONTACT_CTA = "Wyślij wiadomość";

export const formFields: FormFieldConfig[] = [
  {
    name: "user_name",
    label: "Imię i Nazwisko",
    type: "text",
    placeholder: "np. Jan Kowalski",
    required: true,
    errorMessage: "Proszę podać swoje imię i nazwisko.",
  },
  {
    name: "user_email",
    label: "Adres Email",
    type: "email",
    placeholder: "jan.kowalski@mail.com",
    required: true,
    pattern: "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$",
    errorMessage: "Proszę podać poprawny adres email.",
  },
  {
    name: "user_subject",
    label: "Temat",
    type: "text",
    placeholder: "Temat wiadomości",
    required: true,
    errorMessage: "Proszę podać temat wiadomości.",
  },
  {
    name: "message",
    label: "Wiadomość",
    placeholder: "Napisz swoją wiadomość tutaj...",
    required: true,
    errorMessage: "Proszę wpisać treść wiadomości.",
    textarea: true,
    rows: 4,
  },
];

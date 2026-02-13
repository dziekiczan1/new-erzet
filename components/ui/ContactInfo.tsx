import { Mail, Phone } from "lucide-react";

interface ContactInfoProps {
  email: string;
  phone: string;
}

export const ContactInfo = ({ email, phone }: ContactInfoProps) => (
  <div
    className="flex flex-col items-center gap-2 text-sm"
    aria-label="Dane kontaktowe"
  >
    <a
      href={`mailto:${email}`}
      className="flex items-center gap-2 hover:underline"
      aria-label={`Wyślij email na adres ${email}`}
    >
      <Mail
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 text-primary"
        aria-label={`Zadzwoń pod numer ${phone}`}
      />
      <span>{email}</span>
    </a>
    <a
      href={`tel:${phone}`}
      className="flex items-center gap-2 hover:underline"
    >
      <Phone
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 text-primary"
      />
      <span>{phone}</span>
    </a>
  </div>
);

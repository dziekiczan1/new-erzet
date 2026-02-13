import { Facebook, Linkedin } from "lucide-react";
import { XIcon } from "@/lib/x-icon";

interface ContactInfo {
  email: string;
  phone: string;
}

export interface ContactLink {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

export const contactInfo: ContactInfo = {
  email: "erzet.dev@gmail.com",
  phone: "+48 505-933-394",
};

export const links: ContactLink[] = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/people/ERZET/100089004531475",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/erzet",
    label: "LinkedIn",
  },
  { icon: XIcon, href: "https://x.com/eRZetCompany", label: "X" },
];

import { Facebook, Linkedin } from "lucide-react";
import { XIcon } from "@/components/ui/XIcon";

export interface IContactInfo {
  email: string;
  phone: string;
}

export interface IContactLink {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

export interface ISocialLinksProps {
  links: IContactLink[];
}

export const CONTACT_INFO: IContactInfo = {
  email: "erzet.dev@gmail.com",
  phone: "+48 505-933-394",
};

export const CONTACT_SOCIAL: IContactLink[] = [
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

import Logo, { ILogoProps } from "@/components/header/Logo";
import { ContactInfo } from "./ContactInfo";
import { SocialLinks } from "./SocialLinks";
import { CONTACT_INFO, CONTACT_SOCIAL } from "@/lib/contact";

export const ContactSection = ({ variant = "black" }: ILogoProps) => (
  <div className="flex flex-1 flex-col gap-4 justify-center items-center">
    <Logo variant={variant} />
    <ContactInfo email={CONTACT_INFO.email} phone={CONTACT_INFO.phone} />
    <SocialLinks links={CONTACT_SOCIAL} />
  </div>
);

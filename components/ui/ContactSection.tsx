import Logo from "@/components/header/Logo";
import { ContactInfo } from "./ContactInfo";
import { SocialLinks } from "./SocialLinks";
import { contactInfo, links } from "@/lib/contact";

export const ContactSection = () => (
  <div className="flex flex-1 flex-col gap-4 justify-center items-center">
    <Logo />
    <ContactInfo email={contactInfo.email} phone={contactInfo.phone} />
    <SocialLinks links={links} />
  </div>
);

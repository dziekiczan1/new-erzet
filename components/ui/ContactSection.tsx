import Logo, { ILogoProps } from "@/components/header/Logo";
import { ContactInfo } from "./ContactInfo";
import { SocialLinks } from "./SocialLinks";
import { CONTACT_INFO, CONTACT_SOCIAL } from "@/lib/contact";

export const ContactSection = ({ variant = "black", footer }: ILogoProps) => (
  <div className="flex flex-1 flex-col gap-4 justify-center items-center">
    <Logo variant={variant} />
    {footer && (
      <div className="flex flex-col gap-2 lg:gap-0 text-center">
        <p className="footer-contact text-base font-semibold">
          eRZet - Piotr Rzadkowolski
        </p>
        <p className="footer-contact">ul. Bandurskiego 65N/1</p>
        <p className="footer-contact">05-270 Marki</p>
        <p className="footer-contact">NIP: 8513120222</p>
        <p className="footer-contact">REGON: 523299221</p>
      </div>
    )}
    <ContactInfo
      email={CONTACT_INFO.email}
      phone={CONTACT_INFO.phone}
      footer={footer}
    />
    <SocialLinks links={CONTACT_SOCIAL} />
  </div>
);

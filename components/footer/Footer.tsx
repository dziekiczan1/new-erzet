"use client";

import { ContactSection } from "@/components/ui/ContactSection";
import { NAV_ITEMS } from "@/lib/navigation";
import { Link } from "react-scroll";
import { FOOTER_COPYRIGHTS, FOOTER_NAV_HEADING } from "@/lib/footer";

const Footer = () => {
  return (
    <footer className="relative bg-foreground pt-8">
      <div className="container-main flex flex-col px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 pb-8">
          <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-1/3">
            <h3 className="service-card-title text-primary-contrast uppercase">
              {FOOTER_NAV_HEADING}
            </h3>
            <nav
              className="flex flex-col gap-4"
              aria-label="Nawigacja w stopce"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  offset={-56}
                  className="link text-background cursor-pointer w-fit mx-auto lg:mx-0"
                  tabIndex={0}
                  role={`link`}
                  href={`#${item.id}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex lex-row gap-16 flex-1 mt-8 lg:mt-0 w-full lg:w-2/3">
            <ContactSection variant="white" footer />
            <div className="hidden lg:block aspect-video lg:max-w-[355px] xl:max-w-3/5 overflow-hidden rounded-xl border border-border/30 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.163426903035!2d21.087402976918256!3d52.331181250191605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecf159ef43bb3%3A0xe9831251fe8a3035!2sBandurskiego%2065N%2C%2005-270%20Marki!5e0!3m2!1spl!2spl!4v1771430466413!5m2!1spl!2spl"
                width="100%"
                height="100%"
                loading="lazy"
                title="Lokalizacja eRZet"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border py-4 border-light/40">
          <p className="text-background text-sm text-center">
            {FOOTER_COPYRIGHTS}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import { ContactSection } from "@/components/ui/ContactSection";

const navigation = [
  { label: "Usługi", href: "#services" },
  { label: "Proces", href: "#process" },
  { label: "Dlaczego my", href: "#why-us" },
  { label: "Kontakt", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background pt-20 pb-10">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container-main flex flex-col gap-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6 max-w-sm">
            <h3 className="text-xl font-semibold">
              Tworzę stabilne i skalowalne aplikacje webowe.
            </h3>
            <p className="text-sm text-muted">
              TypeScript, React, Next.js, Node.js. Produkcyjna jakość kodu i
              partnerskie podejście.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 lg:items-center">
            <h4 className="font-semibold">Nawigacja</h4>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted hover:text-background transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex lg:justify-end">
            <ContactSection variant="white" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} All rights reserved.</p>

          <p>Built with Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { Link } from "react-scroll";
import { m } from "framer-motion";

import { NAV_ITEMS } from "@/lib/navigation";

interface NavLinksProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export function NavLinks({ onLinkClick, isMobile = false }: NavLinksProps) {
  const sharedClasses = "link cursor-pointer";

  if (isMobile) {
    return (
      <ul className="flex flex-col gap-4">
        {NAV_ITEMS.map((item, i) => (
          <m.li
            key={item.id}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.04, ease: "easeOut" }}
          >
            <Link
              to={item.id}
              spy
              smooth
              duration={500}
              offset={0}
              activeClass="link-active"
              onClick={onLinkClick}
              className={sharedClasses}
              tabIndex={0}
              role={`link`}
              href={`#${item.id}`}
            >
              {item.label}
            </Link>
          </m.li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="hidden md:flex items-center gap-4 lg:gap-8">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <Link
            to={item.id}
            spy
            smooth
            duration={500}
            offset={-64}
            activeClass="link-active"
            className={sharedClasses}
            tabIndex={0}
            role={`link`}
            href={`#${item.id}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

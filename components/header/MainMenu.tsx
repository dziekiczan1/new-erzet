"use client";

import React, { useEffect, useState } from "react";
import { scrollSpy } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Linkedin, Mail, Menu, Phone, X } from "lucide-react";

import { NavLinks } from "@/components/header/NavLinks";
import Logo from "@/components/header/Logo";
import { XIcon } from "@/lib/x-icon";
import { ContactSection } from "@/components/ui/ContactSection";

const MainMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => scrollSpy.update());
    }
  }, [open]);

  return (
    <>
      <NavLinks />

      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden rounded-lg p-2 hover:bg-light"
        aria-label={open ? "Zamknij menu" : "Otwórz Menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role={`navigation`}
            id={`mobile-menu`}
            aria-modal
            aria-label="Nawigacja mobilna"
            className="absolute top-16 left-0 right-0 rounded-2xl bg-background/95 backdrop-blur-sm ring-1 ring-black/10 px-4 py-4 mx-2 shadow-sm md:hidden flex justify-between"
          >
            <div className="flex-1">
              <NavLinks isMobile onLinkClick={() => setOpen(false)} />
            </div>
            <div className="w-px bg-tertiary/20 mx-4" />
            <ContactSection />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainMenu;

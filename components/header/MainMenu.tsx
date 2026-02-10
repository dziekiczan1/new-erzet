"use client";

import { useEffect, useState } from "react";
import { scrollSpy } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NavLinks } from "@/components/header/NavLinks";

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
        aria-label={open ? "Close Menu" : "Open Menu"}
        aria-expanded={open}
        aria-controls="menu"
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
          <>
            <motion.aside
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role={`dialog`}
              id={`mobile-menu`}
              aria-modal
              aria-label={`Mobile navigation menu`}
              className="absolute top-16 left-0 right-0 rounded-2xl bg-background/95 backdrop-blur-sm ring-1 ring-black/10 px-4 py-4 shadow-sm md:hidden"
            >
              <NavLinks isMobile onLinkClick={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainMenu;

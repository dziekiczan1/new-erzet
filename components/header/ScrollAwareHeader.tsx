"use client";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollAwareHeader() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const header = document.querySelector("[data-header]");
    if (!header) return;

    header.classList.toggle("scrolled", latest > 20);
  });

  return null;
}

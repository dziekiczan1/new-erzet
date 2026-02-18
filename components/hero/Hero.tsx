import Image from "next/image";

import { HERO_TEXT } from "@/lib/hero";
import AnimatedBox from "@/components/hero/AnimatedBox";
import { GridPattern } from "@/components/ui/Grid";
import { Divider } from "@/components/ui/Divider";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-8 pb-8 pt-18 lg:py-20 px-4 lg:px-8 lg:h-svh max-h-svh bg-gradient-to-br from-primary-light/80 to-transparent"
    >
      <GridPattern />
      <div className="lg:flex-1 z-10 lg:pt-8 sm:text-center lg:text-left">
        <AnimatedBox lines={HERO_TEXT.title} />
      </div>
      <div className="relative isolate flex justify-center w-full lg:max-w-[50vw] lg:pt-8 lg:flex-1 aspect-[32/25] max-h-[50svh] lg:max-h-svh">
        <picture className="absolute inset-0">
          <source media="(max-width: 1023px)" srcSet="/hero_mobile.svg" />
          <source media="(min-width: 1024px)" srcSet="/hero.svg" />
          <img
            src="/hero.svg"
            srcSet="/hero_mobile.svg 1023w, /hero.svg 1920w"
            sizes="(max-width: 1023px) 100vw, 50vw"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain"
            loading="eager"
          />
        </picture>
      </div>
      <Divider className="absolute left-0 bottom-0 right-0 w-full" />
    </section>
  );
};

export default Hero;

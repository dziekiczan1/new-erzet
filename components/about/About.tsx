"use client";
import { m } from "framer-motion";

import { aboutText } from "@/lib/about";
import MotionImage from "@/components/ui/MotionImage";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="section-wrapper bg-gradient-to-b from-primary-light to-background lg:pb-20"
      aria-labelledby="about-heading"
    >
      <div className="container-main flex flex-col gap-4 lg:gap-8 p-0">
        <div className="flex flex-col gap-4 lg:gap-16">
          <h2 id="about-heading" className="mx-auto">
            {aboutText.title}
          </h2>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-4 lg:gap-16">
            {/*<div*/}
            {/*    className="flex justify-center items-center flex-1 lg:h-auto max-h-[50svh] lg:max-h-none aspect-[582/505] bg-[url('/about1.webp')] bg-contain bg-center bg-no-repeat">*/}
            <div className="flex justify-center items-center flex-1 lg:h-auto max-h-[50svh] lg:max-h-svh aspect-[462/471] relative">
              <Image
                src="/about.svg"
                alt=""
                loading="lazy"
                aria-hidden="true"
                fill
                className="w-full h-auto object-contain"
              />
              {/*<MotionImage*/}
              {/*  src="/about.webp"*/}
              {/*  alt="Ilustracja przedstawiająca zespół tworzący rozwiązania cyfrowe"*/}
              {/*  preset="zoom-in"*/}
              {/*  duration={2}*/}
              {/*  className="flex justify-center items-center lg:items-stretch w-full min-h-full"*/}
              {/*  imageClass="min-h-0"*/}
              {/*/>*/}
            </div>
            <div className="flex-1 relative p-[1px] rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-tertiary/40 transform-gpu will-change-transform">
              <div className="flex flex-col gap-4 h-full lg:min-h-[240px] items-center text-center rounded-3xl bg-background/70 backdrop-blur-xl p-4 lg:p-6 overflow-hidden border-line-top">
                {aboutText.paragraphs.map((paragraph, i) => (
                  <m.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="leading-relaxed text-pretty"
                  >
                    {paragraph}
                  </m.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

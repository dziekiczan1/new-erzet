"use client";
import { aboutText } from "@/lib/about";
import MotionImage from "@/components/ui/MotionImage";
import { motion } from "framer-motion";
import { IMG_URL } from "@/lib/images";

const About = () => {
  return (
    <section
      id="about"
      className="section-wrapper bg-gradient-to-b from-primary-light to-background"
    >
      <div className="container-main flex flex-col gap-4 lg:gap-8 p-0">
        <div className="flex flex-col gap-4 lg:gap-16">
          <h2 className="mx-auto">{aboutText.title}</h2>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-4 lg:gap-16">
            <div className="flex justify-center items-center flex-1 max-h-[50dvh] lg:max-h-none">
              <MotionImage
                src={`${IMG_URL}/about.png`}
                alt="Hero illustration"
                preset="zoom-in"
                width={920}
                height={799}
                duration={2}
              />
            </div>
            <div
              className="flex flex-col gap-4 flex-1 px-2 py-4 lg:p-6 bg-gradient-to-bl from-background/50 to-transparent backdrop-blur-lg
            rounded-2xl border-b-2 border-t-2 border-tertiary/20 -mx-2 sm:text-center sm:max-w-lg sm:mx-auto lg:mx-0 square-bevel"
            >
              {aboutText.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="leading-relaxed text-pretty"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

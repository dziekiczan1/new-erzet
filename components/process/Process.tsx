"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Image from "next/image";

import ProcessLine from "./ProcessLine";
import ProcessStep from "./ProcessStep";
import GridPattern from "@/components/ui/Grid";
import { PROCESS_HEADING, PROCESS_STEPS } from "@/lib/process";
import { Divider } from "@/lib/divider";

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 75%"],
  });
  return (
    <section
      id="process"
      className="section-wrapper relative bg-foreground py-10 lg:py-32 lg:pb-40"
      aria-labelledby="process-heading"
    >
      <Divider className="absolute left-0 -top-px right-0 w-full -rotate-180" />
      <Divider className="absolute left-0 bottom-0 right-0 w-full" />
      <GridPattern variant="bottom-right" />

      <div className="container-main flex flex-col gap-8 lg:gap-16 p-0">
        <h2 id="about-heading" className="mx-auto text-background lg:mb-12">
          {PROCESS_HEADING}
        </h2>
        <div className="relative" ref={ref}>
          <ProcessLine progress={scrollYProgress} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={i}
                total={PROCESS_STEPS.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

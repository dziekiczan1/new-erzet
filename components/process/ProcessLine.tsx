"use client";

import { MotionValue, m, useTransform } from "framer-motion";

const ProcessLine = ({ progress }: { progress: MotionValue<number> }) => {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="hidden lg:flex items-end justify-between absolute -top-5 left-20 xl:left-34 right-20 xl:right-34 h-16 pointer-events-none">
      <div className="absolute left-0 right-0 h-2 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 rounded-full" />
      <m.div
        style={{ width }}
        className="absolute left-0 h-2 bg-gradient-to-r from-secondary via-primary to-primary rounded-full shadow-[0_0_10px_#8070f6cc] origin-left"
      />
    </div>
  );
};

export default ProcessLine;

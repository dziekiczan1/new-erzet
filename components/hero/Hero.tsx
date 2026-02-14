import Image from "next/image";

import AnimatedBox from "@/components/hero/AnimatedBox";
import { GridPattern } from "@/components/ui/Grid";
import MotionImage from "@/components/ui/MotionImage";
import { heroText } from "@/lib/hero";
import { IMG_URL } from "@/lib/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-8 pb-8 pt-18 lg:py-20 px-4 lg:px-8 h-svh max-h-svh"
    >
      <GridPattern />
      <div className="absolute -left-20 top-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[500px] lg:h-[600px] lg:w-[800px] rounded-full bg-primary-light blur-[120px]" />
      <div className="lg:flex-1 z-10 lg:pt-8 sm:text-center lg:text-left">
        <AnimatedBox lines={heroText.title} />
      </div>
      <div className="lg:flex-1 flex justify-center lg:pt-8 w-full h-full lg:max-w-[50vw] bg-[url('/hero1.webp')] bg-contain bg-center bg-no-repeat"></div>
      <Image
        src="./divider.svg"
        alt=""
        priority
        fetchPriority="high"
        aria-hidden="true"
        width={671}
        height={9}
        className="absolute left-0 bottom-0 right-0 w-full"
      />
    </section>
  );
};

export default Hero;

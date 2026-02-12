import { GridPattern } from "@/components/ui/Grid";
import { heroText } from "@/lib/hero";
import MotionImage from "@/components/ui/MotionImage";
import AnimatedBox from "@/components/hero/AnimatedBox";
import { IMG_URL } from "@/lib/images";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center gap-8 pb-8 pt-22 lg:py-20 px-4 lg:px-8 h-dvh max-h-dvh"
    >
      <GridPattern />
      <div className="absolute -left-20 top-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[500px] lg:h-[600px] lg:w-[800px] rounded-full bg-primary-light blur-[120px]" />
      <div className="flex-1 z-10 lg:p-8 lg:pr-0 sm:text-center lg:text-left">
        <AnimatedBox lines={heroText.title} />
      </div>
      <div className="flex justify-center flex-1 lg:p-8 lg:pl-0 lg:pb-0 max-h-[50dvh] lg:max-h-none">
        <MotionImage
          src={`${IMG_URL}/hero.png`}
          alt="Hero illustration"
          preset="zoom-in"
          fetchPriority="high"
          duration={0.5}
          width={938}
          height={800}
          className="flex justify-center items-center lg:items-stretch"
        />
      </div>
      <Image
        src="./divider.svg"
        alt={"Divider"}
        fetchPriority="high"
        width={671}
        height={9}
        className="absolute left-0 bottom-0 right-0 w-full"
      />
    </section>
  );
};

export default Hero;

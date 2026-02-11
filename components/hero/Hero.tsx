import { GridPattern } from "@/components/hero/Grid";
import { heroText } from "@/lib/hero";
import MotionImage from "@/components/hero/MotionImage";
import AnimatedBox from "@/components/hero/AnimatedBox";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row gap-8 py-20 px-4 md:px-8 md:h-dvh max-h-dvh"
    >
      <GridPattern />
      <div className="absolute -left-20 top-0 h-[300px] w-[300px] md:h-[600px] md:w-[768px] rounded-full bg-primary-light blur-[120px]" />
      <div className="flex flex-1 items-center z-10 md:p-8">
        <AnimatedBox lines={heroText.title} />
      </div>
      <div className="flex-1 md:p-8">
        <MotionImage
          src="/hero-image.webp"
          alt="Hero illustration"
          preset="zoom-in"
          duration={2}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;

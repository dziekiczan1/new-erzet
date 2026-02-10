import Image from "next/image";
import Button from "@/components/Button";
import { GridPattern } from "@/components/Grid";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center gap-8 py-20 px-4 md:px-8 min-h-screen"
    >
      <GridPattern />
      <div className="flex-1 z-10">
        <h1>Lorem ipsum dolor sit amet</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <h3>Lorem ipsum dolor sit amet</h3>
        <h4>Lorem ipsum dolor sit amet</h4>
        <div>Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="mt-6 flex items-start flex-wrap gap-4">
          <Button>Skontaktuj się</Button>
          <Button size={`lg`}>Skontaktuj się</Button>
          <Button variant="secondary" size={`sm`}>
            Zobacz ofertę
          </Button>
        </div>
      </div>

      <div className="flex-1 flex justify-center z-10">
        <Image
          src="/hero1.svg"
          alt="ERZET logo"
          width={500}
          height={500}
          className={`w-full`}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;

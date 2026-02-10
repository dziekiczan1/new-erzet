import Image from "next/image";
import Button from "@/components/Button";

const Hero2 = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center gap-8 py-16 min-h-screen"
    >
      <div className="flex-1">
        <h1>Lorem ipsum dolor sit amet</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <h3>Lorem ipsum dolor sit amet</h3>
        <h4>Lorem ipsum dolor sit amet</h4>
        <div>Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button>Skontaktuj się</Button>
          <Button variant="secondary" size="sm">
            Zobacz ofertę
          </Button>
        </div>
      </div>

      <div className="flex-1">
        <Image
          src="/hero1.svg"
          alt="ERZET logo"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
};

export default Hero2;

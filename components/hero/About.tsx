import Button from "@/components/Button";
import { heroText } from "@/lib/hero";
import MotionImage from "@/components/hero/MotionImage";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-8 py-20 px-4 md:px-8 bg-primary-light"
    >
      <div className="container-main flex">
        <div className="flex flex-1 items-center z-10">
          <div className="flex flex-col gap-8 max-w-4xl">
            <h1>
              {heroText.title.map((line, i) => (
                <span key={i} className={i === 0 ? "hero-text" : ""}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
              {heroText.description}
            </p>
            <Button size="lg" className="w-fit">
              {heroText.cta}
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <MotionImage
            src="/hero-image.webp"
            alt="Hero illustration"
            preset="zoom-in"
            duration={2}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

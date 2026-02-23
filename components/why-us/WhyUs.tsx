import { WHYUS, WHYUS_HEADING } from "@/lib/why-us";
import { WhyUsCard } from "@/components/why-us/WhyUsCard";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="section-wrapper lg:py-20 bg-gradient-to-b from-primary-light to-background"
      aria-labelledby="why-us-heading"
    >
      <div className="container-main flex flex-col gap-8 lg:gap-16 p-0">
        <h2 id="why-us-heading" className="text-center">
          {WHYUS_HEADING}
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-8 max-w-4/5 mx-auto xs:max-w-full xs:mx-0">
          {WHYUS.map((reason, index) => (
            <WhyUsCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

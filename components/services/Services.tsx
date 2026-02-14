import { services, servicesHeading } from "@/lib/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="section-wrapper pt-0 bg-gradient-to-b from-background to-primary-light"
      aria-labelledby="services-heading"
    >
      <div className="container-main flex flex-col gap-8 lg:gap-16 p-0">
        <h2 id="services-heading" className="mx-auto">
          {servicesHeading}
        </h2>

        <div className="grid grid-cols-1 max-w-[240px] mx-auto xs:max-w-full xs:mx-0 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

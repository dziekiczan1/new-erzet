import { Divider } from "@/lib/divider";
import { ContactForm } from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-wrapper"
      aria-labelledby="contact-heading"
    >
      <div className="container-main flex flex-col gap-8 lg:gap-16 p-8 bg-foreground relative rounded-2xl overflow-hidden">
        <Divider
          className="absolute left-0 -top-px right-0 w-full -rotate-180"
          fill="oklch(0.98 0.01 300)"
        />
        <Divider
          className="absolute left-0 bottom-0 right-0 w-full"
          fill="oklch(0.98 0.01 300)"
        />
        <h2 id="contact-heading" className="mx-auto text-background lg:mb-8">
          Kontakt
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;

import { Divider } from "@/components/ui/Divider";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_HEADING } from "@/lib/contact-form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-wrapper pt-0"
      aria-labelledby="contact-heading"
    >
      <div className="container-main flex flex-col gap-8 py-8 lg:py-20 bg-foreground relative rounded-2xl overflow-hidden">
        <Divider
          className="absolute left-0 -top-px right-0 w-full -rotate-180"
          fill="oklch(0.98 0.01 300)"
        />
        <Divider
          className="absolute left-0 bottom-0 right-0 w-full"
          fill="oklch(0.98 0.01 300)"
        />
        <h2 id="contact-heading" className="mx-auto text-background lg:mb-8">
          {CONTACT_HEADING}
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;

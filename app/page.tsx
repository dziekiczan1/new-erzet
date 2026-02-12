import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Process from "@/components/process/Process";
import WhyUs from "@/components/why-us/WhyUs";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col`}>
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Contact />
    </main>
  );
}

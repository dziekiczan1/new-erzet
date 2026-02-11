import Hero from "@/components/hero/Hero";
import About from "@/components/hero/About";

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col`}>
      <Hero />
      <About />
      <About />
    </main>
  );
}

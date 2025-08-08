import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Services";
import TestimonialsShowcase from "./components/Testimonial";

export default function Home() {
  return <main className="bg-white">
    <HeroSection />

    <section className=" px-4">

    <ServicesSection />
    <TestimonialsShowcase />
    </section>
  </main>;
}

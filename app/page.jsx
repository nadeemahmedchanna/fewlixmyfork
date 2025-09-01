import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Services";
import TestimonialsShowcase from "./components/Testimonial";
import LogoMarquee from "./components/LogoMarquee";
import Statics from "./components/Statics";
import BlogGroup from "./components/BlogGroup";

export default function Home() {
  return <main className="bg-white">
    <HeroSection />

    <section className="md:px-4 my-4">

    <ServicesSection />
    <TestimonialsShowcase />
    <LogoMarquee/>
    </section>
    <BlogGroup />
  </main>;
}

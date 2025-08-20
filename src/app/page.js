import Contact from "@/components/Contect";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Header />
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
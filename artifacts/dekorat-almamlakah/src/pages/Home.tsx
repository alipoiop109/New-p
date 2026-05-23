import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WhatsAppForm from "@/components/WhatsAppForm";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <WhatsAppForm />
        <SocialMedia />
      </div>
      <Footer />
    </main>
  );
}

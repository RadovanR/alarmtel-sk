import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <Contact />
      <Footer />
    </main>
  );
}

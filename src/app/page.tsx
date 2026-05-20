import Logo from "@/components/Logo";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navigation />

      <Hero />
      <Authority />
      <Services />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  );
}

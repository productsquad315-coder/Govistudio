import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Personalization from "@/components/Personalization";
import Examples from "@/components/Examples";
import LegacyServices from "@/components/LegacyServices";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navigation />

      {/* §6 — Hero: Clinic positioning headline + adapted dashboard */}
      <Hero />

      {/* §7 — Problems: Clinic pain points in asymmetric grid */}
      <Authority />

      {/* §8 — Positioning: We start with your clinic, not AI */}
      <Positioning />

      {/* §10 — Solutions: Business-outcome organized services */}
      <Services />

      {/* §9 — Process: Understand → Find → Build → Improve */}
      <Process />

      {/* §11 — Personalization: Your clinic isn't a template */}
      <Personalization />

      {/* §12 — Examples: Problem → solution conversations */}
      <Examples />

      {/* §14 — CTA: What's slowing your clinic down? */}
      <FinalCTA />

      {/* Original generic AI agency services block */}
      <LegacyServices />

      {/* §27 — Footer */}
      <Footer />
    </main>
  );
}

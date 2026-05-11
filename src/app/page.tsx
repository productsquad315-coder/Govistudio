import Logo from "@/components/Logo";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Premium glassmorphic nav */}
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center backdrop-blur-2xl border-b border-white/[0.06] bg-black/60">
        <Logo showText={false} />
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-400 font-medium">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/10 text-white hover:bg-white/5 transition-all">
          Schedule a Call
        </a>
      </nav>

      <Hero />
      <Authority />
      <Services />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  );
}


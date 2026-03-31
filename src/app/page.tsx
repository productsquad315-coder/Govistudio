import {
  Hero,
  Authority,
  Services,
  Process,
  FinalCTA,
} from "@/components";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Premium glassmorphic nav */}
      <nav className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center backdrop-blur-2xl border-b border-white/[0.06] bg-black/60">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full text-sm font-medium border border-white/10 text-white hover:bg-white/5 transition-all">
          Schedule a Call
        </a>
      </nav>

      <Hero />

      {/* Proof / Credibility strip */}


      <Authority />

      <Services />
      <Process />

      <FinalCTA />

      <Footer />
    </main>
  );
}

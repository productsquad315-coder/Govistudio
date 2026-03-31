import {
  Hero,
  Authority,
  Services,
  Process,
  FinalCTA,
} from "@/components";
import InsightsResources from "@/components/InsightsResources";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Premium glassmorphic nav */}
      <nav className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center backdrop-blur-2xl border-b border-white/[0.06] bg-black/60">
        <div className="font-bold text-xl tracking-tight">
          <span className="text-white">GOVI</span>
          <span className="text-gray-500 ml-1 font-normal">STUDIO</span>
        </div>
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

      <InsightsResources />

      <footer className="py-16 border-t border-white/[0.06] bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="font-bold text-lg tracking-tight mb-4">
                <span className="text-white">GOVI</span>
                <span className="text-gray-500 ml-1 font-normal">STUDIO</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Systems that make businesses run better.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-500 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="/use-cases" className="text-gray-500 hover:text-white transition-colors text-sm">Use Cases</a></li>
                <li><a href="/blog" className="text-gray-500 hover:text-white transition-colors text-sm">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2">
                <li><a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">Schedule a Call</a></li>
                <li><a href="mailto:hello@govistudio.com" className="text-gray-500 hover:text-white transition-colors text-sm">hello@govistudio.com</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/[0.06] text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} GOVI STUDIO. AI Systems & Product Engineering.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

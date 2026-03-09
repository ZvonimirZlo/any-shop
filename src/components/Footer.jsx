import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-30 bg-black text-white pt-16 pb-8 px-6 border-t border-white/10">
      {/* Container - Using 3 cols for 3 sections to fix spacing */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <Link to="/" className="text-2xl font-black mb-4 block">
            ANY <span className="italic font-light text-blue-400">SHOP</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Elevating your everyday essentials with curated collections for the modern lifestyle.
          </p>
        </div>

        {/* Quick Links - Centered on desktop for balance */}
        <div className="md:text-center">
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>

        {/* Newsletter - Full width on tiny screens, nicely aligned on large */}
        <div className="flex flex-col md:items-end">
          <div className="w-full max-w-sm">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400 md:text-right">Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:py-2 text-sm w-full focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="bg-white text-black px-6 py-3 md:py-2 rounded-lg font-bold text-xs hover:bg-blue-400 hover:text-white transition-all whitespace-nowrap">
                JOIN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-left">
        <p>© 2026 ANY SHOP. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
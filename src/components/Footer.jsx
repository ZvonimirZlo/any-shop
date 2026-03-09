import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-30 bg-black text-white pt-16 pb-8 px-6 border-t border-white/10 flex-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          {/* Link to hero page */}
          <Link to="/" className="text-2xl font-black mb-4 block">
            ANY <span className="italic font-light text-blue-400">SHOP</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Elevating your everyday essentials with curated collections for the modern lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {/* Link to products section */}
            <li><Link to="/" className="hover:text-white transition-colors">All Products</Link></li>
            {/* Link to new arrivals */}
            <li><Link to="/arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
            
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Newsletter</h4>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-400"
            />
            <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-xs hover:bg-blue-400 hover:text-white transition-all">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
        <p>© 2026 ANY SHOP. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
      isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-black tracking-tighter uppercase">
          ANY <span className="italic font-light text-blue-400">SHOP</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-white/90">
          <a href="#" className="hover:text-blue-400 transition-colors">Shop</a>
          <a href="#" className="hover:text-blue-400 transition-colors">New</a>
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
        </div>

        {/* Action Icons & Hamburger */}
        <div className="flex items-center space-x-5 text-white">
          <button className="hover:text-blue-400 transition-colors hidden sm:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          
{/* Hamburger Button */}
<button 
  onClick={() => setIsOpen(!isOpen)}
  className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60] md:hidden" 
>
  {/* Top Line */}
  <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
  {/* Middle Line */}
  <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
  {/* Bottom Line */}
  <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
</button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-[75%] bg-black/95 backdrop-blur-xl z-[55] flex flex-col p-10 pt-24 space-y-8 shadow-2xl"
          >
            <a href="#" onClick={() => setIsOpen(false)} className="text-white text-3xl font-bold italic border-b border-white/10 pb-4">Shop</a>
            <a href="#" onClick={() => setIsOpen(false)} className="text-white text-3xl font-bold italic border-b border-white/10 pb-4">New Arrivals</a>
            <a href="#" onClick={() => setIsOpen(false)} className="text-white text-3xl font-bold italic border-b border-white/10 pb-4">About</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
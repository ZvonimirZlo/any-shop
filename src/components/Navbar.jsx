import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);     // Mobile menu state
   const { cartCount, setIsCartOpen, isCartOpen } = useCart();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setSelectedCategory("all")}
            className="text-white text-2xl font-black"
          >
            ANY <span className="italic font-light text-blue-400">SHOP</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/arrivals" className= "text-white hover:text-blue-400" >
              NEW ARIVALS
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400" >
              ABOUT
            </Link>
          </div>

          {/* Action Icons & Hamburger */}
          <div className="flex items-center space-x-6 text-white">
            {/* Search Icon */}
            <button className="hover:text-blue-400 transition-colors hidden sm:block">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Icon (The "Cartwheel") */}
            <button onClick={() => setIsCartOpen(true)} className="relative group hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {/* Cart Notification Badge */}
              <AnimatePresence>
    {cartCount > 0 && (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        key={cartCount} // This makes it "pop" every time the number changes
        className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white ring-2 ring-black"
      >
        {cartCount}
      </motion.span>
    )}
  </AnimatePresence>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60] md:hidden"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
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
      className="fixed top-0 right-0 h-screen w-[75%] bg-black/95 backdrop-blur-xl z-[55] flex flex-col p-10 pt-24 space-y-8"
    >
      {/* Home / Shop Link */}
      <Link 
        to="/" 
        onClick={() => {
          setSelectedCategory("all");
          setIsOpen(false);
        }} 
        className="text-white text-3xl font-bold italic border-b border-white/10 pb-4"
      >
        Shop
      </Link>

      {/* New Arrivals Link */}
      <Link 
        to="/arrivals" 
        onClick={() => setIsOpen(false)} 
        className="text-white text-3xl font-bold italic border-b border-white/10 pb-4"
      >
        New Arrivals
      </Link>

      {/* About Link */}
      <Link 
        to="/about" 
        onClick={() => setIsOpen(false)} 
        className="text-white text-3xl font-bold italic border-b border-white/10 pb-4"
      >
        About
      </Link>
    </motion.div>
  )}
</AnimatePresence>
      </nav>
      <CartSidebar />
    </>
  );
};

export default Navbar;
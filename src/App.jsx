import { useState, useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const productSectionRef = useRef(null);

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
    <Navbar />
    
    {/* 1. HERO SECTION (The Background Layer) */}
    {/* We use a 'height' div here to hold the space so the products don't jump to the top */}
    <section className="relative h-screen w-full">
      <Hero setSelectedCategory={setSelectedCategory} 
       scrollToProducts={scrollToProducts} />
    </section>

    {/* 2. PRODUCT SECTION (The Foreground Layer) */}
    {/* This MUST have a higher z-index than the video and a solid BG color */}
    <main 
      ref={productSectionRef} 
      className="relative z-30 bg-white"
    >
      <ProductGrid selectedCategory={selectedCategory} />
    </main>
  </div>
  );
};

export default App;
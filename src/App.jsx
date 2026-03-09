import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import About from './components/About'
import NewArrivals from './components/NewArivals'
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

// App.jsx
function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <CartProvider>
      <Router>
        <Navbar setSelectedCategory={setSelectedCategory} />
        <div className="flex flex-col min-h-screen bg-white">
                <main className="flex-grow">
                 <Routes>
          <Route path="/" element={
            <>
              <Hero setSelectedCategory={setSelectedCategory} />
              <ProductGrid selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              <NewArrivals />
              <About />
            </>
          } />
          <Route path="/arrivals" element={<NewArrivals />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </main>
        <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
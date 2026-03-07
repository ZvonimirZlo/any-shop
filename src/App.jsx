import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import About from './components/About'
import NewArrivals from './components/NewArivals'
import { CartProvider } from "./context/CartContext";

// App.jsx
function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <CartProvider>
      <Router>
        <Navbar setSelectedCategory={setSelectedCategory} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero setSelectedCategory={setSelectedCategory} />
              <ProductGrid selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </>
          } />
          <Route path="/arrivals" element={<NewArrivals />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
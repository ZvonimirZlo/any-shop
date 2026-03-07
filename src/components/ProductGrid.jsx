import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

//Products grid
const ProductGrid = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
const [detailProduct, setDetailProduct] = useState(null);
    //Fetch data from api
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);
    const isFiltered = selectedCategory !== "all";
    if (loading) return (
        <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header and Grid logic here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {filteredProducts.map((product) => (
             <ProductCard 
               key={product.id} 
               product={product} 
               // Pass a function to open the details
               onViewDetails={() => setDetailProduct(product)} 
             />
           ))}

        </div>
      </div>

      {/* --- PRODUCT DETAIL MODAL --- */}
<AnimatePresence>
  {detailProduct && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Dark Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setDetailProduct(null)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        /* Added max-h-[90vh] and overflow-y-auto for scrolling */
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row"
      >
        {/* Close Button - Added 'sticky' or kept 'absolute' but ensure it stays visible */}
        <button 
          onClick={() => setDetailProduct(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm"
        >
          ✕
        </button>

        {/* Product Image Section */}
        <div className="w-full md:w-1/2 bg-[#f9f9f9] p-6 md:p-12 flex items-center justify-center">
          <img 
            src={detailProduct.image} 
            alt={detailProduct.title} 
            className="h-auto max-h-[250px] md:max-h-[400px] object-contain mix-blend-multiply" 
          />
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">
            {detailProduct.category}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-4">
            {detailProduct.title}
          </h2>
          
          <div className="flex items-center gap-2 mb-4">
             <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
               ★ {detailProduct.rating?.rate}
             </span>
             <span className="text-gray-400 text-sm">
               ({detailProduct.rating?.count} reviews)
             </span>
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            {detailProduct.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <span className="text-2xl md:text-4xl font-light text-gray-900">
              ${detailProduct.price}
            </span>
            <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors">
              Add to Bag
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
    </section>
  );

};

export default ProductGrid;
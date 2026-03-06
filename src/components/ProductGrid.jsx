import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

// const ProductCard = ({ product }) => (
//   <div className="group relative flex flex-col bg-gray-50 p-4 rounded-xl">
//     <div className="aspect-square overflow-hidden rounded-lg">
//       <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
//     </div>
//     <h3 className="mt-4 text-sm font-bold text-gray-700 truncate">{product.title}</h3>
//     <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
//   </div>
// );

//Products grid
const ProductGrid = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    //Fetch data from api
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </div>
                <br></br>
                <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">Featured Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-8">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-contain"
                                />
                                <button className="absolute bottom-4 left-4 right-4 bg-black text-white py-3 rounded-xl font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Quick Add
                                </button>
                            </div>
                            <div className="mt-4">
                                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{product.category}</p>
                                <h3 className="text-sm font-bold text-gray-900 truncate mt-1">{product.title}</h3>
                                <p className="text-lg font-light text-gray-600 mt-1">${product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
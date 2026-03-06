import { motion } from "framer-motion";

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <motion.div layout className="group cursor-pointer flex flex-col gap-4">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-3xl bg-[#f9f9f9] border border-gray-100 p-8 aspect-square flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title}
          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Buttons Overlay */}
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(); 
            }}
            className="w-full bg-white/90 backdrop-blur-md text-black py-2.5 rounded-xl text-sm font-bold border border-gray-200 hover:bg-white shadow-sm transition-colors"
          >
            Quick View
          </button>
          <button className="w-full bg-black text-white py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 shadow-lg transition-colors">
            Add to Bag
          </button>
        </div>
      </div>

      {/* --- NEW: Name and Price Section --- */}
      <div className="px-1 flex flex-col gap-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-gray-900 font-bold text-sm md:text-base leading-tight line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
          <span className="text-gray-900 font-black text-sm md:text-base">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
           <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            {product.category}
          </p>
          <span className="text-[10px] text-yellow-500">
            ★ {product.rating?.rate}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f6f6f6] p-8">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={product.image} 
          alt={product.title}
          className="h-full w-full object-contain mix-blend-multiply"
        />
        
        {/* Hover Overlay Button */}
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="w-full bg-black py-3 text-sm font-bold text-white rounded-xl shadow-xl hover:bg-blue-500 transition-colors">
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
          {product.category}
        </p>
        <h3 className="truncate text-sm font-semibold text-gray-800">
          {product.title}
        </h3>
        <p className="text-lg font-light text-gray-500">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
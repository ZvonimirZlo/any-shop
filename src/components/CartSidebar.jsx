import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
const CartSidebar = () => {

  const { cartItems, removeFromCart, isCartOpen, setIsCartOpen, cartTotal } = useCart();
  // Lock scroll when cart is open
  useEffect(() => {
    isCartOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-black">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <p>Your bag is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-black line-clamp-1">{item.title}</h3>
                        <p className="text-gray-500 text-xs mt-1 capitalize">{item.category}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bold text-blue-600">${item.price}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Qty: {item.quantity}</span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* The Footer with Total Price */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between mb-4">
                <span className="text-gray-500 font-medium">Subtotal</span>
                <span className="text-xl font-bold text-black">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-black/10">
                Checkout Now
              </button>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50">
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
  const { totalItems, toggleCart, justAdded } = useCart();

  return (
    <motion.button
      onClick={toggleCart}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#c9a96e] text-[#111010] flex items-center justify-center shadow-lg shadow-black/40 hover:bg-[#d4b87a] transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={justAdded ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.3 }}
      aria-label="Apne handlekurv"
    >
      {/* Cart icon */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>

      {/* Badge */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#111010] text-[#c9a96e] text-[10px] font-bold flex items-center justify-center border border-[#c9a96e]/30"
          >
            {totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

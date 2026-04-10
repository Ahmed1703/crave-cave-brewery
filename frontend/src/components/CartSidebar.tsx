"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

function PaymentBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1.5 border border-white/10 text-white/40 text-[10px] uppercase tracking-[0.1em] rounded-sm">
      {label}
    </span>
  );
}

export default function CartSidebar() {
  const {
    items,
    cartOpen,
    setCartOpen,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={() => setCartOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[440px] bg-[#141210] border-l border-[#c9a96e]/10 z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <div>
                <h2 className="font-display text-2xl text-[#e8dcc8]">
                  Handlekurv
                </h2>
                <p className="text-white/30 text-xs mt-0.5">
                  {totalItems} {totalItems === 1 ? "produkt" : "produkter"}
                </p>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-[#c9a96e] transition-colors"
                aria-label="Lukk handlekurv"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4L16 16M16 4L4 16" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-white/15 mb-4"
                  >
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                  </svg>
                  <p className="text-white/30 text-sm">
                    Handlekurven er tom
                  </p>
                  <p className="text-white/15 text-xs mt-1">
                    Legg til noe godt fra butikken
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.slug}
                      className="flex gap-4 p-3 bg-[#1a1815] border border-white/5 group"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-16 h-20 bg-[#111010] flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                          unoptimized
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-[#e8dcc8] text-sm font-display leading-tight">
                              {item.product.name}
                            </h3>
                            <p className="text-[#c9a96e]/50 text-[10px] uppercase tracking-[0.15em] mt-0.5">
                              {item.product.style}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              removeFromCart(item.product.slug)
                            }
                            className="text-white/20 hover:text-red-400 transition-colors p-1"
                            aria-label="Fjern"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.2"
                            >
                              <path d="M2 2L12 12M12 2L2 12" />
                            </svg>
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity controls */}
                          <div className="flex items-center border border-white/10">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.slug,
                                  item.quantity - 1
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-[#c9a96e] transition-colors text-sm"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-[#e8dcc8] text-xs">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.slug,
                                  item.quantity + 1
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-[#c9a96e] transition-colors text-sm"
                            >
                              +
                            </button>
                          </div>

                          <p className="text-[#e8dcc8] text-sm">
                            {item.product.priceNum * item.quantity} kr
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/5 px-6 py-5 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm uppercase tracking-[0.1em]">
                    Subtotal
                  </span>
                  <span className="text-[#e8dcc8] text-lg font-display">
                    {totalPrice} kr
                  </span>
                </div>

                <p className="text-white/20 text-[10px]">
                  Frakt beregnes ved utsjekking
                </p>

                {/* Checkout button */}
                <button className="liquid-btn relative overflow-hidden w-full py-4 border border-[#c9a96e]/40 text-[#c9a96e] uppercase tracking-[0.2em] text-[12px] font-bold hover:text-[#111010] transition-colors duration-500">
                  <span className="relative z-10">Gå til kassen</span>
                </button>

                {/* Payment methods */}
                <div className="pt-2">
                  <p className="text-white/20 text-[10px] uppercase tracking-[0.15em] text-center mb-3">
                    Vi aksepterer
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <PaymentBadge label="Vipps" />
                    <PaymentBadge label="Visa" />
                    <PaymentBadge label="Mastercard" />
                    <PaymentBadge label="Klarna" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

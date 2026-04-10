"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, type Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const { addToCart } = useCart();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <Link
        href={`/butikk/${product.slug}`}
        className="relative h-[400px] bg-[#1a1815] overflow-hidden mb-5 block cursor-pointer"
      >
        {/* Label art as faint background */}
        <Image
          src={product.label}
          alt=""
          fill
          className="object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-30"
          unoptimized
        />

        {/* Bottle */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
          style={{
            transform: hovered ? "translateY(-10px)" : "translateY(0)",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={500}
            unoptimized
            className="h-[300px] w-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* ABV + Volume badge */}
        <div className="absolute top-4 right-4 text-right">
          <p className="text-[#c9a96e] text-xs font-bold">{product.abv}</p>
          <p className="text-white/30 text-[10px]">{product.volume}</p>
        </div>
      </Link>

      {/* Quick add button */}
      <div
        className="transition-all duration-400 -mt-5 mb-5"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `translateY(${hovered ? "0" : "10px"})`,
        }}
      >
        <button
          onClick={() => addToCart(product)}
          className="w-full py-3 bg-[#c9a96e] text-[#111010] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#d4b87a] transition-colors"
        >
          Legg i handlekurv
        </button>
      </div>

      {/* Info */}
      <Link href={`/butikk/${product.slug}`} className="text-center block">
        <p className="text-[#c9a96e]/50 text-[10px] uppercase tracking-[0.3em] mb-1">
          {product.style}
        </p>
        <h3 className="font-display text-2xl text-[#e8dcc8] mb-2">
          {product.name}
        </h3>
        <p className="text-white text-lg">{product.price}</p>
      </Link>
    </motion.div>
  );
}

export default function ButikkPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="bg-[#111010] min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section
        ref={heroRef}
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/3EE409EF-9993-4277-BC32-AA9138B54646-701-00001E1448CE9F42 (1).jpg"
            alt="Crave Cave Brewery"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <p className="text-[#c9a96e]/60 text-[11px] uppercase tracking-[0.5em] mb-4">
            Crave Cave Brewery
          </p>
          <h1 className="font-display text-6xl sm:text-7xl text-white mb-4">
            Nettbutikk
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-[#c9a96e]/30" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/30" />
            <div className="h-px w-20 bg-[#c9a96e]/30" />
          </div>
        </motion.div>
      </section>

      {/* Filter bar */}
      <div className="border-b border-white/5">
        <div className="max-w-[1300px] mx-auto px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/40 text-sm">{products.length} produkter</p>
          <div className="flex gap-4">
            {["Alle", "Ale", "IPA", "Mørkt", "Surøl", "Alkoholfri"].map(
              (filter) => (
                <button
                  key={filter}
                  className="text-white/40 hover:text-[#c9a96e] text-[11px] uppercase tracking-[0.15em] transition-colors first:text-[#c9a96e]"
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <section className="max-w-[1300px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#1a1815] border-y border-[#c9a96e]/10">
        <div className="max-w-[900px] mx-auto px-8 py-20 text-center">
          <h2 className="font-display text-4xl text-[#e8dcc8] mb-4">
            Smak hele kolleksjonen
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Bestill en smakspakke med alle våre øl og finn din favoritt.
            Perfekt for en kveld med venner.
          </p>
          <a
            href="/#visit"
            className="liquid-btn inline-block px-10 py-4 border border-[#c9a96e]/40 text-[#c9a96e] uppercase tracking-[0.2em] text-[13px] relative overflow-hidden hover:text-[#111010] transition-colors duration-500"
          >
            <span className="relative z-10">Kontakt oss</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

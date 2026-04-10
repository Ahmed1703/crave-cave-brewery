"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  name: string;
  style: string;
  price: string;
  image: string;
  label: string;
  abv: string;
  volume: string;
}

const products: Product[] = [
  {
    name: "Rødskjæret",
    style: "Golden Ale",
    price: "89 kr",
    image: "/images/Untitled (1).png",
    label: "/images/84058829_2578087115813896_6050921824080887808_n-Rodskjaeret-fra-Allan-31012020.png",
    abv: "4.2%",
    volume: "330ml",
  },
  {
    name: "Atlantic Ocean",
    style: "India Pale Ale",
    price: "95 kr",
    image: "/images/beer-bottle.png",
    label: "/images/84058829_2578087115813896_6050921824080887808_n-Rodskjaeret-fra-Allan-31012020(1).png",
    abv: "4.7%",
    volume: "330ml",
  },
  {
    name: "Hårfagres",
    style: "Dobbeltbokk",
    price: "109 kr",
    image: "/images/Adobe Express - file (7).png",
    label: "/images/d7cb9816-6664-42b7-ba06-025a46c630e5_rw_1920.png",
    abv: "8.0%",
    volume: "330ml",
  },
  {
    name: "Bærtur",
    style: "Surøl",
    price: "99 kr",
    image: "/images/beer-bottle.png",
    label: "/images/ed275660-9c21-456b-bf42-414cb255c265_rw_1920.png",
    abv: "9%",
    volume: "330ml",
  },
  {
    name: "Lokis Horn",
    style: "Dobbel IPA · Glutenfri",
    price: "105 kr",
    image: "/images/beer-bottle.png",
    label: "/images/163820552_3801168729919714_4711578557471586681_n.jpg",
    abv: "7.5%",
    volume: "330ml",
  },
  {
    name: "Kjøkjin",
    style: "Alkoholfri",
    price: "75 kr",
    image: "/images/beer-bottle.png",
    label: "/images/9b02b2eb-5c95-4808-8863-8f158200b8a5_rw_1920.png",
    abv: "0.0%",
    volume: "330ml",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

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
      <div className="relative h-[400px] bg-[#1a1815] overflow-hidden mb-5 cursor-pointer">
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
          style={{ transform: hovered ? "translateY(-10px)" : "translateY(0)" }}
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

        {/* Quick add button on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-400"
          style={{ opacity: hovered ? 1 : 0, transform: `translateY(${hovered ? "0" : "10px"})` }}
        >
          <button className="w-full py-3 bg-[#c9a96e] text-[#111010] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#d4b87a] transition-colors">
            Legg i handlekurv
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <p className="text-[#c9a96e]/50 text-[10px] uppercase tracking-[0.3em] mb-1">{product.style}</p>
        <h3 className="font-display text-2xl text-[#e8dcc8] mb-2">{product.name}</h3>
        <p className="text-white text-lg">{product.price}</p>
      </div>
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
      <section ref={heroRef} className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
          <p className="text-[#c9a96e]/60 text-[11px] uppercase tracking-[0.5em] mb-4">Crave Cave Brewery</p>
          <h1 className="font-display text-6xl sm:text-7xl text-white mb-4">Nettbutikk</h1>
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
            {["Alle", "Ale", "IPA", "Mørkt", "Surøl", "Alkoholfri"].map((filter) => (
              <button
                key={filter}
                className="text-white/40 hover:text-[#c9a96e] text-[11px] uppercase tracking-[0.15em] transition-colors first:text-[#c9a96e]"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <section className="max-w-[1300px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#1a1815] border-y border-[#c9a96e]/10">
        <div className="max-w-[900px] mx-auto px-8 py-20 text-center">
          <h2 className="font-display text-4xl text-[#e8dcc8] mb-4">Smak hele kolleksjonen</h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Bestill en smakspakke med alle våre øl og finn din favoritt. Perfekt for en kveld med venner.
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

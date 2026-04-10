"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductBySlug, getRelatedProducts, type Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

function PaymentBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1.5 border border-white/10 text-white/40 text-[10px] uppercase tracking-[0.1em] rounded-sm">
      {label}
    </span>
  );
}

function RelatedCard({ product }: { product: Product }) {
  return (
    <Link href={`/butikk/${product.slug}`} className="group block">
      <div className="relative h-[320px] bg-[#1a1815] overflow-hidden mb-4">
        <Image
          src={product.label}
          alt=""
          fill
          className="object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-30"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
          <Image
            src={product.image}
            alt={product.name}
            width={160}
            height={400}
            unoptimized
            className="h-[240px] w-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          />
        </div>
        <div className="absolute top-3 right-3 text-right">
          <p className="text-[#c9a96e] text-xs font-bold">{product.abv}</p>
          <p className="text-white/30 text-[10px]">{product.volume}</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[#c9a96e]/50 text-[10px] uppercase tracking-[0.3em] mb-1">
          {product.style}
        </p>
        <h3 className="font-display text-xl text-[#e8dcc8] mb-1">
          {product.name}
        </h3>
        <p className="text-white text-sm">{product.price}</p>
      </div>
    </Link>
  );
}

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    if (slug) {
      setRelated(getRelatedProducts(slug, 3));
    }
  }, [slug]);

  if (!product) {
    return (
      <main className="bg-[#111010] min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <h1 className="font-display text-4xl text-[#e8dcc8] mb-4">
            Produktet ble ikke funnet
          </h1>
          <Link
            href="/butikk"
            className="text-[#c9a96e] text-sm uppercase tracking-[0.15em] hover:underline"
          >
            Tilbake til butikken
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <main className="bg-[#111010] min-h-screen">
      <Navbar />

      {/* Spacer for navbar */}
      <div className="h-24" />

      {/* Back link */}
      <div className="max-w-[1300px] mx-auto px-8 pt-8 pb-4">
        <Link
          href="/butikk"
          className="inline-flex items-center gap-2 text-white/40 hover:text-[#c9a96e] text-[11px] uppercase tracking-[0.15em] transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M10 12L6 8l4-4" />
          </svg>
          Tilbake til butikken
        </Link>
      </div>

      {/* Product detail */}
      <section className="max-w-[1300px] mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] lg:h-[650px] bg-[#1a1815] overflow-hidden"
          >
            <Image
              src={product.label}
              alt=""
              fill
              className="object-cover opacity-25"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={280}
                height={600}
                unoptimized
                className="h-[400px] lg:h-[500px] w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />
            </div>
            <div className="absolute top-5 right-5 text-right">
              <p className="text-[#c9a96e] text-sm font-bold">{product.abv}</p>
              <p className="text-white/30 text-xs">{product.volume}</p>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#c9a96e]/60 text-[11px] uppercase tracking-[0.4em] mb-3">
              {product.style}
            </p>
            <h1 className="font-display text-5xl lg:text-6xl text-[#e8dcc8] mb-3">
              {product.name}
            </h1>
            <p className="text-white text-2xl mb-6">{product.price}</p>

            {/* Ornament */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/30" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent" />
            </div>

            {/* Description */}
            <p className="text-white/60 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specs table */}
            <div className="border border-white/5 mb-8">
              <div className="grid grid-cols-2 text-sm">
                <div className="px-4 py-3 border-b border-r border-white/5">
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.15em] mb-1">
                    Alkohol
                  </p>
                  <p className="text-[#e8dcc8]">{product.abv}</p>
                </div>
                <div className="px-4 py-3 border-b border-white/5">
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.15em] mb-1">
                    Volum
                  </p>
                  <p className="text-[#e8dcc8]">{product.volume}</p>
                </div>
                <div className="px-4 py-3 border-b border-r border-white/5">
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.15em] mb-1">
                    Bitterhet
                  </p>
                  <p className="text-[#e8dcc8]">{product.bitterness} IBU</p>
                </div>
                <div className="px-4 py-3 border-b border-white/5">
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.15em] mb-1">
                    Ingredienser
                  </p>
                  <p className="text-[#e8dcc8] text-xs leading-relaxed">
                    {product.ingredients.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Food pairings */}
            <div className="mb-8">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-3">
                Passer godt til
              </p>
              <div className="flex flex-wrap gap-2">
                {product.pairings.map((pairing) => (
                  <span
                    key={pairing}
                    className="px-3 py-1.5 bg-[#1a1815] border border-white/5 text-white/50 text-xs"
                  >
                    {pairing}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-white/10">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-12 flex items-center justify-center text-white/40 hover:text-[#c9a96e] transition-colors text-lg"
                >
                  -
                </button>
                <span className="w-12 text-center text-[#e8dcc8] text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-12 flex items-center justify-center text-white/40 hover:text-[#c9a96e] transition-colors text-lg"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="liquid-btn relative overflow-hidden flex-1 py-4 border border-[#c9a96e]/40 text-[#c9a96e] uppercase tracking-[0.2em] text-[12px] font-bold hover:text-[#111010] transition-colors duration-500"
              >
                <span className="relative z-10">Legg i handlekurv</span>
              </button>
            </div>

            {/* Payment methods */}
            <div className="pt-4 border-t border-white/5">
              <p className="text-white/20 text-[10px] uppercase tracking-[0.15em] mb-3">
                Vi aksepterer
              </p>
              <div className="flex gap-2">
                <PaymentBadge label="Vipps" />
                <PaymentBadge label="Visa" />
                <PaymentBadge label="Mastercard" />
                <PaymentBadge label="Klarna" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-white/5">
          <div className="max-w-[1300px] mx-auto px-8 py-20">
            <div className="text-center mb-12">
              <p className="text-[#c9a96e]/50 text-[10px] uppercase tracking-[0.4em] mb-3">
                Utforsk mer
              </p>
              <h2 className="font-display text-3xl text-[#e8dcc8]">
                Du vil kanskje også like
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {related.map((p) => (
                <RelatedCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    title: "Vann",
    desc: "Rent norsk fjellvann fra Averøy. Vannkvaliteten gir en unik mineralbalanse som fremhever smakene i hver brygd.",
  },
  {
    title: "Malt",
    desc: "Moderne maltsorter tilpasset hver ølstil. Fra lyse pilsnermalter til mørke spesialmalter — nøye utvalgt for karakter.",
  },
  {
    title: "Humle",
    desc: "Europeisk kvalitetshumle. Chinook, Cascade, Citra, Saaz — fra blomstrete til tropiske noter.",
  },
  {
    title: "Gjær",
    desc: "Den usynlige kunstneren. Fra rene lagergjær til karakterfulle ale-stammer og vill Philly Sour.",
  },
];

export default function IngredientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ingredients" className="bg-[#080808] relative" ref={ref}>
      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="h-px bg-white/10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.4em] mb-6">
            Hva vi bruker
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white">
            Ingredienser
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="bg-[#080808] p-8 lg:p-10 group hover:bg-[#0f0f0f] transition-colors duration-500"
            >
              <span className="text-white/15 text-xs uppercase tracking-[0.3em] block mb-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-3xl text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const blocks = [
  {
    title: "Beste råvarer",
    text: "Vi bruker vann, maltet korn, humle og gjær fra ulike europeiske land. De beste leverandører i Europa og lokalt vannverk.",
  },
  {
    title: "Hvordan produseres de?",
    text: "Visste du at humle er en flerårig, urteaktig slyngplante som tilhører hampfamilien. Det er konglene på hunnplanten som høstes og tørkes.",
  },
  {
    title: "Hva er viktig",
    text: "Øl er en tradisjonsbærer i Norge — og å finne gode kombinasjoner av mat og drikke i sosialt fellesskap har vært, er målet og ambisjonen.",
  },
  {
    title: "Historien bak",
    text: "Hvordan lykkes med den god smak — vi har noen meninger om hvordan vi kan lage øl som de fleste liker. Hemmelighetene er ikke mange, men krever tid og tålmodighet.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="prosess" className="bg-[#111010] relative py-32 overflow-hidden" ref={ref}>
      {/* Background ornament */}
      <div className="absolute bottom-20 left-10 opacity-[0.03]">
        <Image src="/images/crave cave icon.png" alt="" width={300} height={300}
          className="w-[280px] h-auto invert" />
      </div>

      <div className="max-w-[1100px] mx-auto px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-6">
          <p className="text-[#c9a96e]/50 text-[11px] uppercase tracking-[0.5em] mb-4">Veien fra</p>
          <h2 className="font-display text-5xl sm:text-6xl text-[#e8dcc8] leading-[1.05]">
            Råvarer til opplevelser
          </h2>
        </motion.div>

        <div className="ornament mb-20">
          <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/30" />
        </div>

        {/* 4 blocks in 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="relative pl-8 border-l border-[#c9a96e]/20"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rotate-45 bg-[#c9a96e]/30" />
              <h3 className="font-display text-2xl text-[#c9a96e] mb-4">{block.title}</h3>
              <p className="text-white/65 text-[15px] leading-[1.9]">{block.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

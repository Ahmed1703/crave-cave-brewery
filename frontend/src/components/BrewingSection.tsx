"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function BrewingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="ingredients" className="bg-[#e8dcc8] relative pt-16 pb-0 overflow-hidden" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-8 relative z-10">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-6">
          <h2 className="font-display text-5xl sm:text-6xl text-[#1a1410]">Ingredienser</h2>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="h-px w-20 bg-[#1a1410]/15" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#1a1410]/20" />
          <div className="h-px w-20 bg-[#1a1410]/15" />
        </div>

        {/* Grid with text wrapping around the glass */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative">

          {/* Top row — closer together, hugging the glass */}
          <div className="flex justify-between gap-8 mb-14 max-w-[820px] mx-auto">
            <div className="w-[38%] text-right">
              <h3 className="font-display text-2xl text-[#5c4a32] mb-3">Vann</h3>
              <p className="text-[#1a1410]/40 text-sm leading-[1.9]">
                Rent fjellvann fra Nordre Averøy Vannverk. Vannkvaliteten fra Averøy gir en unik
                mineralbalanse som fremhever smakene i hver eneste brygd.
              </p>
            </div>
            <div className="w-[38%] text-left">
              <h3 className="font-display text-2xl text-[#5c4a32] mb-3">Malt</h3>
              <p className="text-[#1a1410]/40 text-sm leading-[1.9]">
                Pilsner 2Row, Marris Otter, Caramel/Crystal, Cara Gold og umaltet hvete.
                Moderne maltsorter for karakter og dybde.
              </p>
            </div>
          </div>

          {/* Bottom row — wider apart, around the glass body */}
          <div className="flex justify-between gap-8 max-w-[1100px] mx-auto">
            <div className="w-[35%] text-right">
              <h3 className="font-display text-2xl text-[#5c4a32] mb-3">Humle</h3>
              <p className="text-[#1a1410]/40 text-sm leading-[1.9]">
                Chinook, Cascade, Citra, Saaz og Tørrhumlet Citra/Huell Melon. Nøye
                utvalgt for bitterhet, aroma og balanse.
              </p>
            </div>
            <div className="w-[35%] text-left">
              <h3 className="font-display text-2xl text-[#5c4a32] mb-3">Gjær</h3>
              <p className="text-[#1a1410]/40 text-sm leading-[1.9]">
                Safale US-05, Safale 34/70, Lalvin D-47 og Philly Sour. Den usynlige
                kunstneren i hvert glass.
              </p>
            </div>
          </div>

          {/* Beer glass — centered, only top half visible, cut off at bottom */}
          <div className="flex justify-center mt-[-60px] relative z-10">
            <div className="h-[350px] overflow-hidden">
              <Image
                src="/images/Untitled (2).png"
                alt="Crave Cave øl"
                width={500}
                height={700}
                unoptimized
                className="h-[550px] w-auto object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

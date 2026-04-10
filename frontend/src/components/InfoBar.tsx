"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "2019",
    label: "BRYGGERIET STARTET",
  },
  {
    value: "prosedyrer",
    label: "KVALITETS SYSTEM IHT. NS ISO 9002",
  },
  {
    value: "varierende",
    label: "PRODUKSJON I UKA",
  },
  {
    value: "40/60 %",
    label: "OMSETNING FORDELT BUTIKK / VINMONOPOL",
  },
];

export default function InfoBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section className="bg-[#e8dcc8] py-10" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl sm:text-4xl text-[#5c4a32] mb-2">
                {stat.value}
              </p>
              <p className="text-[#3d2e1e] text-[13px] uppercase tracking-[0.1em] leading-snug max-w-[210px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

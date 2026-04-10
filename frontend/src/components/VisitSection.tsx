"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function VisitSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="visit" className="bg-[#171311] relative py-32" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/15 to-transparent" />

      {/* Background icon */}
      <div className="absolute bottom-16 left-12 opacity-[0.03]">
        <Image src="/images/crave cave icon.png" alt="" width={300} height={300}
          className="w-[250px] h-auto invert" />
      </div>

      <div className="max-w-[1100px] mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-6">
          <h2 className="font-display text-5xl sm:text-6xl text-[#e8dcc8]">Besøk Oss</h2>
        </motion.div>

        <div className="ornament mb-16">
          <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/30" />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { label: "Adresse", lines: ["Gjøtenvegen 3", "6530 Averøy", "Norge"] },
            { label: "Åpningstider", lines: ["Mandag – Fredag", "12:00 – 16:00", "Lør–Søn: Stengt"] },
            { label: "Kontakt", lines: ["kontakt@ccbrewery.no", "+47 404 70 800", "www.ccbrewery.no"] },
          ].map(item => (
            <div key={item.label}>
              <p className="text-[#c9a96e]/50 text-[10px] uppercase tracking-[0.5em] mb-5">{item.label}</p>
              {item.lines.map((line, i) => (
                <p key={i} className={`text-[#e8dcc8]/${i === 2 ? "20" : "40"} text-[15px] leading-[2]`}>{line}</p>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }} className="mt-20 text-center">
          <div className="ornament mb-8">
            <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/20" />
          </div>
          <div className="flex justify-center gap-10 text-[#c9a96e]/30 text-[10px] uppercase tracking-[0.3em]">
            <a href="https://instagram.com/cravecavebrewery" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a96e] transition-colors">Instagram</a>
            <a href="https://facebook.com/ccbrewery" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a96e] transition-colors">Facebook</a>
            <a href="https://untappd.com/w/crave-cave-brewery/448197/beer" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a96e] transition-colors">Untappd</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/15 to-transparent" />
    </section>
  );
}

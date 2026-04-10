"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Beer {
  name: string;
  style: string;
  desc: string;
  bg: string;
  bottle: string;
}

const beers: Beer[] = [
  {
    name: "Rødskjæret",
    style: "Golden Ale · 4.2%",
    desc: "Fruktig aroma med maltdrevet smak og vakker rødlig farge.",
    bg: "/images/84058829_2578087115813896_6050921824080887808_n-Rodskjaeret-fra-Allan-31012020.png",
    bottle: "/images/Untitled (1).png",
  },
  {
    name: "Atlantic Ocean",
    style: "India Pale Ale · 4.7%",
    desc: "Leskende og fruktig — kraftig humlet som skaper bitterhet.",
    bg: "/images/84058829_2578087115813896_6050921824080887808_n-Rodskjaeret-fra-Allan-31012020(1).png",
    bottle: "/images/beer-bottle.png",
  },
  {
    name: "Hårfagres",
    style: "Dobbeltbokk · 8.0%",
    desc: "Mørkt øl rikt på malt. For årstiden med kos og selskaper.",
    bg: "/images/d7cb9816-6664-42b7-ba06-025a46c630e5_rw_1920.png",
    bottle: "/images/Adobe Express - file (7).png",
  },
  {
    name: "Bærtur",
    style: "Surøl · 9%",
    desc: "Philly Sour med aroma av blåbær og skogbunn.",
    bg: "/images/ed275660-9c21-456b-bf42-414cb255c265_rw_1920.png",
    bottle: "/images/beer-bottle.png",
  },
  {
    name: "Lokis Horn",
    style: "Dobbel IPA · Glutenfri",
    desc: "Intens humlearoma med tropiske noter. For de modige.",
    bg: "/images/163820552_3801168729919714_4711578557471586681_n.jpg",
    bottle: "/images/beer-bottle.png",
  },
  {
    name: "Kjøkjin",
    style: "Alkoholfri",
    desc: "Fullt av smak, helt uten alkohol. For alle anledninger.",
    bg: "/images/9b02b2eb-5c95-4808-8863-8f158200b8a5_rw_1920.png",
    bottle: "/images/beer-bottle.png",
  },
];

function Panel({ beer }: { beer: Beer }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative cursor-pointer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative h-[280px] sm:h-[350px] lg:h-[520px] overflow-hidden"
        style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.4)" }}>
        {/* Art */}
        <Image src={beer.bg} alt={beer.name} fill
          className="object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          unoptimized />

        {/* Subtle bottom vignette always */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0.9) 100%)" }} />

        {/* Name at bottom — fades out on hover */}
        <div className="absolute bottom-6 left-0 right-0 text-center z-10 transition-all duration-400"
          style={{ opacity: hovered ? 0 : 1 }}>
          <h3 className="font-display text-lg text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">{beer.name}</h3>
        </div>

        {/* Hover: dark overlay rises with bottle + info */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end transition-all duration-500"
          style={{
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.4) 65%, transparent 80%)"
              : "transparent",
          }}>
          <div className="transition-all duration-500 mb-3"
            style={{ opacity: hovered ? 1 : 0, transform: `translateY(${hovered ? "0" : "30px"})` }}>
            <Image src={beer.bottle} alt={beer.name} width={160} height={440} unoptimized
              className="h-[180px] w-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]" />
          </div>
          <div className="px-4 pb-6 text-center transition-all duration-500"
            style={{ opacity: hovered ? 1 : 0, transform: `translateY(${hovered ? "0" : "20px"})`, transitionDelay: "0.05s" }}>
            <h3 className="font-display text-xl text-white mb-1">{beer.name}</h3>
            <p className="text-[#c9a96e]/70 text-[10px] uppercase tracking-[0.3em] mb-2">{beer.style}</p>
            <p className="text-white/30 text-xs leading-relaxed max-w-[200px] mx-auto">{beer.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeerPanels() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="beers" className="bg-[#111010] relative pt-28 pb-0" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent" />

      {/* Section header with ornaments */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }} className="text-center mb-6 px-8">
        <Image src="/images/crave cave icon.png" alt="" width={60} height={60}
          className="w-[45px] h-auto mx-auto mb-5 opacity-15 invert" />
        <h2 className="font-display text-5xl sm:text-6xl text-[#e8dcc8] tracking-wider">Våre Øl</h2>
      </motion.div>

      {/* Ornamental divider */}
      <div className="ornament mb-16">
        <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/30" />
      </div>

      {/* Panels */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 gap-[2px] lg:grid-cols-6 px-0">
        {beers.map(beer => <Panel key={beer.name} beer={beer} />)}
      </motion.div>

    </section>
  );
}

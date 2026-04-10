"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const beers = [
  {
    name: "Atlantic Ocean",
    style: "India Pale Ale",
    abv: "4.7%",
    vol: "330ml",
    desc: "Et klassisk øl som kom sjøveien fra England til India. Et leskende, fruktig øl — kraftig humlet som skaper bitterhet. Nytes best når sola går ned i havbrynet.",
    label: "/images/label-atlantic-ocean.jpg",
    align: "left" as const,
  },
  {
    name: "Hårfagres Dobbeltbokk",
    style: "Dobbeltbokk",
    abv: "8.0%",
    vol: "330ml",
    desc: "Dobbelt bokkøl er et mørkt øl, rikt på malt, opprinnelig fra Tyskland. For årstiden med kos, innetid og selskaper — passer ølet godt som en aperitiff.",
    label: "/images/label-harfagres.jpg",
    align: "right" as const,
  },
  {
    name: "Skaldemjød",
    style: "Mjød — Mead",
    abv: "",
    vol: "",
    desc: "Mjød lages av honning, mjødurt, vann og gjær. Drikken forbindes gjerne med de norrøne gudene og vikingtiden der den ble regne som festdrikk.",
    label: "/images/label-skaldemjod.jpg",
    align: "left" as const,
  },
  {
    name: "Bærtur",
    style: "Surøl — Sour",
    abv: "9%",
    vol: "330ml",
    desc: "Gjæret med Philly Sour. Det har en frisk og syrlig smak. Aroma fra skogen med modne blåbær og røde små. Balansert ettersmak.",
    label: "/images/label-baertur.jpg",
    align: "right" as const,
  },
  {
    name: "Tvekamp",
    style: "Dobbel IPA — Glutenfri",
    abv: "",
    vol: "",
    desc: "En dristig dobbel IPA, glutenfri og full av karakter. Intens humlearoma med tropiske og harpiksaktige noter. For de modige.",
    label: "/images/label-tvekamp.jpg",
    align: "left" as const,
  },
];

function BeerCard({ beer, index }: { beer: (typeof beers)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const isLeft = beer.align === "left";

  return (
    <div ref={ref} className="relative py-16 lg:py-24">
      <div
        className={`max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-8 ${
          isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center`}
      >
        {/* Label image */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full lg:w-[58%] flex-shrink-0"
        >
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src={beer.label}
              alt={beer.name}
              width={1200}
              height={560}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-[42%] flex flex-col justify-center"
        >
          <span className="text-white/30 text-xs uppercase tracking-[0.4em] mb-3 block">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4">
            {beer.style}
            {beer.abv && ` — ${beer.abv}`}
            {beer.vol && ` / ${beer.vol}`}
          </p>

          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-6">
            {beer.name}
          </h3>

          <p className="text-white/45 text-lg leading-relaxed max-w-md">
            {beer.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function BeersSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="beers" className="bg-black relative">
      {/* Section divider line */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="h-px bg-white/10" />
      </div>

      {/* Section title */}
      <div ref={titleRef} className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/crave cave icon.png"
            alt=""
            width={80}
            height={80}
            className="w-[60px] h-auto mx-auto mb-6 opacity-20 invert"
          />
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider">
            Våre Øl
          </h2>
        </motion.div>
      </div>

      {/* Beer cards */}
      {beers.map((beer, i) => (
        <BeerCard key={beer.name} beer={beer} index={i} />
      ))}
    </section>
  );
}

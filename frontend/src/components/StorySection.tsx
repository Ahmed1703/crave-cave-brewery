"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/Bryggerf2022-7.jpg", alt: "Bryggeriet" },
  { src: "/images/IMG_5052+29.jpg", alt: "Brygging" },
  { src: "/images/original (1).jpg", alt: "Crave Cave kunst" },
  { src: "/images/ROBERT98LPRIS.jpg", alt: "Robert med pris" },
];

export default function StorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="story" className="bg-[#111010] relative py-32 overflow-hidden" ref={ref}>
      {/* Background ornament */}
      <div className="absolute top-24 right-12 opacity-[0.03]">
        <Image src="/images/crave cave icon.png" alt="" width={400} height={400}
          className="w-[350px] h-auto invert" />
      </div>

      <div className="max-w-[1300px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left — Image collage */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }} className="w-full lg:w-[50%] flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {/* Top left — tall */}
              <div className="relative row-span-2 overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" unoptimized />
                <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 60px 15px rgba(17,16,16,0.4)" }} />
              </div>
              {/* Top right — square */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" unoptimized />
                <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 60px 15px rgba(17,16,16,0.4)" }} />
              </div>
              {/* Bottom right — split into two */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image src={images[2].src} alt={images[2].alt} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 40px 10px rgba(17,16,16,0.4)" }} />
                </div>
                <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image src={images[3].src} alt={images[3].alt} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 40px 10px rgba(17,16,16,0.4)" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }} className="w-full lg:w-[50%]">

            <p className="text-[#c9a96e]/50 text-[11px] uppercase tracking-[0.5em] mb-5">Vår historie</p>

            <h2 className="font-display text-5xl sm:text-6xl text-[#e8dcc8] leading-[1.05] mb-2">
              Vi lager
            </h2>
            <h2 className="font-display text-5xl sm:text-6xl text-[#c9a96e] leading-[1.05] mb-6">
              hva vi liker
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#c9a96e]/25" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/25" />
              <div className="h-px w-10 bg-[#c9a96e]/25" />
            </div>

            <p className="text-white/60 text-lg italic mb-8">
              Du glemmer aldri den første munnfull
            </p>

            <p className="text-white/70 text-[15px] leading-[1.9] mb-10">
              Vi laget øl i vennegjengen allerede i 2009 – og vi laget øl VI LIKTE.
              Siden vokste ideen og Crave Cave Brewery startet opp i 2019 – med stor
              entusiasme og ei profesjonell bryggelinje. Vi er sannsynligvis landets
              minste profesjonelle bryggeri – og vi har i dag både lyse og mørke øl.
              Vi utvikler hele tiden nye produkter – og lytter til dere på hva som
              faller i smak og lager gode opplevelser. Takk for tilliten!
            </p>

            <div className="border-t border-[#c9a96e]/15 pt-6">
              <p className="text-[#c9a96e]/40 text-[10px] uppercase tracking-[0.4em] mb-2">Grunnlegger</p>
              <p className="font-display text-2xl text-white/90">Robert J Giske</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const timeline = [
  { year: "2009", text: "Begynte å hjemmebrygge — eksperimentering, feil og uforglemmelige smaker." },
  { year: "2019", text: "Tok steget til profesjonelt bryggeri. Averøy Håndbryggeri AS ble født." },
  { year: "I dag", text: "Sannsynligvis Norges minste profesjonelle bryggeri — og vi er stolte av det." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="about" className="relative bg-black overflow-hidden" ref={ref}>
      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="h-px bg-white/10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="w-full lg:w-[45%] flex-shrink-0"
          >
            <div className="relative rounded-[2rem] overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/original.jpg"
                alt="Crave Cave Brewery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right — story */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-white/30 text-xs uppercase tracking-[0.4em] mb-6">
                Vår Historie
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-8">
                Fra Hulen
              </h2>
              <p className="text-white/45 text-lg leading-relaxed max-w-lg mb-16">
                Det hele begynte med nysgjerrighet og en enkel idé: å brygge øl vi faktisk ville
                drikke selv. Fra en garasje på Averøy til Norges minste profesjonelle bryggeri —
                hver dråpe er brygget med entusiasme og respekt for håndverket.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="flex gap-8 items-start"
                >
                  <span className="font-display text-3xl sm:text-4xl text-white/20 flex-shrink-0 w-[100px]">
                    {item.year}
                  </span>
                  <div>
                    <div className="w-8 h-px bg-white/20 mb-4 mt-4" />
                    <p className="text-white/50 text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Robert J. Giske",
    role: "Daglig leder",
    image: "/images/Robert_Giske2011_rma.jpg",
  },
  {
    name: "Jan Askegård",
    role: "Brygger og logistikk",
    image: "/images/team_1.jpg",
  },
  {
    name: "Anita Giske",
    role: "Logistikk og lager",
    image: "/images/DSC_0300-1.jpg",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="team" className="bg-[#e8dcc8] relative py-28 overflow-hidden" ref={ref}>
      {/* Soft background image */}
      <div className="absolute inset-0">
        <Image src="/images/ee8923d8-0a3e-419b-b3d0-266a31c693b9_rw_1920.png" alt="" fill
          className="object-cover opacity-[0.06]" unoptimized />
      </div>
      <div className="max-w-[1100px] mx-auto px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-6">
          <h2 className="font-display text-5xl sm:text-6xl text-[#1a1410]">Vårt Team</h2>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-20 bg-[#1a1410]/15" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#1a1410]/20" />
          <div className="h-px w-20 bg-[#1a1410]/15" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center">
              <div className="relative w-[300px] h-[380px] mx-auto mb-8 overflow-hidden">
                <Image src={member.image} alt={member.name} fill
                  className="object-cover object-top" unoptimized />
                <div className="absolute inset-0"
                  style={{ boxShadow: "inset 0 0 40px 10px rgba(0,0,0,0.15)" }} />
              </div>
              <h3 className="font-display text-3xl text-[#1a1410] mb-2">{member.name}</h3>
              <p className="text-[#5c4a32]/70 text-base">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

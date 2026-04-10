"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#111010] flex">
      {/* Left — photo */}
      <div className="relative w-1/2 h-full flex-shrink-0">
        <Image
          src="/images/3EE409EF-9993-4277-BC32-AA9138B54646-701-00001E1448CE9F42 (1).jpg"
          alt="Crave Cave Brewery" fill sizes="50vw" quality={100} unoptimized
          className="object-cover" priority />
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px 80px rgba(17,16,16,0.85)" }} />
      </div>

      {/* Right — content */}
      <div className="w-1/2 h-full flex flex-col justify-center px-10 lg:px-20 relative">
        {/* Decorative ornament top-right */}
        <div className="absolute top-32 right-16 opacity-[0.06]">
          <Image src="/images/crave cave icon.png" alt="" width={200} height={200}
            className="w-[180px] h-auto" />
        </div>

        <p className="text-[#c9a96e]/60 text-[11px] uppercase tracking-[0.6em] mb-6">
          Norges minste bryggeri
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#e8dcc8] leading-[0.92] mb-6">
          Brygget<br/>i Hulen
        </h1>

        {/* Ornamental line */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#c9a96e]/30" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/30" />
          <div className="h-px w-12 bg-[#c9a96e]/30" />
        </div>

        <p className="text-[#e8dcc8]/30 text-lg max-w-[400px] mb-12 leading-[1.8]">
          Håndbrygget øl fra Averøy — inspirert av eventyr, monstre
          og den ville naturen langs Norskekysten.
        </p>

        <a href="#beers"
          className="liquid-btn inline-block w-fit px-10 py-4 border border-[#c9a96e]/40 text-[#c9a96e] uppercase tracking-[0.2em] text-[13px] relative overflow-hidden hover:text-[#111010] transition-colors duration-500">
          <span className="relative z-10">Se våre øl</span>
        </a>

        {/* Bottom */}
        <div className="absolute bottom-10 left-10 lg:left-20 right-10 lg:right-20 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#c9a96e]/20 text-[9px] uppercase tracking-[0.4em]">
            <div className="w-px h-8 bg-[#c9a96e]/15" />
            <span style={{ writingMode: "vertical-rl" }}>Scroll</span>
          </div>
          <div className="flex items-center gap-5 text-[#e8dcc8]/15 text-[10px] uppercase tracking-[0.3em]">
            <a href="https://instagram.com/cravecavebrewery" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a96e]/50 transition-colors">Ig</a>
            <a href="https://facebook.com/ccbrewery" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a96e]/50 transition-colors">Fb</a>
          </div>
        </div>
      </div>
    </section>
  );
}

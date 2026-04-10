"use client";

import Image from "next/image";

export default function ArtBanner() {
  return (
    <section className="relative h-[45vh] overflow-hidden">
      <Image src="/images/hero-cartoon.png" alt="Atlantic Ocean Artwork" fill
        className="object-cover" unoptimized style={{ objectPosition: "center 35%" }} />
      <div className="absolute inset-0 bg-[#111010]/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="ornament mb-6">
            <div className="w-1.5 h-1.5 rotate-45 border border-white/20" />
          </div>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-white/80 max-w-2xl leading-[1.15] drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            &ldquo;De viktige ideene kommer fra de enkle spørsmålene&rdquo;
          </p>
          <div className="ornament mt-6">
            <div className="w-1.5 h-1.5 rotate-45 border border-white/20" />
          </div>
        </div>
      </div>
      {/* Transition gradients */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#171311] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111010] to-transparent" />
    </section>
  );
}

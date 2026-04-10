"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0d0c0b" }}>
      {/* Mountain & tree scene as background behind everything */}
      <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {/* Stars */}
        {[120,280,400,560,720,890,1050,1200,1340,180,650,980,340,1100,50,800,460,1260].map((x, i) => (
          <circle key={i} cx={x} cy={20 + (i * 11) % 80} r={0.8 + (i % 3) * 0.4} fill="white" opacity={0.12 + (i % 4) * 0.06} />
        ))}

        {/* Moon glow */}
        <circle cx="1150" cy="60" r="30" fill="#c9a96e" opacity="0.04" />
        <circle cx="1150" cy="60" r="12" fill="#c9a96e" opacity="0.08" />

        {/* Far mountains */}
        <path d="M0,200 L80,140 L160,170 L240,110 L320,150 L400,100 L480,140 L560,120 L640,160 L720,105 L800,140 L880,90 L960,130 L1040,110 L1120,150 L1200,120 L1280,145 L1360,125 L1440,155 L1440,500 L0,500 Z"
          fill="#161412" />

        {/* Mid mountains */}
        <path d="M0,260 L60,220 L120,240 L200,195 L280,225 L360,185 L440,215 L520,195 L600,235 L680,205 L760,180 L840,210 L920,185 L1000,220 L1080,195 L1160,215 L1240,200 L1320,225 L1440,210 L1440,500 L0,500 Z"
          fill="#131110" />

        {/* Near mountains */}
        <path d="M0,300 L100,275 L200,290 L300,265 L400,285 L500,260 L600,280 L700,270 L800,285 L900,260 L1000,280 L1100,270 L1200,285 L1300,275 L1440,290 L1440,500 L0,500 Z"
          fill="#0f0e0d" />

        {/* Trees on mid mountains */}
        {/* Left cluster */}
        <polygon points="140,240 148,195 156,240" fill="#131110" />
        <polygon points="143,215 148,185 153,215" fill="#131110" />
        <rect x="147" y="240" width="2" height="8" fill="#131110" />

        <polygon points="170,235 176,200 182,235" fill="#131110" />
        <polygon points="172,215 176,190 180,215" fill="#131110" />
        <rect x="175" y="235" width="2" height="8" fill="#131110" />

        <polygon points="110,245 115,215 120,245" fill="#131110" />
        <polygon points="112,230 115,208 118,230" fill="#131110" />
        <rect x="114" y="245" width="2" height="7" fill="#131110" />

        {/* Center-left */}
        <polygon points="380,220 387,178 394,220" fill="#0f0e0d" />
        <polygon points="383,198 387,168 391,198" fill="#0f0e0d" />
        <rect x="386" y="220" width="2" height="8" fill="#0f0e0d" />

        <polygon points="410,225 416,188 422,225" fill="#0f0e0d" />
        <polygon points="413,205 416,180 419,205" fill="#0f0e0d" />
        <rect x="415" y="225" width="2" height="7" fill="#0f0e0d" />

        <polygon points="440,218 445,185 450,218" fill="#0f0e0d" />
        <polygon points="442,200 445,178 448,200" fill="#0f0e0d" />
        <rect x="444" y="218" width="2" height="8" fill="#0f0e0d" />

        {/* Center */}
        <polygon points="700,272 707,235 714,272" fill="#0f0e0d" />
        <polygon points="703,252 707,228 711,252" fill="#0f0e0d" />
        <rect x="706" y="272" width="2" height="8" fill="#0f0e0d" />

        <polygon points="730,268 736,230 742,268" fill="#0f0e0d" />
        <polygon points="733,248 736,222 739,248" fill="#0f0e0d" />
        <rect x="735" y="268" width="2" height="8" fill="#0f0e0d" />

        <polygon points="760,275 765,242 770,275" fill="#0f0e0d" />
        <polygon points="762,258 765,238 768,258" fill="#0f0e0d" />
        <rect x="764" y="275" width="2" height="7" fill="#0f0e0d" />

        {/* Right cluster */}
        <polygon points="1050,265 1057,225 1064,265" fill="#0f0e0d" />
        <polygon points="1053,245 1057,218 1061,245" fill="#0f0e0d" />
        <rect x="1056" y="265" width="2" height="8" fill="#0f0e0d" />

        <polygon points="1085,260 1091,222 1097,260" fill="#0f0e0d" />
        <polygon points="1088,240 1091,215 1094,240" fill="#0f0e0d" />
        <rect x="1090" y="260" width="2" height="7" fill="#0f0e0d" />

        <polygon points="1115,268 1121,230 1127,268" fill="#0f0e0d" />
        <polygon points="1118,248 1121,222 1124,248" fill="#0f0e0d" />
        <rect x="1120" y="268" width="2" height="8" fill="#0f0e0d" />

        {/* Far right */}
        <polygon points="1300,272 1306,240 1312,272" fill="#0f0e0d" />
        <polygon points="1303,255 1306,235 1309,255" fill="#0f0e0d" />
        <rect x="1305" y="272" width="2" height="7" fill="#0f0e0d" />

        <polygon points="1340,278 1346,245 1352,278" fill="#0f0e0d" />
        <polygon points="1343,262 1346,240 1349,262" fill="#0f0e0d" />
        <rect x="1345" y="278" width="2" height="7" fill="#0f0e0d" />
      </svg>

      {/* Footer content overlaid on the scene */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-8 pt-40 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">
          <Image src="/images/logo.png" alt="Crave Cave Brewery" width={250} height={100}
            className="h-[50px] w-auto opacity-70" />
          <div className="flex flex-wrap gap-10 text-white text-sm uppercase tracking-[0.2em]">
            <a href="#beers" className="hover:text-[#c9a96e] transition-colors">Øl</a>
            <a href="#story" className="hover:text-[#c9a96e] transition-colors">Historie</a>
            <a href="#visit" className="hover:text-[#c9a96e] transition-colors">Besøk</a>
            <a href="https://ccbrewery.no/shop-3/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a96e] transition-colors">Nettbutikk</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Averøy Håndbryggeri AS — Med enerett</p>
          <p className="text-white/40 text-sm">Gjøtenvegen 3, 6530 Averøy</p>
        </div>
      </div>
    </footer>
  );
}

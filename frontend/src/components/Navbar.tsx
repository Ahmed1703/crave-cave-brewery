"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Hjem", href: "/" },
  { label: "Butikk", href: "/butikk" },
  {
    label: "Bryggeriet", href: "#story",
    children: [
      { label: "Vårt team", href: "/#team" },
      { label: "Vår prosess", href: "/#prosess" },
      { label: "Råstoffer og resultater", href: "/#ingredients" },
    ],
  },
  { label: "Blogg", href: "/blogg" },
  { label: "Kontakt", href: "/#visit" },
  {
    label: "Tilbud", href: "/tilbud",
    children: [
      { label: "Basis kurs", href: "/tilbud#kurs" },
      { label: "Crave Cave kommer til malmemarkedet", href: "/tilbud#marked" },
      { label: "Kveld for å smake – mat & øl", href: "/tilbud#smaking" },
    ],
  },
];

function Dropdown({ items, show }: { items: { label: string; href: string }[]; show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
        >
          <div className="bg-[#1a1815] border border-[#c9a96e]/15 backdrop-blur-md min-w-[260px] py-3">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-6 py-2.5 text-white/70 hover:text-[#c9a96e] hover:bg-white/5 text-[11px] uppercase tracking-[0.15em] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [hiding, setHiding] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wasPinned = useRef(false);

  useEffect(() => {
    const fn = () => {
      const shouldPin = window.scrollY > window.innerHeight - 80;
      if (wasPinned.current && !shouldPin) {
        // Scrolling back into hero — slide out first
        setHiding(true);
        setTimeout(() => {
          setPinned(false);
          setHiding(false);
        }, 300);
      } else if (shouldPin && !wasPinned.current) {
        setPinned(true);
      }
      wasPinned.current = shouldPin;
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav
      className={`left-0 right-0 z-50 ${
        pinned
          ? "fixed bg-[#111010]/95 backdrop-blur-sm border-b border-[#c9a96e]/10"
          : "absolute bg-transparent border-b border-transparent"
      }`}
      style={{
        top: 0,
        transition: "background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease",
        transform: hiding ? "translateY(-100%)" : "translateY(0)",
        opacity: hiding ? 0 : 1,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-20">
        <a href="/">
          <Image
            src="/images/logo.png"
            alt="Crave Cave Brewery"
            width={250}
            height={100}
            priority
            className={`w-auto ${
              pinned ? "h-[45px] mt-0" : "h-[85px] mt-3"
            }`}
            style={{ transition: "height 0.3s ease, margin-top 0.3s ease" }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleEnter(item.label)}
              onMouseLeave={() => item.children && handleLeave()}
            >
              <a
                href={item.href}
                className="nav-link text-white hover:text-[#c9a96e] text-[11px] uppercase tracking-[0.2em] transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <svg width="8" height="5" viewBox="0 0 8 5" className="mt-0.5 opacity-50">
                    <path d="M0 0L4 5L8 0" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                )}
              </a>
              {item.children && (
                <Dropdown items={item.children} show={activeDropdown === item.label} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Meny">
          <motion.span animate={open ? { rotate: 45, y: 6 } : {}} className="block w-6 h-0.5 bg-[#e8dcc8] mb-1.5" />
          <motion.span animate={open ? { opacity: 0 } : {}} className="block w-6 h-0.5 bg-[#e8dcc8] mb-1.5" />
          <motion.span animate={open ? { rotate: -45, y: -6 } : {}} className="block w-6 h-0.5 bg-[#e8dcc8]" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden bg-[#111010]"
          >
            <div className="px-8 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[#e8dcc8] text-xl font-display"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-white/50 text-sm hover:text-[#c9a96e] transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const teamMembers = [
  {
    name: "Aleksandar Veselinović",
    title: "Osnivač i advokat",
    href: "/advokati/aleksandar-veselinovic",
  },
  { name: "Tijana Obradović", title: "Advokat partner", href: "/advokati/tijana-obradovic" },
  { name: "Jovan Polić", title: "Advokat partner", href: "/advokati/jovan-polic" },
  {
    name: "Nikola Sretenović",
    title: "Advokatski pripravnik",
    href: "/advokati/nikola-sretenovic",
  },
  {
    name: "Tijana Balčaković",
    title: "Advokatski pripravnik",
    href: "/advokati/tijana-balcakovic",
  },
  { name: "Aleksandra Spasić", title: "Sekretar", href: "/advokati/aleksandra-spasic" },
];

const navLinks = [
  { href: "/#pocetna", label: "Početna" },
  { href: "/#o-kancelariji", label: "O kancelariji" },
  { href: "/#usluge", label: "Oblasti prava" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Zatvori dropdown klikom van njega
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (teamRef.current && !teamRef.current.contains(e.target as Node)) {
        setTeamOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-primary shadow-xl" : "bg-primary sm:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/logo.png"
              alt={SITE_NAME}
              width={48}
              height={48}
              className="w-12 h-12 object-contain brightness-0 invert"
            />
            <div>
              <p className="text-white/90 text-xs uppercase">Адвокатска канцеларија</p>
              <p className="text-gold font-serif text-xl font-bold leading-none">Веселиновић</p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-gold transition-colors duration-200 text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Naš tim dropdown */}
            <div
              ref={teamRef}
              className="relative"
              onMouseEnter={() => setTeamOpen(true)}
              onMouseLeave={() => setTeamOpen(false)}
            >
              <a
                href="/#tim"
                className="flex items-center gap-1.5 text-white/85 hover:text-gold transition-colors duration-200 text-sm font-medium tracking-wide relative group"
                onClick={() => setTeamOpen(false)}
              >
                Naš tim
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${teamOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-primary border border-white/10 shadow-2xl transition-all duration-200 origin-top ${
                  teamOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                {/* Arrow */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary border-l border-t border-white/10 rotate-45" />

                <div className="py-2 relative">
                  {teamMembers.map((member, i) => (
                    <a
                      key={member.href}
                      href={member.href}
                      onClick={() => setTeamOpen(false)}
                      className={`flex flex-col px-5 py-3 hover:bg-white/5 transition-colors duration-150 ${
                        i < teamMembers.length - 1 ? "border-b border-white/5" : ""
                      }`}
                    >
                      <span className="text-white text-sm font-medium leading-tight">
                        {member.name}
                      </span>
                      <span className="text-gold/70 text-xs mt-0.5">{member.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/kontakt"
              className="text-white/85 hover:text-gold transition-colors duration-200 text-sm font-medium tracking-wide relative group"
            >
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.phone1Href}
              className="hidden lg:flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary font-bold px-5 py-2.5 text-sm tracking-wide transition-colors duration-200"
            >
              <PhoneIcon />
              Pozovite nas
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Otvori meni"
              className="lg:hidden text-white p-2 hover:text-gold transition-colors"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-primary border-t border-white/10`}
      >
        <nav className="px-4 py-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-3 py-3 text-white/85 hover:text-gold hover:bg-white/5 rounded transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile: Naš tim with expandable submenu */}
          <div>
            <button
              onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
              className="w-full flex items-center justify-between px-3 py-3 text-white/85 hover:text-gold hover:bg-white/5 rounded transition-colors text-sm font-medium"
            >
              <a
                href="/#tim"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                Naš tim
              </a>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileTeamOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileTeamOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="ml-3 border-l border-white/10 pl-3 py-1 flex flex-col gap-0.5">
                {teamMembers.map((member) => (
                  <a
                    key={member.href}
                    href={member.href}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileTeamOpen(false);
                    }}
                    className="flex flex-col px-3 py-2.5 hover:bg-white/5 rounded transition-colors"
                  >
                    <span className="text-white text-sm font-medium">{member.name}</span>
                    <span className="text-gold/70 text-xs">{member.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="/kontakt"
            onClick={() => setIsOpen(false)}
            className="px-3 py-3 text-white/85 hover:text-gold hover:bg-white/5 rounded transition-colors text-sm font-medium"
          >
            Kontakt
          </a>

          <a
            href={CONTACT.phone1Href}
            className="mt-3 flex items-center justify-center gap-2 bg-gold text-primary font-bold py-3 rounded text-sm"
          >
            <PhoneIcon />
            {CONTACT.phone1}
          </a>
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

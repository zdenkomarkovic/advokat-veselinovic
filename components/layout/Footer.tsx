import Image from "next/image";
import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const quickLinks = [
  { href: "/#pocetna", label: "Početna" },
  { href: "/#o-kancelariji", label: "O kancelariji" },
  { href: "/#usluge", label: "Oblasti prava" },
  { href: "/#tim", label: "Naš tim" },
  { href: "/kontakt", label: "Kontakt" },
];

const serviceLinks = [
  "Krivično pravo",
  "Upravno pravo",
  "Obligaciono pravo",
  "Porodično pravo",
  "Radno pravo",
  "Nasledno pravo",
  "Izvršno pravo",
  "Prekršajno pravo",
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70">
      {/* Gold top border */}
      <div className="h-1 bg-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt={SITE_NAME} width={44} height={44} className="w-11 h-11 object-contain brightness-0 invert" />
              <div>
                <p className="text-white/60 text-[10px] tracking-widest uppercase leading-none mb-1">
                  Адвокатска канцеларија
                </p>
                <p className="text-gold font-serif text-lg font-bold leading-none">Веселиновић</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Stručna pravna pomoć i zastupanje u svim oblastima prava. Vaši interesi — naša misija.
            </p>
            {/* Social */}
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook stranica"
              className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Navigacija
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-gold/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Oblasti prava
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#usluge"
                    className="text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-gold/50" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <LocationIcon />
                <span className="text-sm leading-relaxed">{CONTACT.address}</span>
              </li>
              <li>
                <a href={CONTACT.phone1Href} className="flex gap-3 hover:text-gold transition-colors text-sm">
                  <PhoneIcon />
                  {CONTACT.phone1}
                </a>
              </li>
              <li>
                <a href={CONTACT.phone2Href} className="flex gap-3 hover:text-gold transition-colors text-sm">
                  <PhoneIcon />
                  {CONTACT.phone2}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="flex gap-3 hover:text-gold transition-colors text-sm break-all">
                  <EmailIcon />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE_NAME}. Sva prava zadržana.
          </p>
          <p className="text-xs text-white/30">
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-200"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

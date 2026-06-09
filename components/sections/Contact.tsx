import { CONTACT } from "@/lib/constants";

const contactItems = [
  {
    label: "Adresa",
    value: CONTACT.address,
    href: "https://maps.google.com/?q=Vojvode+Živojina+Mišića+6,+Pančevo,+Srbija",
    icon: <LocationIcon />,
  },
  {
    label: "Telefon 1",
    value: CONTACT.phone1,
    href: CONTACT.phone1Href,
    icon: <PhoneIcon />,
  },
  {
    label: "Telefon 2",
    value: CONTACT.phone2,
    href: CONTACT.phone2Href,
    icon: <PhoneIcon />,
  },
  {
    label: "E-mail",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    icon: <EmailIcon />,
  },
];

export function Contact() {
  return (
    <section id="kontakt" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Kontakt
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-5">
            Stupite u kontakt s nama
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gray-500 leading-relaxed">
            Dostupni smo za sva pitanja, konsultacije i zakazivanje termina. Javite nam se telefonom, e-mailom ili nas posetite u kancelariji.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info panel */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="bg-primary text-white p-8 sm:p-10 flex-1">
              <h3 className="text-2xl font-bold mb-2">Advokatska kancelarija</h3>
              <p className="text-gold font-semibold text-lg mb-8">Veselinović</p>

              <ul className="space-y-7">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="text-gold flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-white/50 text-xs tracking-widest uppercase mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-white hover:text-gold transition-colors duration-200 text-sm leading-relaxed"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-white/10 my-8" />

              {/* Social */}
              <div>
                <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Pratite nas</p>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white hover:text-gold transition-colors duration-200"
                >
                  <FacebookIcon />
                  <span className="text-sm">Facebook stranica</span>
                </a>
              </div>

              {/* Gold bottom accent */}
              <div className="h-1 bg-gold mt-10 -mx-8 sm:-mx-10" />
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-full overflow-hidden border border-cream-dark">
              <iframe
                title="Lokacija Advokatska kancelarija Veselinović, Pančevo"
                src="https://maps.google.com/maps?q=Vojvode+Živojina+Mišića+6,+Pančevo,+Srbija&output=embed&hl=sr&z=16"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Quick action strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={CONTACT.phone1Href}
            className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-white font-semibold py-5 transition-colors duration-300"
          >
            <PhoneIcon />
            <span>Pozovite: {CONTACT.phone1}</span>
          </a>
          <a
            href={CONTACT.emailHref}
            className="flex items-center justify-center gap-3 border-2 border-primary hover:bg-primary hover:text-white text-primary font-semibold py-5 transition-all duration-300"
          >
            <EmailIcon />
            <span>Pošaljite e-mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

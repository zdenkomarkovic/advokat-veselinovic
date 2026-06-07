const services = [
  {
    id: "krivicno",
    title: "Krivično pravo",
    short: "Krivični advokat — odbrana i zastupanje",
    description:
      "Stručna odbrana okrivljenih punoletnih i maloletnih lica, zastupanje oštećenih u svim fazama postupka — od istrage i saslušanja pred policijom i tužilaštvom do pretresa i žalbenih postupaka. Sačinjavamo krivične prijave, privatne krivične tužbe i žalbe na presude.",
    icon: <ScaleIcon />,
  },
  {
    id: "upravno",
    title: "Upravno pravo",
    short: "Zastupanje pred državnim organima i institucijama",
    description:
      "Efikasno zastupanje pred svim državnim, pokrajinskim i lokalnim organima. Specijalizovani smo za ozakonjenje i legalizaciju objekata, konverziju i uknjižbu prava svojine, poreske postupke, predmete pred APR-om, Fondom PIO i RFZO-om.",
    icon: <BuildingIcon />,
  },
  {
    id: "obligaciono",
    title: "Obligaciono i stvarno pravo",
    short: "Naknade štete, ugovori i imovinsko-pravni sporovi",
    description:
      "Zastupamo u parnicama radi naknade materijalne i nematerijalne štete, likvidaciji odštetnih zahteva pred osiguravačima, naplati duga i sporovima zbog smetanja poseda. Sačinjavamo kupoprodajne ugovore, ugovore o poklonu, doživotnom izdržavanju i sve druge vrste ugovora.",
    icon: <HandshakeIcon />,
  },
  {
    id: "izvrsno",
    title: "Izvršno pravo",
    short: "Prinudna naplata i zaštita poverilaca",
    description:
      "Brza i efikasna zaštita poverilaca: sačinjavanje predloga za izvršenje, zastupanje u postupcima prinudne naplate i prigovorima trećih lica. Pružamo i zaštitu dužnicima kroz prigovore na rešenja o izvršenju i zaustavljanje nezakonite naplate.",
    icon: <GavelIcon />,
  },
  {
    id: "porodicno",
    title: "Porodično pravo",
    short: "Porodični advokat — razvod, deca, alimentacija",
    description:
      "Zastupamo u svim porodičnopravnim postupcima — razvod i poništaj braka, poveravanje dece, određivanje i izmena alimentacije, predmeti nasilja u porodici, deoba bračne tekovine, lišenje poslovne sposobnosti i postupci utvrđivanja porodičnih odnosa.",
    icon: <FamilyIcon />,
  },
  {
    id: "radno",
    title: "Radno pravo",
    short: "Advokat za zaštitu prava zaposlenih",
    description:
      "Zastupanje zaposlenih u parnicama radi vraćanja na rad, naplate neisplaćenih zarada, naknada zarade, jubilarnih nagrada i troškova prevoza. Pružamo pravnu pomoć i u predmetima mobinga, diskriminacije na radnom mestu i zaštite uzbunjivača.",
    icon: <WorkIcon />,
  },
  {
    id: "nasledno",
    title: "Nasledno pravo",
    short: "Testamenti, ostavina i nasleđivanje",
    description:
      "Sačinjavanje punovažnih testamenta, pokretanje i zastupanje u ostavinskim postupcima pred sudom, zaštita naslednih prava u parničnom postupku. Vodimo i postupke proglašenja nestalog lica za umrlo i ostale sporove u oblasti nasleđivanja.",
    icon: <DocumentIcon />,
  },
  {
    id: "prekrsajno",
    title: "Prekršajno pravo",
    short: "Odbrana u prekršajnim postupcima",
    description:
      "Profesionalna odbrana u svim vrstama prekršajnih postupaka pred Prekršajnim sudom i organima Ministarstva unutrašnjih poslova. Zastupamo klijente i u žalbenim postupcima pred Višim prekršajnim sudom radi ukidanja ili ublažavanja izrečenih sankcija.",
    icon: <ShieldIcon />,
  },
];

export function Services() {
  return (
    <section id="usluge" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Oblasti prava
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary leading-tight mb-5">
            Advokat za svaku oblast prava
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gray-500 leading-relaxed">
            Advokatska kancelarija Veselinović pruža pravne usluge u osam oblasti prava. Bez obzira na složenost predmeta, svaki klijent dobija stručno, posvećeno i personalizovano zastupanje.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-cream hover:bg-primary border border-cream-dark hover:border-gold p-7 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary group-hover:bg-gold/20 rounded-sm flex items-center justify-center mb-5 transition-colors duration-300">
                <span className="text-gold group-hover:text-gold w-6 h-6">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-primary group-hover:text-white mb-2 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Short */}
              <p className="text-gold text-xs font-semibold tracking-wide uppercase mb-3 transition-colors duration-300">
                {service.short}
              </p>

              {/* Gold separator */}
              <div className="w-8 h-0.5 bg-gold/40 group-hover:bg-gold/60 mb-4 transition-colors duration-300" />

              {/* Description */}
              <p className="text-gray-500 group-hover:text-white/75 text-sm leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-5">
            Niste sigurni koji advokat vam treba ili kojoj oblasti pripada vaš slučaj?
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 border-2 border-primary hover:bg-primary hover:text-white text-primary font-semibold px-8 py-4 text-sm tracking-wide transition-all duration-300"
          >
            Kontaktirajte nas za besplatne informacije
          </a>
        </div>
      </div>
    </section>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 3v18M3 9l9-6 9 6M5 12H3l4 8H3M19 12h2l-4 8h2" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V9h6v12" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function GavelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 17h18M8 17V5l4 2 4-2v12" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="7" r="2" />
      <path d="M3 21v-2a4 4 0 014-4h4M13 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M9 12h6M9 16h6M17 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z" />
      <path d="M13 3v4h4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

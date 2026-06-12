import Image from "next/image";

const strengths = [
  {
    icon: "⚖",
    title: "Iskustvo i stručnost",
    text: "Višegodišnja praksa u zastupanju pred sudovima, tužilaštvima i državnim organima.",
  },
  {
    icon: "🤝",
    title: "Individualni pristup",
    text: "Svaki predmet tretiramo zasebno, uz pažljivo slušanje i analizu vaše situacije.",
  },
  {
    icon: "🔒",
    title: "Poverljivost",
    text: "Apsolutna diskrecija u radu sa klijentima — vaše poverenje je naša obaveza.",
  },
  {
    icon: "📋",
    title: "Transparentnost",
    text: "Jasna komunikacija, realne procene i otvorena informisanost o svakom koraku postupka.",
  },
];

export function About() {
  return (
    <section id="o-kancelariji" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              O kancelariji
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-6">
              Vaši pravni interesi —<br />
              naša prioritet
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Advokatska kancelarija Veselinović pruža sveobuhvatnu pravnu pomoć fizičkim i pravnim
              licima u Pančevu i šire. Sa sedištem u samom centru Pančeva, kancelarija zastupa
              klijente pred svim sudovima, tužilaštvima i državnim organima u Republici Srbiji.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Naš advokat pristupa svakom predmetu uz punu posvećenost i strogu zaštitu klijentskog
              poverenja. Verujemo da kvalitetna pravna zaštita mora biti dostupna svakome — stoga
              pružamo jasne pravne savete, realne procene ishoda i efikasne strategije prilagođene
              vašoj konkretnoj situaciji.
            </p>

            {/* Strengths grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {strengths.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-300"
              >
                Zakažite konsultacije
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/MPP08725-2.webp"
                alt="Advokatska kancelarija Veselinović — profesionalna pravna usluga"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold accent border */}
              <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
            </div>
            {/* Decorative gold block */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 -z-10" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 -z-10" />

            {/* Stat card */}
            <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-primary text-white p-6 shadow-xl">
              <p className="text-4xl font-bold text-gold leading-none">8+</p>
              <p className="text-white/70 text-xs tracking-widest uppercase mt-1">Oblasti prava</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

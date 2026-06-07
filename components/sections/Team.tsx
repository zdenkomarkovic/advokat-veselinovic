import Image from "next/image";

const members = [
  {
    name: "Aleksandar Veselinović",
    title: "Osnivač i advokat",
    photo: "/MPP08692-2.jpg",
    href: "/advokati/aleksandar-veselinovic",
    highlights: [
      "Pravni fakultet Beograd — ocena 9,33",
      "Master — radno i socijalno pravo (9,50)",
      "Sertifikovani medijator",
      "Advokat od 2014. godine",
    ],
    bio: "Osnivač kancelarije. Diplomirao i završio master studije na Pravnom fakultetu u Beogradu sa izuzetnim prosečnim ocenama. Sertifikovani medijator.",
  },
  {
    name: "Tijana Obradović",
    title: "Advokat partner",
    photo: "/MPP08664-2.jpg",
    href: "/advokati/tijana-obradovic",
    highlights: [
      "Pravni fakultet Beograd — teorijsko-pravni smer",
      "Član tima od 2018. godine",
      "Iskustvo u svim granama prava",
      "Advokat od 2021. godine",
    ],
    bio: "Diplomirani pravnik Pravnog fakulteta Beogradskog univerziteta. Član tima od 2018, bogato iskustvo u zastupanju pred sudovima i državnim organima. Advokat od 2021.",
  },
  {
    name: "Jovan Polić",
    title: "Advokat partner",
    photo: "/MPP08560-2.jpg",
    href: "/advokati/jovan-polic",
    highlights: [
      "Pravni fakultet za privredu i pravosuđe",
      "U kancelariji od IV godine studija",
      "Iskustvo u svim vrstama sudskih postupaka",
      "Advokat od 2024. godine",
    ],
    bio: "Diplomirani pravnik koji je praksu u kancelariji Veselinović počeo još tokom studija. Kao advokatski pripravnik stekao sveobuhvatno iskustvo. Advokat od jula 2024.",
  },
  {
    name: "Nikola Sretenović",
    title: "Advokatski pripravnik",
    photo: "/MPP05391.webp",
    href: "/advokati/nikola-sretenovic",
    highlights: [
      "Pravni fakultet Beograd",
      "Zlatibor škola prava",
      "3. mesto u takmičenju u besedništvu",
      "Tečan engleski i nemački jezik",
    ],
    bio: "Diplomirani pravnik Pravnog fakulteta Beogradskog univerziteta. Dobitnik 3. mesta u takmičenju u besedništvu. Tečno govori engleski i nemački, što mu otvara vrata međunarodne pravne prakse.",
  },
  {
    name: "Tijana Balčaković",
    title: "Advokatski pripravnik",
    photo: "/MPP08596-2.jpg",
    href: "/advokati/tijana-balcakovic",
    highlights: [
      "Pravni fakultet Beograd",
      "Pravna klinika — upravno pravo",
      "Iskustvo u praktičnoj primeni prava",
      "Posvećenost stalnom usavršavanju",
    ],
    bio: "Diplomirani pravnik Pravnog fakulteta Beogradskog univerziteta. Tokom studija učestvovala u pravnoj klinici za upravno pravo. Profesionalni razvoj usmerava ka pružanju kvalitetne pravne podrške.",
  },
  {
    name: "Aleksandra Spasić",
    title: "Sekretar",
    photo: "/MPP05409.webp",
    href: "/advokati/aleksandra-spasic",
    highlights: [
      "Koordinacija i organizacija rada kancelarije",
      "Arhiviranje i upravljanje dokumentacijom",
      "Podrška pravnom timu",
      "U kancelariji od 2022. godine",
    ],
    bio: "Administrativno-operativni stub kancelarije od 2022. godine. Koordinira rad, organizuje arhivu i pruža sveobuhvatnu podršku pravnom timu, čineći kancelariju efikasnijom i pouzdanijom.",
  },
];

export function Team() {
  return (
    <section id="tim" className="bg-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Naš tim
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Advokati i saradnici
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-white/60 leading-relaxed">
            Upoznajte ljude koji stoje iza advokatske kancelarije Veselinović —
            tim posvećen stručnoj i odgovornoj pravnoj zaštiti vaših interesa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {members.map((member) => (
            <article
              key={member.href}
              className="group bg-primary border border-white/20 hover:border-gold transition-colors duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.title}, Advokatska kancelarija Veselinović Pančevo`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase mb-1">
                    {member.title}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-white leading-tight">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  {member.bio}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {member.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs text-white/65">
                      <span className="mt-1.5 w-3 h-px bg-gold flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={member.href}
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors duration-200 group/link"
                >
                  Pročitajte biografiju
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Aleksandra Spasić — Sekretar",
  description:
    "Aleksandra Spasić, administrativno-operativni radnik Advokatske kancelarije Veselinović u Pančevu. Ključni član tima od 2022. godine — koordinacija, organizacija i arhiviranje dokumentacije.",
  url: `${SITE_URL}/advokati/aleksandra-spasic`,
});

const timeline = [
  {
    date: "Glogonj",
    title: "Osnovna škola",
    desc: "Osnovno obrazovanje stekla u Glogonju, gde su položeni temelji njenog budućeg profesionalnog razvoja.",
    icon: <SchoolIcon />,
    highlight: false,
  },
  {
    date: "Beograd",
    title: "Srednja škola",
    desc: "Nastavila školovanje u Beogradu, gde je završila srednju školu i stekla znanja i veštine koje su joj otvorile put ka profesionalnoj karijeri.",
    icon: <BuildingIcon />,
    highlight: false,
  },
  {
    date: "2022.",
    title: "Advokatska kancelarija Veselinović",
    desc: "Priključila se timu Advokatske kancelarije Veselinović u ulozi administrativno-operativnog radnika. Odmah se istakla kao ključni član tima, demonstrirajući izuzetne sposobnosti u koordinaciji, organizaciji i arhiviranju dokumentacije.",
    icon: <StarIcon />,
    highlight: true,
  },
];

const credentials = [
  { label: "U kancelariji od", value: "2022." },
  { label: "Oblast rada", value: "Administracija" },
  { label: "Specijalnost", value: "Koordinacija" },
  { label: "Uloga", value: "Operativa" },
];

const contributions = [
  {
    title: "Koordinacija i organizacija",
    desc: "Koordinira rad kancelarije, organizuje termine i sastanke, i stara se o nesmetanom odvijanju svakodnevnih aktivnosti.",
    icon: <CoordIcon />,
  },
  {
    title: "Arhiviranje dokumentacije",
    desc: "Vodi i održava arhivu predmeta i dokumentacije kancelarije, obezbeđujući urednost, preglednost i dostupnost svih spisa.",
    icon: <ArchiveIcon />,
  },
  {
    title: "Podrška pravnom timu",
    desc: "Pruža sveobuhvatnu administrativnu podršku advokatima u svakodnevnom radu, olakšavajući fokus tima na pravne predmete.",
    icon: <TeamIcon />,
  },
  {
    title: "Unapređenje procesa",
    desc: "Kontinuirano analizira i unapređuje interne procese rada kancelarije, doprinoseći efikasnosti i kvalitetu pravnih usluga.",
    icon: <ProcessIcon />,
  },
];

export default function AleksandraSpasicPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aleksandra Spasić",
          jobTitle: "Sekretar",
          url: `${SITE_URL}/advokati/aleksandra-spasic`,
          image: `${SITE_URL}/MPP05409.webp`,
          worksFor: {
            "@type": "LegalService",
            name: "Advokatska kancelarija Veselinović",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Vojvode Živojina Mišića 6",
              addressLocality: "Pančevo",
              addressCountry: "RS",
            },
          },
          telephone: CONTACT.phone1,
          email: CONTACT.email,
          birthDate: "1992-04-01",
          birthPlace: "Pančevo",
        }}
      />
      <Navbar />
      <main>
        {/* ── Page header ───────────────────────────────── */}
        <section className="relative bg-primary pt-32 pb-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
              {/* Text side */}
              <div className="pb-16 lg:pb-20">
                <Link
                  href="/#tim"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-xs font-semibold tracking-widest uppercase mb-8 transition-colors"
                >
                  <ChevronLeftIcon />
                  Naš tim
                </Link>

                <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                  Sekretar — Pančevo
                </p>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-5">
                  Aleksandra
                  <br />
                  <span className="text-gold">Spasić</span>
                </h1>
                <div className="w-16 h-0.5 bg-gold mb-7" />
                <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10">
                  Administrativno-operativni stub kancelarije Veselinović od 2022. godine.
                  Koordinacija, organizacija i arhiviranje dokumentacije — ključni
                  činioci koji čine pravni tim efikasnijim i pouzdanijim.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Chip>Koordinacija i organizacija</Chip>
                  <Chip>Arhiviranje dokumentacije</Chip>
                  <Chip>U kancelariji od 2022.</Chip>
                </div>
              </div>

              {/* Photo side */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-72 sm:w-80 lg:w-96">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src="/MPP05409.webp"
                      alt="Aleksandra Spasić — administrativno osoblje, Advokatska kancelarija Veselinović Pančevo"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 1024px) 320px, 384px"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/30 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Credential stats bar ──────────────────────── */}
        <section className="bg-gold">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary/20">
              {credentials.map((c) => (
                <div key={c.label} className="px-6 py-6 text-center">
                  <p className="font-serif text-3xl font-bold text-primary leading-none mb-1">
                    {c.value}
                  </p>
                  <p className="text-primary/70 text-xs font-semibold tracking-widest uppercase">
                    {c.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Biography ─────────────────────────────────── */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              {/* Main bio */}
              <div className="lg:col-span-2">
                <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                  Biografija
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
                  Nezamenljivi stub kancelarije
                </h2>
                <div className="w-12 h-0.5 bg-gold mb-8" />

                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Aleksandra Spasić rođena je{" "}
                    <strong className="text-primary">1. aprila 1992. godine u Pančevu</strong>.
                    Osnovno obrazovanje stekla je u Glogonju, a srednju školu završila
                    u Beogradu.
                  </p>
                  <p>
                    Profesionalnu karijeru u oblasti administrativno-operativnih poslova
                    nastavila je{" "}
                    <strong className="text-primary">2022. godine</strong>, kada se
                    priključila timu Advokatske kancelarije Veselinović. Preuzela je
                    ulogu administrativno-operativnog radnika i odmah se istakla kao
                    <strong className="text-primary"> ključni član tima</strong>.
                  </p>
                  <p>
                    Demonstrirala je izuzetne sposobnosti u koordinaciji rada,
                    organizaciji termina i arhiviranju dokumenata. Kroz svakodnevni
                    rad kontinuirano unapređuje interne procese kancelarije i pruža
                    sveobuhvatnu podršku pravnom timu, omogućavajući advokatima da se
                    u potpunosti posvete zastupanju klijenata.
                  </p>
                  <p>
                    Njena posvećenost, preciznost i efikasnost u administraciji čine je
                    <strong className="text-primary"> nezamenjivim članom</strong> advokatske
                    kancelarije Veselinović. Udata je i majka dvoje maloletne dece.
                  </p>
                </div>

                {/* Contributions grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {contributions.map((item) => (
                    <div key={item.title} className="bg-white border border-cream-dark p-5">
                      <div className="w-9 h-9 bg-primary/5 border border-primary/10 flex items-center justify-center mb-4 text-gold">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-primary text-sm mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-primary text-white p-8 sticky top-28">
                  <h3 className="font-serif text-xl font-bold text-gold mb-6">
                    Ključne informacije
                  </h3>
                  <ul className="space-y-5">
                    <FactItem label="Datum rođenja" value="1. april 1992." />
                    <FactItem label="Mesto rođenja" value="Pančevo" />
                    <FactItem label="Osnovna škola" value="Glogonj" />
                    <FactItem label="Srednja škola" value="Beograd" />
                    <FactItem label="U kancelariji od" value="2022." />
                    <FactItem label="Uloga" value="Sekretar" />
                    <FactItem label="Oblast" value="Koordinacija, organizacija, arhiviranje" />
                    <FactItem label="Kancelarija" value="Pančevo, Vojvode Živojina Mišića 6" />
                  </ul>

                  <div className="border-t border-white/10 mt-8 pt-8">
                    <a
                      href="/kontakt"
                      className="block text-center bg-gold hover:bg-gold-dark text-primary font-bold py-3.5 text-sm tracking-widest uppercase transition-colors duration-300"
                    >
                      Kontaktirajte nas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Career timeline ───────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                Hronologija
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                Obrazovanje i karijera
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-5" />
            </div>

            <div className="relative">
              <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-cream-dark -translate-x-1/2" />
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-6 sm:gap-0 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                      } pl-16 sm:pl-0`}
                    >
                      <div
                        className={`inline-block p-6 border ${
                          item.highlight
                            ? "bg-primary text-white border-gold"
                            : "bg-cream border-cream-dark"
                        }`}
                      >
                        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">
                          {item.date}
                        </p>
                        <h3
                          className={`font-serif text-lg font-bold mb-2 ${
                            item.highlight ? "text-white" : "text-primary"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            item.highlight ? "text-white/80" : "text-gray-500"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                          item.highlight
                            ? "bg-gold border-gold text-primary"
                            : "bg-white border-cream-dark text-gold"
                        }`}
                      >
                        {item.icon}
                      </div>
                    </div>

                    <div className="hidden sm:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="bg-primary py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-5">
              Advokatska kancelarija Veselinović
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-5">
              Potrebna vam je pravna pomoć?
            </h2>
            <p className="text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
              Tim advokatske kancelarije Veselinović stoji vam na raspolaganju.
              Kontaktirajte nas i dogovorite termin konsultacija.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary font-bold px-9 py-4 text-sm tracking-widest uppercase transition-colors duration-300"
              >
                Pošaljite upit
              </a>
              <a
                href={CONTACT.phone1Href}
                className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-gold hover:text-gold text-white font-semibold px-9 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              >
                <PhoneIcon />
                {CONTACT.phone1}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FactItem({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex flex-col gap-0.5">
      <span className="text-white/45 text-xs tracking-widest uppercase">{label}</span>
      <span className="text-white text-sm font-medium">{value}</span>
    </li>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-gold/40 text-gold/80 text-xs font-semibold tracking-wide px-3 py-1.5">
      {children}
    </span>
  );
}

function SchoolIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V9h6v12" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function CoordIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ArchiveIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ProcessIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

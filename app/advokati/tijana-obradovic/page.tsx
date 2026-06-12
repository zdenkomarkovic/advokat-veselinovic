import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Tijana Obradović — Advokat partner",
  description:
    "Tijana Obradović, advokat u Advokatskoj kancelariji Veselinović u Pančevu. Diplomirani pravnik Pravnog fakulteta u Beogradu, teorijsko-pravni smer. Advokat od 2021. godine.",
  url: `${SITE_URL}/advokati/tijana-obradovic`,
});

const timeline = [
  {
    date: "Pančevo",
    title: "Gimnazija \"Uroš Predić\"",
    desc: "Završila srednju školu u Pančevu, čime je položila temelje za dalje akademsko usavršavanje u oblasti prava.",
    icon: <SchoolIcon />,
    highlight: false,
  },
  {
    date: "Beograd",
    title: "Pravni fakultet — teorijsko-pravni smer",
    desc: "Po završetku gimnazije upisala Pravni fakultet Univerziteta u Beogradu, teorijsko-pravni smer, i stekla diplomu pravnika.",
    icon: <GraduationIcon />,
    highlight: false,
  },
  {
    date: "2018.",
    title: "Advokatska kancelarija Veselinović",
    desc: "Po diplomiranju pridružila se timu advokatske kancelarije Veselinović. Tokom godina rada stekla je iskustvo u vođenju predmeta u gotovo svim granama prava — od zastupanja pred sudovima do rešavanja sporova pred državnim organima.",
    icon: <BriefcaseIcon />,
    highlight: false,
  },
  {
    date: "9. jul 2021.",
    title: "Pravosudni ispit",
    desc: "Položila pravosudni ispit u Beogradu pred ispitnom komisijom Ministarstva pravde Republike Srbije.",
    icon: <BadgeIcon />,
    highlight: false,
  },
  {
    date: "7. septembar 2021.",
    title: "Advokatski ispit",
    desc: "Položila advokatski ispit pred ispitnom komisijom Advokatske komore Srbije.",
    icon: <BadgeIcon />,
    highlight: false,
  },
  {
    date: "8. oktobar 2021.",
    title: "Advokatska zakletva",
    desc: "Položila advokatsku zakletvu u Advokatskoj komori Vojvodine u Novom Sadu i time zvanično postala advokat.",
    icon: <StarIcon />,
    highlight: true,
  },
];

const credentials = [
  { label: "U kancelariji od", value: "2018." },
  { label: "Advokat od", value: "2021." },
  { label: "Pravosudni ispit", value: "2021." },
  { label: "Advokatska komora", value: "Vojvodine" },
];

export default function TijanaObradovicPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tijana Obradović",
          jobTitle: "Advokat partner",
          url: `${SITE_URL}/advokati/tijana-obradovic`,
          image: `${SITE_URL}/MPP08664-2.jpg`,
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
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Pravni fakultet Univerziteta u Beogradu",
          },
          telephone: CONTACT.phone1,
          email: CONTACT.email,
          birthDate: "1992-05-03",
          birthPlace: "Pančevo",
          knowsAbout: [
            "Krivično pravo",
            "Porodično pravo",
            "Radno pravo",
            "Nasledno pravo",
            "Upravno pravo",
            "Obligaciono pravo",
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Advokati", item: `${SITE_URL}/#tim` },
            { "@type": "ListItem", position: 3, name: "Tijana Obradović", item: `${SITE_URL}/advokati/tijana-obradovic` },
          ],
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
                  Advokat partner — Pančevo
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-5">
                  Tijana
                  <br />
                  <span className="text-gold">Obradović</span>
                </h1>
                <div className="w-16 h-0.5 bg-gold mb-7" />
                <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10">
                  Diplomirani pravnik Pravnog fakulteta Univerziteta u Beogradu.
                  Član tima advokatske kancelarije Veselinović od 2018. godine,
                  advokat od 2021. godine. Iskustvo u gotovo svim granama prava.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Chip>Teorijsko-pravni smer</Chip>
                  <Chip>Advokatska komora Vojvodine</Chip>
                  <Chip>Iskustvo od 2018.</Chip>
                </div>
              </div>

              {/* Photo side */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-72 sm:w-80 lg:w-96">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src="/MPP08664-2.jpg"
                      alt="Tijana Obradović — advokat u Pančevu"
                      fill
                      className="object-cover object-top"
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
                  <p className="text-3xl font-bold text-primary leading-none mb-1">
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
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                  Obrazovanje i karijera
                </h2>
                <div className="w-12 h-0.5 bg-gold mb-8" />

                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Tijana Obradović rođena je{" "}
                    <strong className="text-primary">3. maja 1992. godine</strong>.
                    Srednje obrazovanje stekla je u Pančevu, u Gimnaziji{" "}
                    <strong className="text-primary">„Uroš Predić&#8220;</strong>.
                  </p>
                  <p>
                    Po završetku gimnazije upisala je{" "}
                    <strong className="text-primary">
                      Pravni fakultet Univerziteta u Beogradu
                    </strong>
                    , teorijsko-pravni smer. Po sticanju diplome pravnika,{" "}
                    <strong className="text-primary">2018. godine</strong> pridružila
                    se timu Advokatske kancelarije Veselinović u Pančevu.
                  </p>
                  <p>
                    Tokom višegodišnjeg rada u kancelariji stekla je bogato iskustvo u
                    vođenju pravnih predmeta u gotovo svim granama prava — od zastupanja
                    klijenata pred domaćim sudovima i državnim organima, do rešavanja
                    sporova i pružanja pravnih saveta u složenim imovinskim, porodičnim
                    i radnopravnim situacijama.
                  </p>
                  <p>
                    Dana{" "}
                    <strong className="text-primary">9. jula 2021. godine</strong>{" "}
                    položila je pravosudni ispit u Beogradu pred ispitnom komisijom
                    Ministarstva pravde Republike Srbije, a{" "}
                    <strong className="text-primary">7. septembra 2021. godine</strong>{" "}
                    i advokatski ispit pred ispitnom komisijom Advokatske komore Srbije.
                  </p>
                  <p>
                    Dana <strong className="text-primary">8. oktobra 2021. godine</strong>{" "}
                    položila je advokatsku zakletvu u Advokatskoj komori Vojvodine u
                    Novom Sadu i od tog dana nastupa kao{" "}
                    <strong className="text-primary">
                      punopravni advokat u advokatskoj kancelariji Veselinović
                    </strong>
                    .
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-primary text-white p-8 sticky top-28">
                  <h3 className="text-xl font-bold text-gold mb-6">
                    Ključne informacije
                  </h3>
                  <ul className="space-y-5">
                    <FactItem label="Datum rođenja" value="3. maj 1992." />
                    <FactItem label="Mesto rođenja" value="Pančevo" />
                    <FactItem label="Srednja škola" value='Gimnazija "Uroš Predić", Pančevo' />
                    <FactItem label="Fakultet" value="Pravni fakultet Univ. u Beogradu" />
                    <FactItem label="Smer" value="Teorijsko-pravni" />
                    <FactItem label="U kancelariji od" value="2018." />
                    <FactItem label="Pravosudni ispit" value="9. jul 2021." />
                    <FactItem label="Advokatski ispit" value="7. septembar 2021." />
                    <FactItem label="Advokat od" value="8. oktobar 2021." />
                    <FactItem label="Komora" value="Advokatska komora Vojvodine" />
                  </ul>

                  <div className="border-t border-white/10 mt-8 pt-8">
                    <a
                      href="/kontakt"
                      className="block text-center bg-gold hover:bg-gold-dark text-primary font-bold py-3.5 text-sm tracking-widest uppercase transition-colors duration-300"
                    >
                      Zakažite termin
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
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Karijera i obrazovanje
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
                          className={`text-lg font-bold mb-2 ${
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Potrebna vam je pravna pomoć?
            </h2>
            <p className="text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
              Advokat partner Tijana Obradović stoji vam na raspolaganju za sva pravna pitanja.
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

function GraduationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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

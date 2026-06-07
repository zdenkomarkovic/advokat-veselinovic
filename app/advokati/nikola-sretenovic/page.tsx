import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Nikola Sretenović — Advokatski pripravnik",
  description:
    "Nikola Sretenović, advokatski pripravnik u Advokatskoj kancelariji Veselinović u Pančevu. Diplomirani pravnik Pravnog fakulteta u Beogradu. Tečan engleski i nemački jezik.",
  url: `${SITE_URL}/advokati/nikola-sretenovic`,
});

const timeline = [
  {
    date: "Pančevo",
    title: 'Gimnazija "Uroš Predić"',
    desc: 'Završio srednju školu u Pančevu, u Gimnaziji "Uroš Predić", gde je stekao široko obrazovanje i razvio interesovanje za pravo.',
    icon: <SchoolIcon />,
    highlight: false,
  },
  {
    date: "Beograd",
    title: "Pravni fakultet Univerziteta u Beogradu",
    desc: "Nastavio obrazovanje na Pravnom fakultetu Beogradskog univerziteta, gde je uspešno završio studije i stekao diplomu pravnika.",
    icon: <GraduationIcon />,
    highlight: false,
  },
  {
    date: "Tokom studija",
    title: "Zlatibor škola prava",
    desc: "Učestvovao u prestižnoj Zlatiborskoj školi prava — jednom od najcenjenijih oblika dodatnog pravnog obrazovanja za studente u Srbiji.",
    icon: <StarOutlineIcon />,
    highlight: false,
  },
  {
    date: "Tokom studija",
    title: "3. mesto — takmičenje u besedništvu",
    desc: "Na takmičenju u besedništvu osvojo treće mesto, demonstrirajući izvanredne sposobnosti javnog govora i pravne argumentacije.",
    icon: <TrophyIcon />,
    highlight: false,
  },
  {
    date: "Praksa u pravosuđu",
    title: "Praksa u advokatskoj kancelariji Veselinović",
    desc: "Kao obavezan deo predmeta Praksa u pravosuđu obavljao praksu u kancelariji Veselinović i stekao dragoceno praktično iskustvo u oblasti prava.",
    icon: <BriefcaseIcon />,
    highlight: false,
  },
  {
    date: "Nakon diplomiranja",
    title: "Advokatski pripravnik — kancelarija Veselinović",
    desc: "Nakon završetka prakse, nastavio profesionalnu karijeru u istoj kancelariji kao advokatski pripravnik, unapređujući znanje i veštine u svakodnevnoj pravnoj praksi.",
    icon: <StarIcon />,
    highlight: true,
  },
];

const credentials = [
  { label: "Pravni fakultet", value: "Beograd" },
  { label: "Besedništvo", value: "3. mesto" },
  { label: "Strani jezici", value: "EN · DE" },
  { label: "Status", value: "Pripravnik" },
];

export default function NikolaSretenovicPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nikola Sretenović",
          jobTitle: "Advokatski pripravnik",
          url: `${SITE_URL}/advokati/nikola-sretenovic`,
          image: `${SITE_URL}/MPP05391.webp`,
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
          birthDate: "1996-11-05",
          knowsLanguage: ["sr", "en", "de"],
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
                <a
                  href="/advokati"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-xs font-semibold tracking-widest uppercase mb-8 transition-colors"
                >
                  <ChevronLeftIcon />
                  Naš tim
                </a>

                <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                  Advokatski pripravnik — Pančevo
                </p>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-5">
                  Nikola
                  <br />
                  <span className="text-gold">Sretenović</span>
                </h1>
                <div className="w-16 h-0.5 bg-gold mb-7" />
                <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10">
                  Diplomirani pravnik Pravnog fakulteta Beogradskog univerziteta.
                  Učesnik Zlatibor škole prava, dobitnik trećeg mesta u takmičenju
                  u besedništvu. Tečno govori engleski i nemački jezik.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Chip>Pravni fakultet Beograd</Chip>
                  <Chip>Engleski · Nemački</Chip>
                  <Chip>Zlatibor škola prava</Chip>
                </div>
              </div>

              {/* Photo side */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-72 sm:w-80 lg:w-96">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src="/MPP05391.webp"
                      alt="Nikola Sretenović — advokatski pripravnik u Pančevu"
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
                  Obrazovanje i karijera
                </h2>
                <div className="w-12 h-0.5 bg-gold mb-8" />

                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Nikola Sretenović rođen je{" "}
                    <strong className="text-primary">5. novembra 1996. godine</strong>.
                    Srednje obrazovanje stekao je u Pančevu, u Gimnaziji{" "}
                    <strong className="text-primary">„Uroš Predić"</strong>, gde je razvio
                    interesovanje za pravo i humanističke nauke.
                  </p>
                  <p>
                    Nakon gimnazije upisao je{" "}
                    <strong className="text-primary">
                      Pravni fakultet Univerziteta u Beogradu
                    </strong>
                    , gde je uspešno završio studije i stekao diplomu pravnika. Tokom
                    studija učestvovao je u prestižnoj{" "}
                    <strong className="text-primary">Zlatiborskoj školi prava</strong> i na
                    takmičenju u besedništvu gde je{" "}
                    <strong className="text-primary">osvojio treće mesto</strong> —
                    dokazujući izvanredne sposobnosti javne reči i pravne argumentacije.
                  </p>
                  <p>
                    Kao obavezan deo predmeta{" "}
                    <strong className="text-primary">„Praksa u pravosuđu"</strong> obavljao
                    je praksu u Advokatskoj kancelariji Veselinović, gde je stekao
                    dragoceno uvid u svakodnevni rad advokata i vođenje pravnih predmeta.
                    Nakon završetka prakse, nastavio je svoju profesionalnu karijeru u
                    istoj kancelariji u statusu{" "}
                    <strong className="text-primary">advokatskog pripravnika</strong>.
                  </p>
                  <p>
                    Posebnu vrednost u radu kancelariji donosi tečno poznavanje{" "}
                    <strong className="text-primary">engleskog i nemačkog jezika</strong>,
                    što mu omogućava uspešno bavljenje pravnim poslovima u međunarodnom
                    kontekstu i komunikaciju sa klijentima i partnerima iz inostranstva.
                  </p>
                </div>

                {/* Languages highlight */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-cream-dark p-5">
                    <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
                      Engleski jezik
                    </p>
                    <p className="text-primary font-semibold text-lg font-serif mb-1">Tečan nivo</p>
                    <p className="text-gray-500 text-sm">
                      Pravna komunikacija i dokumentacija na engleskom jeziku.
                    </p>
                  </div>
                  <div className="bg-white border border-cream-dark p-5">
                    <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
                      Nemački jezik
                    </p>
                    <p className="text-primary font-semibold text-lg font-serif mb-1">Tečan nivo</p>
                    <p className="text-gray-500 text-sm">
                      Zastupanje i komunikacija sa klijentima iz nemačkog govornog područja.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-primary text-white p-8 sticky top-28">
                  <h3 className="font-serif text-xl font-bold text-gold mb-6">
                    Ključne informacije
                  </h3>
                  <ul className="space-y-5">
                    <FactItem label="Datum rođenja" value="5. novembar 1996." />
                    <FactItem label="Srednja škola" value='Gimnazija "Uroš Predić", Pančevo' />
                    <FactItem label="Fakultet" value="Pravni fakultet Univ. u Beogradu" />
                    <FactItem label="Strani jezici" value="Engleski · Nemački (tečno)" />
                    <FactItem label="Zlatibor škola prava" value="Učesnik" />
                    <FactItem label="Besedništvo" value="3. mesto na takmičenju" />
                    <FactItem label="Praksa" value="Kancelarija Veselinović" />
                    <FactItem label="Trenutni status" value="Advokatski pripravnik" />
                    <FactItem label="Kancelarija" value="Pančevo, Vojvode Živojina Mišića 6" />
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
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
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
              Tim advokatske kancelarije Veselinović stoji vam na raspolaganju. Kontaktirajte nas
              i dogovorite termin konsultacija.
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

function TrophyIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function StarOutlineIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Aleksandar Veselinović — Advokat",
  description:
    "Aleksandar Veselinović, advokat u Pančevu od 2014. godine. Diplomirani pravnik Pravnog fakulteta u Beogradu (9,33), master radno i socijalno pravo (9,50), sertifikovani medijator.",
  url: `${SITE_URL}/advokati/aleksandar-veselinovic`,
});

const timeline = [
  {
    year: "2011",
    date: "9. septembar 2011.",
    title: "Diploma — Pravni fakultet Beograd",
    desc: "Diplomirao na Pravnom fakultetu Univerziteta u Beogradu sa izuzetnom prosečnom ocenom 9,33.",
    icon: <GraduationIcon />,
  },
  {
    year: "2011–2014",
    date: "Novembar 2011. — Januar 2014.",
    title: "Advokatski pripravnik",
    desc: "Radio kao advokatski pripravnik u kancelariji advokata Đorđa Simića u Beogradu — stekao dragoceno iskustvo u svim oblastima prava.",
    icon: <BriefcaseIcon />,
  },
  {
    year: "2014",
    date: "28. mart 2014.",
    title: "Pravosudni ispit",
    desc: "Položio pravosudni ispit u Beogradu pred ispitnom komisijom Ministarstva pravde Republike Srbije.",
    icon: <BadgeIcon />,
  },
  {
    year: "2014",
    date: "23. april 2014.",
    title: "Advokatski ispit",
    desc: "Položio advokatski ispit pred ispitnom komisijom Advokatske komore Srbije.",
    icon: <BadgeIcon />,
  },
  {
    year: "2014",
    date: "3. jul 2014.",
    title: "Advokatska zakletva — osnivanje kancelarije",
    desc: "Položio advokatsku zakletvu u Advokatskoj komori Vojvodine u Novom Sadu. Isti dan osniva samostalnu advokatsku kancelariju u Pančevu.",
    icon: <StarIcon />,
    highlight: true,
  },
  {
    year: "2014",
    date: "12. septembar 2014.",
    title: "Master akademske studije",
    desc: "Završio master akademske studije na Pravnom fakultetu Univerziteta u Beogradu — modul radno i socijalno pravo, sa prosečnom ocenom 9,50.",
    icon: <GraduationIcon />,
  },
  {
    year: "2016",
    date: "Maj 2016.",
    title: "Sertifikovani medijator",
    desc: "Završio akreditovanu obuku za medijatora u okviru programa Partnera za demokratske promene. Upisan u imenik medijatora pri Ministarstvu pravde RS.",
    icon: <MediationIcon />,
  },
];

const credentials = [
  { label: "U advokaturi od", value: "2014." },
  { label: "Osnovna ocena", value: "9,33" },
  { label: "Master ocena", value: "9,50" },
  { label: "Medijator od", value: "2016." },
];

export default function AleksandarVeselinovicPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aleksandar Veselinović",
          jobTitle: "Advokat",
          url: `${SITE_URL}/advokati/aleksandar-veselinovic`,
          image: `${SITE_URL}/MPP08692-2.jpg`,
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
          birthDate: "1988-10-11",
          birthPlace: "Pančevo",
          knowsAbout: [
            "Krivično pravo",
            "Porodično pravo",
            "Radno pravo",
            "Nasledno pravo",
            "Upravno pravo",
            "Obligaciono pravo",
            "Medijacija",
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
            { "@type": "ListItem", position: 3, name: "Aleksandar Veselinović", item: `${SITE_URL}/advokati/aleksandar-veselinovic` },
          ],
        }}
      />
      <Navbar />
      <main>
        {/* ── Page header ───────────────────────────────── */}
        <section className="relative bg-primary pt-32 pb-0 overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-0 items-end">
              {/* Text side */}
              <div className="pb-16 lg:pb-20">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-xs font-semibold tracking-widest uppercase mb-8 transition-colors"
                >
                  <ChevronLeftIcon />
                  Početna
                </Link>

                <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                  Advokat — Pančevo
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-5">
                  Aleksandar
                  <br />
                  <span className="text-gold">Veselinović</span>
                </h1>
                <div className="w-16 h-0.5 bg-gold mb-7" />
                <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10">
                  Advokat sa dugogodišnjim iskustvom u svim oblastima prava.
                  Sertifikovani medijator. Osnivač i vlasnik advokatske kancelarije
                  Veselinović u Pančevu od 2014. godine.
                </p>

                {/* Credential chips */}
                <div className="flex flex-wrap gap-3">
                  <Chip>Radno i socijalno pravo — Master</Chip>
                  <Chip>Sertifikovani medijator</Chip>
                  <Chip>Advokatska komora Vojvodine</Chip>
                </div>
              </div>

              {/* Photo side */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xl lg:max-w-none">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/MPP08692-2.jpg"
                      alt="Aleksandar Veselinović — advokat u Pančevu"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                  {/* Gold frame accent */}
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
                    Aleksandar Veselinović rođen je <strong className="text-primary">11. oktobra 1988. godine u Pančevu</strong>.
                    Na Pravnom fakultetu Univerziteta u Beogradu diplomirao je dana 9. septembra 2011. godine
                    sa izuzetnom prosečnom ocenom <strong className="text-primary">9,33</strong>.
                  </p>
                  <p>
                    Neposredno po diplomiranju, od novembra 2011. do januara 2014. godine,
                    radio je kao advokatski pripravnik u kancelariji advokata Đorđa Simića u Beogradu,
                    gde je stekao sveobuhvatno praktično iskustvo u zastupanju klijenata pred sudovima
                    i državnim organima.
                  </p>
                  <p>
                    U martu 2014. godine položio je pravosudni ispit pred komisijom Ministarstva
                    pravde Republike Srbije, a mesec dana kasnije — advokatski ispit pred ispitnom
                    komisijom Advokatske komore Srbije. Dana <strong className="text-primary">3. jula 2014. godine</strong> položio
                    je advokatsku zakletvu u Advokatskoj komori Vojvodine u Novom Sadu i od tog dana
                    vodi <strong className="text-primary">samostalnu advokatsku kancelariju u Pančevu</strong>.
                  </p>
                  <p>
                    U septembru iste godine završio je master akademske studije na Pravnom fakultetu
                    Univerziteta u Beogradu, pod modulom <strong className="text-primary">radno i socijalno pravo</strong>,
                    sa prosečnom ocenom <strong className="text-primary">9,50</strong>.
                  </p>
                  <p>
                    Maja 2016. godine završio je akreditovanu obuku za medijatora u okviru programa
                    Partnera za demokratske promene i upisao se u <strong className="text-primary">imenik medijatora
                    pri Ministarstvu pravde RS</strong>, čime je proširio svoju stručnost i na vansudsko
                    rešavanje sporova.
                  </p>
                  <p>
                    Otac jednog sina.
                  </p>
                </div>
              </div>

              {/* Sidebar: quick facts */}
              <div>
                <div className="bg-primary text-white p-8 sticky top-28">
                  <h3 className="text-xl font-bold text-gold mb-6">Ključne informacije</h3>

                  <ul className="space-y-5">
                    <FactItem label="Datum rođenja" value="11. oktobar 1988." />
                    <FactItem label="Mesto rođenja" value="Pančevo" />
                    <FactItem label="Fakultet" value="Pravni fakultet Univ. u Beogradu" />
                    <FactItem label="Osnovna ocena" value="9,33" />
                    <FactItem label="Master studije" value="Radno i socijalno pravo" />
                    <FactItem label="Master ocena" value="9,50" />
                    <FactItem label="Advokat od" value="3. jul 2014." />
                    <FactItem label="Komora" value="Advokatska komora Vojvodine" />
                    <FactItem label="Medijator od" value="Maj 2016." />
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
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Karijera i obrazovanje
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-5" />
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-cream-dark -translate-x-1/2" />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-6 sm:gap-0 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Content box */}
                    <div className={`flex-1 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"} pl-16 sm:pl-0`}>
                      <div
                        className={`inline-block p-6 border ${
                          item.highlight
                            ? "bg-primary text-white border-gold"
                            : "bg-cream border-cream-dark"
                        }`}
                      >
                        <p
                          className={`text-xs font-semibold tracking-widest uppercase mb-1 ${
                            item.highlight ? "text-gold" : "text-gold"
                          }`}
                        >
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

                    {/* Center dot */}
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

                    {/* Empty side on desktop */}
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
              Advokat Aleksandar Veselinović stoji vam na raspolaganju za sva pravna pitanja.
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

function MediationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
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

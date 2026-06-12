import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte Advokatsku kancelariju Veselinović u Pančevu. Pozovite nas ili pošaljite upit — odgovorićemo u najkraćem roku. Vojvode Živojina Mišića 6, Pančevo.",
  url: `${SITE_URL}/kontakt`,
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Kontakt — Advokatska kancelarija Veselinović",
          url: `${SITE_URL}/kontakt`,
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Kontakt", item: `${SITE_URL}/kontakt` },
            ],
          },
          mainEntity: {
            "@type": "LegalService",
            name: "Advokatska kancelarija Veselinović",
            telephone: [CONTACT.phone1, CONTACT.phone2],
            email: CONTACT.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Vojvode Živojina Mišića 6",
              addressLocality: "Pančevo",
              postalCode: "26000",
              addressRegion: "Vojvodina",
              addressCountry: "RS",
            },
          },
        }}
      />
      <Navbar />
      <main>
        {/* Page header */}
        <section className="bg-primary pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Advokatska kancelarija Veselinović
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">
              Kontaktirajte advokata
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
              Advokatska kancelarija Veselinović dostupna je za sva pitanja i zakazivanje konsultacija. Javite nam se — odgovorićemo u najkraćem roku.
            </p>
          </div>
        </section>

        {/* Contact info + map */}
        <Contact />

        {/* Form section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
              {/* Left: info */}
              <div className="lg:col-span-2">
                <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                  Pišite nam
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight mb-5">
                  Pošaljite nam poruku
                </h2>
                <div className="w-12 h-0.5 bg-gold mb-7" />
                <p className="text-gray-500 leading-relaxed mb-6">
                  Ispunite formular i opisite ukratko vaš pravni predmet. Advokat Veselinović će vam odgovoriti u roku od jednog radnog dana.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Sve informacije koje podelite sa nama tretiramo sa punom poverljivošću u skladu sa važećim propisima o zaštiti podataka o ličnosti.
                </p>

                {/* Quick contact */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
                    Ili nas direktno kontaktirajte
                  </p>
                  <a
                    href={CONTACT.phone1Href}
                    className="flex items-center gap-3 text-primary hover:text-gold transition-colors font-medium"
                  >
                    <PhoneIcon />
                    {CONTACT.phone1}
                  </a>
                  <a
                    href={CONTACT.phone2Href}
                    className="flex items-center gap-3 text-primary hover:text-gold transition-colors font-medium"
                  >
                    <PhoneIcon />
                    {CONTACT.phone2}
                  </a>
                  <a
                    href={CONTACT.emailHref}
                    className="flex items-center gap-3 text-primary hover:text-gold transition-colors font-medium break-all"
                  >
                    <EmailIcon />
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div className="lg:col-span-3 bg-cream border border-cream-dark p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

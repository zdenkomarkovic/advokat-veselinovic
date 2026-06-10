import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { JsonLd } from "@/components/seo/JsonLd";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          image: `${SITE_URL}/hero.jpg`,
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
          geo: {
            "@type": "GeoCoordinates",
            latitude: 44.8708,
            longitude: 20.6403,
          },
          hasMap: "https://maps.google.com/?q=Vojvode+%C5%BDivojina+Mi%C5%A1i%C4%87a+6%2C+Pan%C4%8Devo",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
            },
          ],
          sameAs: [CONTACT.facebook],
          description:
            "Advokatska kancelarija Veselinović pruža stručnu pravnu pomoć u oblasti krivičnog, porodičnog, radnog, naslednog, upravnog i obligacionog prava.",
          areaServed: [
            {
              "@type": "City",
              name: "Pančevo",
            },
            {
              "@type": "AdministrativeArea",
              name: "Vojvodina",
            },
          ],
          priceRange: "$$",
          serviceType: [
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
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
      </main>
      <Footer />
    </>
  );
}

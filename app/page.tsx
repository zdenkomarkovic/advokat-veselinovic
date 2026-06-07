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
          telephone: [CONTACT.phone1, CONTACT.phone2],
          email: CONTACT.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vojvode Živojina Mišića 6",
            addressLocality: "Pančevo",
            addressCountry: "RS",
          },
          sameAs: [CONTACT.facebook],
          description:
            "Advokatska kancelarija Veselinović pruža stručnu pravnu pomoć u oblasti krivičnog, porodičnog, radnog, naslednog, upravnog i obligacionog prava.",
          areaServed: "Pančevo, Srbija",
          priceRange: "$$",
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

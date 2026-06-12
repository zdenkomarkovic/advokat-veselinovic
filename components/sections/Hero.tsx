import Image from "next/image";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative h-screen flex items-end justify-start overflow-hidden"
    >
      {/* Desktop image */}
      <Image
        src="/hero.webp"
        alt="Advokatska kancelarija Veselinović — Pančevo"
        fill
        className="hidden sm:block object-cover object-[center_10%]"
        priority
        quality={85}
        sizes="100vw"
      />

      {/* Mobile image — počinje ispod navbara (top-20 = 80px) */}
      <div className="sm:hidden absolute top-16 inset-x-0 z-10 bottom-0">
        <Image
          src="/hero.webp"
          alt="Advokatska kancelarija Veselinović — Pančevo"
          fill
          className="object-contain object-top"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Desktop overlay */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-primary/20" />

      {/* Mobile gradient — ispod slike do kraja hero sekcije */}
      <div className="sm:hidden absolute inset-x-0 bottom-0 h-full bg-primary" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-12 text-center sm:text-left flex flex-col items-center sm:items-start">
        {/* H1 */}
        <h1 className="max-w-2xl text-3xl sm:text-5xl font-bold text-white leading-normal md:leading-tight tracking-tight mb-6 md:mb-3">
          <span className="flex items-center justify-center sm:justify-start gap-4 font-sans text-gold text-xs md:text-lg font-semibold tracking-[0.35em] uppercase mb-6 md:mb-3 not-italic">
            <span className="h-px w-8 md:w-12 bg-gold flex-shrink-0" aria-hidden="true" />
            Advokat — Pančevo
            <span className="h-px w-8 md:w-12 bg-gold flex-shrink-0" aria-hidden="true" />
          </span>
          Advokatska kancelarija Veselinović Pančevo
        </h1>

        {/* Tagline */}
        <p className="text-white/85 text-lg font-light leading-relaxed max-w-xl mb-8 md:mb-5">
          Stručna pravna zaštita vaših prava i interesa —<br className="hidden sm:block" /> advokat
          sa iskustvom, posvećenošću i poverenjem.
        </p>

        {/* CTA */}
        <a
          href="/kontakt"
          className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-primary font-bold px-9 py-4 text-sm tracking-widest uppercase transition-colors duration-300"
        >
          Kontaktirajte nas
        </a>
      </div>
    </section>
  );
}

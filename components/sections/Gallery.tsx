import Image from "next/image";

const photos = [
  { src: "/MPP08560-2.jpg", alt: "Advokatska kancelarija Veselinović Pančevo — radni prostor" },
  { src: "/MPP08581-2.jpg", alt: "Advokat Veselinović — advokatska kancelarija u Pančevu" },
  { src: "/MPP08596-2.jpg", alt: "Advokatska kancelarija Veselinović — profesionalni ambijent" },
  { src: "/MPP08664-2.jpg", alt: "Advokat Veselinović Pančevo — pravna ekspertiza i iskustvo" },
  { src: "/MPP08692-2.jpg", alt: "Advokatska kancelarija Veselinović — Vojvode Živojina Mišića 6 Pančevo" },
  { src: "/MPP08725-2.jpg", alt: "Advokat Veselinović — stručno pravno zastupanje u Pančevu" },
];

export function Gallery() {
  return (
    <section id="galerija" className="bg-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Galerija
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Kancelarija advokata Veselinović
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden group ${
                index === 0 ? "sm:col-span-2 lg:col-span-1 aspect-[4/3]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
              />
              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-primary/30 transition-colors duration-300" />
              {/* Border accent */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-white/60 text-sm mb-6">
            Posetite advokatsku kancelariju Veselinović — Vojvode Živojina Mišića 6, Pančevo
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-300"
          >
            Zakažite posetu
          </a>
        </div>
      </div>
    </section>
  );
}

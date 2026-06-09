import Image from "next/image";

const slike = [
  {
    src: "/Camscanner_1779453959034.jpg",
    alt: "Montažna terasa na stambenoj zgradi — pogled sa strane",
    opis: "Završena montažna terasa",
  },
  {
    src: "/Camscanner_1779454033510.jpg",
    alt: "Montažna terasa na stambenoj zgradi — ugaoni pogled",
    opis: "Montažna terasa — ugaoni detalj",
  },
  {
    src: "/20231023_075357.jpg",
    alt: "Radovi na nadogradnji — skela i fasada u izgradnji",
    opis: "Radovi na nadogradnji u toku",
  },
  {
    src: "/20231023_075410.jpg",
    alt: "Montažni zidovi u fazi ugradnje",
    opis: "Ugradnja montažnih elemenata",
  },
];

export default function Galerija() {
  return (
    <section id="galerija" className="py-20 md:py-28 bg-[#f5f5f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#d97706] font-semibold text-sm uppercase tracking-widest">
            Naši radovi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e44] mt-3 mb-4">
            Galerija
          </h2>
          <p className="text-[#78716c] max-w-xl mx-auto text-lg">
            Izvedeni projekti montažnih terasa, podkrovlja i krovnih konstrukcija.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {slike.map((slika) => (
            <div
              key={slika.src}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-200 shadow-sm"
            >
              <Image
                src={slika.src}
                alt={slika.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e44]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-medium text-sm">{slika.opis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

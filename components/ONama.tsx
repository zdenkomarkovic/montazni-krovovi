import Image from "next/image";

const ekspertiza = [
  "Projektovanje konstrukcija objekata i specijalne konstrukcije",
  "Provera nosivosti i ojačavanje konstrukcija",
  "Izvođenje objekata visokogradnje i mostova",
  "Organizovanje i rad u nadzornoj službi",
  "Projektovanje, proizvodnja i montaža montažnih sistema",
  "Razvoj, usavršavanje i primena oplatnih sistema",
  "Racionalizacija u projektovanju i izgradnji",
  "Vođenje i realizacija investicija",
  "Patentna rešenja sistema u odbrani od poplava",
  "Specijalnost — prednapregnuti beton",
];

export default function ONama() {
  return (
    <section id="o-nama" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#d97706] font-semibold text-sm uppercase tracking-widest">
              O autoru
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e44] mt-3 mb-6">
              Radonjić Stojan
              <span className="block text-xl font-medium text-[#78716c] mt-1">
                dipl.ing.građ. — statičar
              </span>
            </h2>

            <p className="text-[#57534e] leading-relaxed mb-6">
              Diplomirani inženjer građevinarstva sa dugogodišnjim iskustvom u
              projektovanju i izvođenju objekata visokogradnje. Tvorac sistema
              totalne montaže krovnih konstrukcija i podkrovlja koji omogućava
              brže, jeftinije i kvalitetnije izvođenje radova.
            </p>

            <p className="text-[#57534e] leading-relaxed mb-8">
              Ideja o montažno-demontažnim pokrovljima razvila se iz praktičnih
              problema klasičnog načina gradnje — skučeni prostor, dugo vreme
              izvođenja, loši uslovi rada u useljenom objektu. Elementi se
              proizvode u radioničkim uslovima i isporučuju potpuno opremljeni
              i upakovani na lokaciju.
            </p>

            <a
              href="#kontakt"
              className="inline-block bg-[#1a2e44] hover:bg-[#0f1e2e] text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              Kontaktirajte nas
            </a>
          </div>

          <div>
            <div className="bg-[#f5f5f4] rounded-2xl p-6 md:p-8">
              <h3 className="text-[#1a2e44] font-bold text-lg mb-5">
                Oblasti ekspertize
              </h3>
              <ul className="space-y-3">
                {ekspertiza.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-[#57534e]">
                    <span className="w-5 h-5 rounded-full bg-[#d97706]/20 text-[#d97706] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-100 shadow-sm">
            <Image
              src="/Camscanner_1779453959034.jpg"
              alt="Montažna terasa — gotov objekat"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="bg-[#1a2e44] rounded-xl p-8 flex flex-col justify-center">
            <blockquote className="text-gray-200 text-lg leading-relaxed italic mb-6">
              &bdquo;Naklonjen sam većem stepenu prefabrikacije gde bi troškovi bili
              manji a kvalitet veći. Tako se i razvila ideja gradnje
              montažno-demontažnih pokrovlja.&ldquo;
            </blockquote>
            <cite className="text-[#d97706] font-semibold not-italic">
              — Radonjić Stojan, dipl.ing.građ.
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}

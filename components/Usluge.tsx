const usluge = [
  {
    id: "krovne-konstrukcije",
    ikona: "🏠",
    naziv: "Krovne konstrukcije",
    opis: "Kompletna izrada krovnih konstrukcija svih vrsta i nagiba.",
    stavke: [
      "Krovovi sa crepom, tegolom i bitumenskim šindrama",
      "Ravni krovovi i krovne membrane",
      "Limeni pokrivači sa stojećim falcom",
      "Klasične i rešetkaste drvene konstrukcije (LKV)",
      "Kombinovane konstrukcije čelik–drvo",
      "Ventilisani krovovi sa termoizolacijom",
      "Renoviranje ravnih krovova",
    ],
  },
  {
    id: "montazna-podkrovlja",
    ikona: "🔺",
    naziv: "Montažna podkrovlja",
    opis: "Pretvaranje tavanskog prostora u stambeni po sistemu totalne montaže.",
    stavke: [
      "Projektovanje novih podkrovlja u tavanskom prostoru",
      "Izrada montažnih elemenata u radioničkim uslovima",
      "Montaža lakim kranskim rukama na vozilu",
      "Krovni elementi od drvenih talpi 5×20 cm",
      "Kompletna termoizolacija i paropropusna folija",
      "Ugradnja stolarije i instalacija pre montaže",
      "Saradnja sa lokalnom komunom oko dozvola",
    ],
  },
  {
    id: "montazne-terase",
    ikona: "🏢",
    naziv: "Montažne terase",
    opis: "Naknadno dodavanje terasa i balkona na postojeće zgrade.",
    stavke: [
      "Projektovanje novih terasa na postojećim zgradama",
      "Izrada i ugradnja montažnih terasa",
      "Analiza nosivosti postojeće konstrukcije",
      "Izrada u radioničkim uslovima do potpunog završetka",
      "Montaža uz pomoć dizalica",
      "Provera nosivosti na licu mesta",
      "Saradnja sa stambenom zajednicom oko dozvola",
    ],
  },
  {
    id: "inzenjerske-delatnosti",
    ikona: "📐",
    naziv: "Inženjerske delatnosti",
    opis: "Kompletna inženjerska podrška od projekta do primopredaje.",
    stavke: [
      "Arhitektonsko projektovanje i statika konstrukcija",
      "Tehnička kontrola projekata",
      "Nadzor na izvođenju radova",
      "Tehnički pregled i ishođenje upotrebne dozvole",
      "Tehničko vođenje investicije",
      "Nabavka i kontrola materijala",
      "Planiranje i realizacija investicije",
    ],
  },
  {
    id: "gipsarski-radovi",
    ikona: "🔧",
    naziv: "Gipsarski radovi",
    opis: "Kompletna gips-kartonska rešenja za enterijere.",
    stavke: [
      "Zidovi od gips-kartonskih ploča 12,5 mm",
      "Spušteni plafoni",
      "Oblaganje zidova lepljenjem ploča",
      "Obloga vlago-otpornim pločama za kupatila",
      "Skrivači svetla i dekorativni elementi",
      "Opšivanje i obrada špaletni",
      "Ventilacioni kanali",
    ],
  },
];

export default function Usluge() {
  return (
    <section id="usluge" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#d97706] font-semibold text-sm uppercase tracking-widest">
            Šta nudimo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e44] mt-3 mb-4">
            Naše usluge
          </h2>
          <p className="text-[#78716c] max-w-2xl mx-auto text-lg">
            Od projektovanja do ključa — kompletna rešenja za krovne konstrukcije,
            podkrovlja, terase i inženjersku podršku.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usluge.map((u) => (
            <div
              key={u.id}
              className="group border border-gray-200 rounded-xl p-6 hover:border-[#d97706] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">{u.ikona}</div>
              <h3 className="text-[#1a2e44] font-bold text-xl mb-2 group-hover:text-[#d97706] transition-colors">
                {u.naziv}
              </h3>
              <p className="text-[#78716c] text-sm mb-4">{u.opis}</p>
              <ul className="space-y-1.5">
                {u.stavke.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-[#57534e]">
                    <span className="text-[#d97706] mt-0.5 flex-shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const prednosti = [
  {
    icon: "⚡",
    title: "Kraće vreme gradnje",
    opis: "Elementi se finalizuju u fabrici, a na lokaciji se samo montiraju lakim dizalicama. Dramatično skraćuje vreme izvođenja radova.",
  },
  {
    icon: "💰",
    title: "Manja ulaganja",
    opis: "Racionalnija upotreba materijala i skraćeno vreme na gradilištu direktno smanjuju ukupne troškove investicije.",
  },
  {
    icon: "🏗️",
    title: "Viši kvalitet",
    opis: "Radioničkim uslovima postiže se preciznost i kvalitet koji nije moguće postići klasičnim načinom rada na licu mesta.",
  },
  {
    icon: "🛡️",
    title: "Sigurnost i komfor",
    opis: "Minimalni radovi na lokaciji znači manje uznemiravanja stanara useljenog objekta i manji bezbedonosni rizik.",
  },
];

export default function Prednosti() {
  return (
    <section id="prednosti" className="py-20 md:py-28 bg-[#f5f5f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#d97706] font-semibold text-sm uppercase tracking-widest">
            Zašto sistem montaže
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e44] mt-3 mb-4">
            Prednosti totalne montaže
          </h2>
          <p className="text-[#78716c] max-w-2xl mx-auto text-lg">
            Cilj je skratiti vreme izvođenja radova na lokaciji, a povećati obim radova
            u radionici — finalizovati elemente konstrukcije podkrovlja u fabrici.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prednosti.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-[#1a2e44] font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-[#78716c] text-sm leading-relaxed">{p.opis}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-[#1a2e44] rounded-2xl p-8 md:p-12 grid md:grid-cols-3 gap-8 text-center">
          {[
            { broj: "30+", label: "Godina iskustva" },
            { broj: "100%", label: "Montažna finalizacija" },
            { broj: "3×", label: "Brže od klasičnog" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-[#d97706] mb-2">
                {stat.broj}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

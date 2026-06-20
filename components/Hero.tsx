import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/20231023_075410.jpg"
        alt="Montažna konstrukcija"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e44]/40 via-[#1a2e44]/40 to-[#1a2e44]/60" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#d97706]/20 border border-[#d97706]/40 rounded-full px-4 py-1.5 mb-6">
          <span className="text-white text-sm font-medium">Sistem totalne montaže</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Montažni Krovovi
          <span className="block text-[#d97706] mt-2">i Podkrovlja</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Profesionalno projektovanje i izgradnja montažnih krovnih konstrukcija, podkrovlja i
          terasa. Brže, racionalnije i kvalitetnije od klasičnog načina gradnje.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#usluge"
            className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-3.5 rounded font-semibold text-lg transition-colors"
          >
            Pogledajte usluge
          </a>
          <a
            href="#kontakt"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded font-semibold text-lg transition-colors"
          >
            Kontaktirajte nas
          </a>
        </div>
      </div>

      <a
        href="#prednosti"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Skrolujte dole"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}

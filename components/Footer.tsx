import Image from "next/image";

const tekucaGodina = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0f1e2e] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/montazni-krovovi-logo.svg"
                alt="Montažni Krovovi logo"
                width={88}
                height={96}
                className="h-24 w-auto"
              />
              <span className="text-white font-bold text-xl leading-tight">
                Montažni<br />Krovovi
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sistem totalne montaže krovnih konstrukcija, podkrovlja i terasa.
              Brže, racionalnije, kvalitetnije.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Usluge
            </h4>
            <ul className="space-y-2">
              {[
                "Krovne konstrukcije",
                "Montažna podkrovlja",
                "Montažne terase",
                "Inženjerske delatnosti",
                "Gipsarski radovi",
              ].map((u) => (
                <li key={u}>
                  <a
                    href="#usluge"
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    {u}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigacija
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#", label: "Početna" },
                { href: "#prednosti", label: "Prednosti" },
                { href: "#galerija", label: "Galerija" },
                { href: "#o-nama", label: "O nama" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <a
                href="tel:+381612795007"
                className="flex items-center gap-2 text-gray-500 hover:text-[#d97706] text-sm transition-colors"
              >
                <span>📞</span> +381 61 279 5007
              </a>
              <a
                href="mailto:stole034@gmail.com"
                className="flex items-center gap-2 text-gray-500 hover:text-[#d97706] text-sm transition-colors"
              >
                <span>✉️</span> stole034@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {tekucaGodina} Montažni Krovovi. Radonjić Stojan, dipl.ing.građ.
          </p>
          <p className="text-gray-600 text-sm">
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, type FormEvent } from "react";

export default function Kontakt() {
  const [poslato, setPoslato] = useState(false);
  const [greska, setGreska] = useState("");
  const [saljem, setSaljem] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGreska("");
    setSaljem(true);

    const forma = e.currentTarget;
    const podaci = {
      ime: (forma.elements.namedItem("ime") as HTMLInputElement).value,
      telefon: (forma.elements.namedItem("telefon") as HTMLInputElement).value,
      email: (forma.elements.namedItem("email") as HTMLInputElement).value,
      poruka: (forma.elements.namedItem("poruka") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(podaci),
      });

      if (!res.ok) {
        const data = await res.json();
        setGreska(data.greska ?? "Greška pri slanju. Pokušajte ponovo.");
      } else {
        setPoslato(true);
      }
    } catch {
      setGreska("Greška pri slanju. Proverite internet vezu i pokušajte ponovo.");
    } finally {
      setSaljem(false);
    }
  }

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-[#1a2e44]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#d97706] font-semibold text-sm uppercase tracking-widest">
            Stupite u kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Zatražite ponudu
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Opišite vaš projekat i kontaktiraćemo vas sa besplatnom procenom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <a
              href="tel:+381612795007"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#d97706]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#d97706] text-lg">📞</span>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Telefon</p>
                <p className="text-gray-400 text-sm group-hover:text-[#d97706] transition-colors">
                  +381 61 279 5007
                </p>
              </div>
            </a>

            <a
              href="mailto:stole034@gmail.com"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#d97706]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#d97706] text-lg">✉️</span>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Email</p>
                <p className="text-gray-400 text-sm group-hover:text-[#d97706] transition-colors">
                  stole034@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#d97706]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#d97706] text-lg">👷</span>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Stručnjak</p>
                <p className="text-gray-400 text-sm">Radonjić Stojan, dipl.ing.građ.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-gray-300 text-sm leading-relaxed">
                Pružamo kompletnu uslugu — od analize vaše situacije i
                projektovanja, kroz produkciju montažnih elemenata u fabrici,
                do montaže i ishođenja dozvola. Jedan kontakt, kompletan projekat.
              </p>
            </div>
          </div>

          <div>
            {poslato ? (
              <div className="bg-[#d97706]/10 border border-[#d97706]/30 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">Poruka primljena!</h3>
                <p className="text-gray-300">
                  Hvala na interesovanju. Kontaktiraćemo vas u najkraćem roku.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1.5">
                      Ime i prezime
                    </label>
                    <input
                      name="ime"
                      type="text"
                      required
                      placeholder="Vaše ime"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d97706] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1.5">
                      Telefon
                    </label>
                    <input
                      name="telefon"
                      type="tel"
                      placeholder="+381 ..."
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d97706] transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="vasa@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d97706] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">
                    Opis projekta
                  </label>
                  <textarea
                    name="poruka"
                    rows={5}
                    required
                    placeholder="Opišite vaš projekat, lokaciju, dimenzije, specifične zahteve..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d97706] transition-colors text-sm resize-none"
                  />
                </div>

                {greska && (
                  <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    {greska}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={saljem}
                  className="w-full bg-[#d97706] hover:bg-[#b45309] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-semibold transition-colors text-sm"
                >
                  {saljem ? "Slanje..." : "Pošaljite upit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

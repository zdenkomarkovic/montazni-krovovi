import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://montazni-krovovi.rs"),
  title: {
    default: "Montažni Krovovi | Sistem Totalne Montaže",
    template: "%s | Montažni Krovovi",
  },
  description:
    "Stručno projektovanje i izgradnja montažnih krovova, podkrovlja i terasa. Sistem totalne montaže — brže, racionalnije, kvalitetnije. Radonjić Stojan, dipl.ing.građ.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Montažni Krovovi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

const DOMAIN = "https://montaznikrovovi.rs";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Montažni Krovovi | Sistem Totalne Montaže",
    template: "%s | Montažni Krovovi",
  },
  description:
    "Stručno projektovanje i izgradnja montažnih krovova, podkrovlja i terasa. Sistem totalne montaže — brže, racionalnije, kvalitetnije. Radonjić Stojan, dipl.ing.građ.",
  keywords: [
    "montažni krovovi",
    "krovne konstrukcije",
    "montažno podkrovlje",
    "montažna terasa",
    "izgradnja krova",
    "krovni sistem",
    "gipsarski radovi",
    "inženjerske delatnosti",
    "Radonjić Stojan",
    "Srbija",
  ],
  authors: [{ name: "Radonjić Stojan, dipl.ing.građ." }],
  creator: "Radonjić Stojan",
  publisher: "Montažni Krovovi",
  alternates: {
    canonical: DOMAIN,
  },
  icons: {
    icon: "/montazni-krovovi-logo.svg",
    shortcut: "/montazni-krovovi-logo.svg",
    apple: "/montazni-krovovi-logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: DOMAIN,
    siteName: "Montažni Krovovi",
    title: "Montažni Krovovi | Sistem Totalne Montaže",
    description:
      "Stručno projektovanje i izgradnja montažnih krovova, podkrovlja i terasa. Sistem totalne montaže — brže, racionalnije, kvalitetnije.",
    images: [
      {
        url: "/20231023_075410.jpg",
        width: 1200,
        height: 630,
        alt: "Montažni Krovovi - Sistem Totalne Montaže",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montažni Krovovi | Sistem Totalne Montaže",
    description:
      "Stručno projektovanje i izgradnja montažnih krovova, podkrovlja i terasa. Brže, racionalnije, kvalitetnije.",
    images: ["/20231023_075410.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

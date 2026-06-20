import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Prednosti from "@/components/Prednosti";
import Usluge from "@/components/Usluge";
import Galerija from "@/components/Galerija";
import ONama from "@/components/ONama";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Montažni Krovovi - Radonjić Stojan",
  url: "https://montaznikrovovi.rs",
  logo: "https://montaznikrovovi.rs/montazni-krovovi-logo.svg",
  image: "https://montaznikrovovi.rs/20231023_075410.jpg",
  description:
    "Stručno projektovanje i izgradnja montažnih krovova, podkrovlja i terasa. Sistem totalne montaže — brže, racionalnije, kvalitetnije.",
  telephone: "+381612795007",
  email: "stole034@gmail.com",
  founder: {
    "@type": "Person",
    name: "Radonjić Stojan",
    jobTitle: "dipl.ing.građ.",
  },
  areaServed: {
    "@type": "Country",
    name: "Serbia",
  },
  serviceType: [
    "Montažne krovne konstrukcije",
    "Montažna podkrovlja",
    "Montažne terase",
    "Inženjerske delatnosti",
    "Gipsarski radovi",
  ],
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Header />
      <main>
        <Hero />
        <Prednosti />
        <Usluge />
        <Galerija />
        <ONama />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}

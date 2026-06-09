import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Prednosti from "@/components/Prednosti";
import Usluge from "@/components/Usluge";
import Galerija from "@/components/Galerija";
import ONama from "@/components/ONama";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
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

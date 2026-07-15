import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import IntroStatement from "@/components/sections/IntroStatement";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import BrandTicker from "@/components/sections/BrandTicker";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="about">
          <IntroStatement />
        </section>
        <section id="services">
          <Services />
        </section>
        <Testimonials />
        <BrandTicker />
      </main>
      <Footer />
    </>
  );
}

import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Investment from "@/components/Investment";
import Sponsor from "@/components/Sponsor";
import Event from "@/components/Event";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jikofoot - Révélez les Talents du Football Africain</title>
        <meta
          name="description"
          content="Jikofoot connecte les jeunes footballeurs africains talentueux avec les sponsors, clubs et recruteurs du monde entier. Investissez dans l'avenir du football."
        />
        <meta name="keywords" content="football africain, talents, scouting, investissement, parrainage, sponsor, Kinshasa, RDC" />
        <link rel="canonical" href="https://www.jikofoot.pro" />
      </Helmet>
      
      <main>
        <Navbar />
        <Hero />
        <About />
        <Investment />
        <Sponsor />
        <Event />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;

import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FinalPositioning from "@/components/FinalPositioning";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CyberInspect - Plataforma para Service Providers de Cibersegurança</title>
        <meta 
          name="description" 
          content="A plataforma que capacita Service Providers a escalar a identificação de riscos de cibersegurança. Solução integrada, custos competitivos e geração de leads qualificadas." 
        />
        <meta name="keywords" content="service providers, cibersegurança, plataforma, leads qualificadas, avaliação de riscos" />
        <link rel="canonical" href="https://cyberinspect.pt" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CyberInspect - Plataforma para Service Providers" />
        <meta property="og:description" content="Capacite o seu negócio de cibersegurança com uma plataforma integrada, escalável e geradora de valor." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CyberInspect - Plataforma para Service Providers" />
        <meta name="twitter:description" content="Capacite o seu negócio de cibersegurança com uma plataforma integrada, escalável e geradora de valor." />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Benefits />
        <FinalPositioning />
        <FinalCTA />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  );
};

export default Index;

import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Educational from "@/components/Educational";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CyberInspect - Proteja a sua empresa. Teste o seu site gratuitamente.</title>
        <meta 
          name="description" 
          content="Descubra vulnerabilidades digitais em minutos e receba um diagnóstico inicial gratuito. Marca do Grupo NOS com certificação ISO 27001 & RGPD." 
        />
        <meta name="keywords" content="cibersegurança, teste de segurança, vulnerabilidades, diagnóstico gratuito, ISO 27001, RGPD" />
        <link rel="canonical" href="https://cyberinspect.pt" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CyberInspect - Proteja a sua empresa" />
        <meta property="og:description" content="Descubra vulnerabilidades digitais em minutos. Diagnóstico gratuito." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CyberInspect - Proteja a sua empresa" />
        <meta name="twitter:description" content="Descubra vulnerabilidades digitais em minutos. Diagnóstico gratuito." />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <SocialProof />
        <Educational />
        <FinalCTA />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  );
};

export default Index;

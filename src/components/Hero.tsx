import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Marca do Grupo NOS • ISO 27001 & RGPD</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Proteja a sua empresa. <span className="bg-gradient-primary bg-clip-text text-transparent">Teste o seu site gratuitamente.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Descubra vulnerabilidades digitais em minutos e receba um diagnóstico inicial gratuito.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group">
                Fazer Diagnóstico Gratuito
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              
              <Button variant="outline-light" size="xl">
                Saiba Mais
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Dados 100% protegidos</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Resultado em 24h</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={heroImage} 
                alt="Interface de análise de segurança digital" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card shadow-card rounded-xl px-6 py-4 border border-border">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+500</p>
                <p className="text-sm text-muted-foreground">Diagnósticos realizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

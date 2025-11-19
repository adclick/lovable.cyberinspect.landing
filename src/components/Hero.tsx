import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/remote-work.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neonCyan/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-background/50"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-glass backdrop-blur-xl text-neonOrange px-5 py-2.5 rounded-full text-sm font-medium border border-neonOrange/20 shadow-glass">
              <Shield className="w-4 h-4" />
              <span>Solução de Referência para Service Providers</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
                A Plataforma que Capacita Service Providers a <span className="bg-gradient-orange bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,140,0,0.5)] animate-pulse">Escalar a Identificação de Riscos de Cibersegurança</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl leading-relaxed">
                Aumente margens, acelere entregas e responda à procura crescente de testes de cibersegurança.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group" asChild>
                <a href="#form">
                  Tornar-se Parceiro
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
              
              <Button variant="outline-light" size="xl" asChild>
                <a href="#beneficios">Saiba Mais</a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-muted-foreground">Custos Competitivos</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-muted-foreground">Leads Qualificadas</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-muted-foreground">Escalável e Produtivo</span>
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
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-glass backdrop-blur-2xl shadow-neon rounded-2xl px-8 py-5 border border-neonCyan/30">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent tracking-tight">Parceiros</p>
                <p className="text-sm text-muted-foreground/80 font-medium">Em todo o país</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

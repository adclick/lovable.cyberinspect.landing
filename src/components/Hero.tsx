import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/remote-work.png";
const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden pt-20">
      
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] text-foreground lg:text-5xl">
                A Plataforma que capacita Parceiros a <span className="bg-gradient-orange bg-clip-text text-transparent">escalar a identificação de riscos de cibersegurança</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl leading-relaxed">
                Aumente margens, acelere entregas e responda à procura crescente de testes de cibersegurança.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" className="btn-cta-white group" asChild>
                <a href="#form">
                  Tornar-se Parceiro
                  <span className="arrow ml-2 group-hover:translate-x-1 transition-transform !text-accent">→</span>
                </a>
              </Button>
              
              <Button variant="outline-light" size="xl" asChild>
                <a href="#beneficios">Saiba Mais</a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-gradient-cta flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-muted-foreground">Escalável e Produtivo</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-gradient-cta flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-muted-foreground">Leads Qualificadas</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-gradient-cta flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-muted-foreground">Custos Competitivos</span>
            </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img alt="Interface de análise de segurança digital" className="w-full h-auto" src="/lovable-uploads/3b3c0b19-2bf2-409f-b59a-27371d528799.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
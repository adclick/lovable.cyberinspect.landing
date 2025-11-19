import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Layers } from "lucide-react";

const FinalPositioning = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              A CyberInspect é a Solução de Referência para <span className="bg-gradient-accent bg-clip-text text-transparent">Service Providers</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Leve a identificação de riscos de cibersegurança ao maior número de organizações, reduzindo a exposição dos seus clientes e ampliando o seu próprio portfólio de serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-neon transition-all duration-300 hover:border-neonCyan/30">
              <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center mx-auto mb-4 shadow-neon">
                <Layers className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Simplicidade</h3>
              <p className="text-muted-foreground">
                Interface intuitiva e processos otimizados para máxima eficiência operacional
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-neon transition-all duration-300 hover:border-neonCyan/30">
              <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center mx-auto mb-4 shadow-neon">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Robustez Técnica</h3>
              <p className="text-muted-foreground">
                Plataforma sólida com metodologias comprovadas e tecnologias de ponta
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-neon transition-all duration-300 hover:border-neonCyan/30">
              <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center mx-auto mb-4 shadow-neon">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Valor Adicional</h3>
              <p className="text-muted-foreground">
                Transforme avaliações de risco em novos fluxos de receita consistentes
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20 shadow-card">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Explore uma Oportunidade de Mercado em Rápido Crescimento
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Com uma combinação única de simplicidade, robustez técnica e geração de valor adicional, a CyberInspect permite aos Parceiros explorar uma oportunidade de mercado em rápido crescimento e transformar avaliações de risco em novos fluxos de receita.
              </p>
              <Button variant="cta" size="xl" className="group" asChild>
                <a href="#form">
                  Começar Agora
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalPositioning;

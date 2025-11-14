import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, FileText, CreditCard } from "lucide-react";

const features = [
  { icon: CreditCard, text: "Sem cartão de crédito" },
  { icon: Clock, text: "Resultado em 24h" },
  { icon: FileText, text: "Relatório simples e acionável" },
];

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Oferta válida por tempo limitado
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Quero saber mais
              </h2>
              <p className="text-lg text-muted-foreground">
                Inclui um teste automático de intrusão e relatório com recomendações.
              </p>
            </div>

            {/* Lead Form */}
            <form id="form" className="max-w-2xl mx-auto mb-8">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <Input placeholder="Nome" className="h-12" />
                <Input type="email" placeholder="E-mail" className="h-12" />
                <Input placeholder="Empresa" className="h-12" />
              </div>
              <Button variant="cta" size="xl" className="w-full">
                Pedir Diagnóstico Gratuito Agora
              </Button>
            </form>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-xl font-semibold mb-2">
              Cibersegurança acessível, simples e ao alcance de todos.
            </p>
            <p className="text-muted-foreground">
              Descubra hoje as vulnerabilidades digitais da sua empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

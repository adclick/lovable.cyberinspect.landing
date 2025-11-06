import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Settings, Users, Lock } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Diagnóstico Personalizado",
    description: "Identifique vulnerabilidades antes que sejam exploradas.",
  },
  {
    icon: Settings,
    title: "Plataforma Simples",
    description: "Todos os testes num só local, sem complexidade.",
  },
  {
    icon: Users,
    title: "Apoio Especializado",
    description: "Consultores que o acompanham em cada passo.",
  },
  {
    icon: Lock,
    title: "Conformidade Garantida",
    description: "Certificação ISO 27001 e RGPD.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Porquê escolher a <span className="bg-gradient-primary bg-clip-text text-transparent">CyberInspect?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Proteja o seu negócio com a solução mais completa do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            Descubra o seu nível de risco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

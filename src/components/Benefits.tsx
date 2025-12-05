import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layers, TrendingUp, Target, Zap, MessageSquare, Users } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Agregação de serviços relevantes",
    description: "A CyberInspect reúne, numa única plataforma, os serviços essenciais para avaliação de riscos de cibersegurança, permitindo uma oferta completa, tecnicamente sólida e de fácil operacionalização.",
  },
  {
    icon: Zap,
    title: "Formato simples, produtivo e escalável",
    description: "A experiência de utilização é pensada para maximizar produtividade, permitindo aos Parceiros abranger mais clientes sem aumentar equipas ou processos.",
  },
  {
    icon: MessageSquare,
    title: "Suporte de comunicação e market intelligence",
    description: "A CyberInspect disponibiliza insights acionáveis, materiais de comunicação e análises que reforçam o posicionamento comercial dos Parceiros.",
  },
  {
    icon: Users,
    title: "Listagens de Prospects Qualificados",
    description: "Acesso a listas de potenciais clientes, incluindo a base NOS, para acelerar a prospeção e otimizar esforços comerciais.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Proposta de Valor para Parceiros
          </h2>
          <p className="text-lg text-muted-foreground/90 leading-relaxed">
            Tudo o que precisa para escalar o seu negócio de cibersegurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group p-8 hover:shadow-neon transition-all duration-500 hover:-translate-y-2 border-border hover:border-neonMagenta/40 bg-gradient-glass backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-cta flex items-center justify-center mb-6 shadow-cta group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-muted-foreground/90 leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#form">Tornar-se Parceiro</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

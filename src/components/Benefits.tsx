import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layers, TrendingUp, DollarSign, Target, Zap, MessageSquare, Users } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Agregação de Serviços Relevantes",
    description: "A CyberInspect reúne, numa única plataforma, os serviços essenciais para avaliação de riscos de cibersegurança, permitindo uma oferta completa, tecnicamente sólida e de fácil operacionalização.",
  },
  {
    icon: TrendingUp,
    title: "Evolução Contínua da Oferta",
    description: "A plataforma cresce contigo. Integra novas capacidades, metodologias e tecnologias para que os Parceiros se mantenham sempre à frente das necessidades do mercado.",
  },
  {
    icon: DollarSign,
    title: "Custos Mais Competitivos e Autonomia de Pricing",
    description: "Ao consolidar fornecedores e serviços num único ecossistema, a CyberInspect permite reduzir custos face à compra direta e oferece liberdade total para definir margens e modelos comerciais.",
  },
  {
    icon: Target,
    title: "Geração de Leads Altamente Qualificadas",
    description: "Os resultados das avaliações originam leads de remediação extremamente qualificadas, facilitando a criação de novas oportunidades em serviços complementares.",
  },
  {
    icon: Zap,
    title: "Formato Simples, Produtivo e Escalável",
    description: "A experiência de utilização é pensada para maximizar produtividade, permitindo aos Service Providers abranger mais clientes sem aumentar equipas ou processos.",
  },
  {
    icon: MessageSquare,
    title: "Suporte de Comunicação e Market Intelligence",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Proposta de Valor para <span className="text-secondary">Service Providers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo o que precisa para escalar o seu negócio de cibersegurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-neon transition-all duration-300 hover:-translate-y-1 border-border hover:border-neonCyan/30"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center mb-4 shadow-neon">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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

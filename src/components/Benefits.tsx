import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layers, TrendingUp, Target, Zap, MessageSquare, Users } from "lucide-react";
const benefits = [{
  icon: Layers,
  title: "Agregação de serviços essenciais",
  description: "Acesso, numa única plataforma, aos serviços essenciais para avaliar riscos de cibersegurança, de forma simples e com elevada qualidade técnica, aumentando a produtividade e a escala dos Parceiros sem necessidade de reforçar equipas."
}, {
  icon: Zap,
  title: "Valores mais competitivos",
  description: "Maximizar a produtividade com uma experiência de utilização que permite aos Parceiros abranger mais clientes sem aumentar equipas ou processos."
}, {
  icon: MessageSquare,
  title: "Suporte de comunicação e market intelligence",
  description: "Disponibilização de insights acionáveis, materiais de comunicação e análises apoiam os Parceiros na comunicação eficaz com os seus clientes."
}, {
  icon: Users,
  title: "Geração de novas oportunidades de negócio",
  description: "Oportunidade para expandir a oferta de cibersegurança e gerar novas oportunidades comerciais assentes em serviços de remediação."
}];
const Benefits = () => {
  return <section id="beneficios" className="pt-24 pb-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">
            A solução de referência para Parceiros

          </h2>
          <p className="text-lg text-muted-foreground/90 leading-relaxed">Acesso, numa única plataforma, aos serviços essenciais para avaliar riscos de cibersegurança. É uma solução produtiva e escalável, que permite aos Parceiros apoiar mais clientes sem aumentar equipas ou processos. 
Tudo o que precisa para escalar o seu negocio no domínio da cibersegurança.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return <Card key={index} className="group p-8 hover:shadow-neon transition-all duration-500 hover:-translate-y-2 border-border hover:border-neonMagenta/40 bg-gradient-glass backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-logo flex items-center justify-center mb-6 shadow-cta group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-muted-foreground/90 leading-relaxed">{benefit.description}</p>
              </Card>;
        })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="bg-white hover:bg-white/90" asChild>
            <a href="#form">
              <span className="bg-gradient-logo bg-clip-text text-transparent font-semibold">Tornar-se Parceiro</span>
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Benefits;
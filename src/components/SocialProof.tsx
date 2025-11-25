import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Pedro Caetano",
    role: "Executive Director",
    company: "Bridge351",
    content: "Saber que nos colocámos à prova com a Cyberinspect foi ter a certeza de que estávamos a colocar a segurança do nosso negócio nas mãos certas, com uma visão 360º na identificação de riscos. Tudo de forma simples e intuitiva, mas, ao mesmo tempo, muito detalhada e com uma indicação clara do caminho a seguir.",
    logo: "bridge351",
  },
  {
    name: "Luís Gerardi",
    role: "CEO",
    company: "ErgosTek",
    content: "Uma plataforma excepcional que automatiza análises de cibersegurança, otimizando processos e fornecendo relatórios detalhados que facilitam a resolução de problemas identificados.",
    logo: "ergostek",
  },
  {
    name: "Rodrigo Trépa",
    role: "Head of Product and Marketing",
    company: "Wegho",
    content: "A plataforma de testes de cibersegurança da CyberInspect superou as nossas expectativas! Intuitiva, robusta, e com um suporte e follow-up técnico essencial. Proporcionou-nos insights valiosos para garantir uma proteção adequada dos nossos sistemas. Uma ferramenta que recomendamos para empresas que valorizam segurança digital e precisam de um apoio profissional nesta matéria. Parabéns!",
    logo: "wegho",
  },
];

const SocialProof = () => {
  return (
    <section id="testemunhos" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A opinião de quem confia em nós
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-muted-foreground">{testimonial.logo}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.company}, {testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">({testimonial.role})</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
            </Card>
          ))}
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-muted"></div>
          <div className="w-2 h-2 rounded-full bg-muted"></div>
          <div className="w-2 h-2 rounded-full bg-muted"></div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

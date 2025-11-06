import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "CEO",
    company: "TechStart Lisboa",
    content: "A CyberInspect ajudou-nos a identificar vulnerabilidades críticas que desconhecíamos. O apoio da equipa foi excepcional.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Diretora de TI",
    company: "RetailPro",
    content: "Plataforma intuitiva e relatórios muito claros. Essencial para qualquer PME que leve a segurança a sério.",
    rating: 5,
  },
  {
    name: "Pedro Costa",
    role: "Founder",
    company: "DigitalAgency",
    content: "O diagnóstico gratuito foi revelador. Investir em cibersegurança deixou de ser uma opção, é uma necessidade.",
    rating: 5,
  },
];

const partners = [
  { name: "NOS", color: "text-primary" },
  { name: "PME Líder", color: "text-muted-foreground" },
  { name: "ISO 27001", color: "text-success" },
];

const SocialProof = () => {
  return (
    <section id="testemunhos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Empresas que já confiam na CyberInspect
          </h2>
          <p className="text-lg text-muted-foreground">
            Junte-se a centenas de empresas que protegem o seu negócio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-accent/20 mb-3" />
              
              <p className="text-muted-foreground mb-4 italic">{testimonial.content}</p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className={`text-2xl font-bold ${partner.color}`}>
              {partner.name}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-success/10 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <p className="text-success font-semibold">
              +500 diagnósticos realizados desde junho de 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

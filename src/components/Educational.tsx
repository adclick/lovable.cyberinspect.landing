import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, Shield } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: "43%",
    label: "dos ciberataques têm como alvo PME",
    color: "text-destructive",
  },
  {
    icon: TrendingUp,
    value: "+300%",
    label: "aumento de ataques nos últimos 3 anos",
    color: "text-accent",
  },
  {
    icon: Shield,
    value: "€200k",
    label: "custo médio de um ciberataque",
    color: "text-primary",
  },
];

const Educational = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Cibersegurança não é um luxo. <span className="bg-gradient-accent bg-clip-text text-transparent">É uma necessidade.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Os números falam por si — testar é o primeiro passo para proteger o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <p className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-card rounded-2xl border border-border shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proteja o seu negócio hoje</h3>
                <p className="text-muted-foreground">
                  Não espere ser vítima de um ataque. A prevenção é sempre mais barata que a recuperação. 
                  Com o diagnóstico gratuito da CyberInspect, descobre vulnerabilidades antes que sejam exploradas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;

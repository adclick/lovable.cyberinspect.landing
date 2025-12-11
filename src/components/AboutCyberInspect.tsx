import { Shield } from "lucide-react";

const AboutCyberInspect = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            O que é a CyberInspect?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A CyberInspect é uma plataforma de testes de cibersegurança, lançada pela NOS em junho de 2025, orientada para prestadores de serviços de IT e cibersegurança, que permite identificar riscos em ativos digitais de empresas e organizações, contribuindo para reduzir a sua exposição a ciberameaças.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCyberInspect;

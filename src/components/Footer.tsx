import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8" />
              <span className="text-2xl font-bold">CyberInspect</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Uma marca NOS
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Protegendo empresas portuguesas desde 2025
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Equipa</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Diagnóstico Gratuito</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Testes de Penetração</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Consultoria</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Formação</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Conformidade RGPD</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 CyberInspect. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <span>ISO 27001 Certificado</span>
              <span>•</span>
              <span>RGPD Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

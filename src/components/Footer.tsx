import { Shield } from "lucide-react";
import logo from "@/assets/cyberinspect-logo.png";

const Footer = () => {
  return (
    <footer id="contactos" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={logo} 
              alt="CyberInspect Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm mb-4">
              Uma marca NOS
            </p>
            <p className="text-muted-foreground/60 text-sm">
              Protegendo empresas portuguesas desde 2025
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Equipa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Diagnóstico Gratuito</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Testes de Penetração</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Consultoria</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Formação</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Conformidade RGPD</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground/60">
              © 2025 CyberInspect. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground/60">
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

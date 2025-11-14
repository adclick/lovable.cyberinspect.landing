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
              <li>Sobre Nós</li>
              <li>Equipa</li>
              <li>Carreiras</li>
              <li>Contactos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Diagnóstico Gratuito</li>
              <li>Testes de Penetração</li>
              <li>Consultoria</li>
              <li>Formação</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Política de Privacidade</li>
              <li>Termos e Condições</li>
              <li>Conformidade RGPD</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground/60">
              © 2025 CyberInspect. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import logo from "@/assets/cyberinspect-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="CyberInspect Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#testemunhos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Testemunhos
            </a>
            <a href="#contactos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contactos
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="cta" size="default">
            Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

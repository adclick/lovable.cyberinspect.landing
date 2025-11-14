import { Shield } from "lucide-react";
import logo from "@/assets/cyberinspect-logo.png";

const Footer = () => {
  return (
    <footer id="contactos" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <img 
            src={logo} 
            alt="CyberInspect Logo" 
            className="h-10 w-auto mb-4"
          />
          <p className="text-muted-foreground text-sm">
            Uma marca NOS
          </p>
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

import { Shield } from "lucide-react";
import logo from "@/assets/cyberinspect-logo.png";
import footerLogos from "@/assets/footer-logos.png";
import iso27001Badge from "@/assets/iso-27001-badge.png";
import rgpdBadge from "@/assets/rgpd-badge.png";
const Footer = () => {
  return <footer id="contactos" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <img src={logo} alt="CyberInspect Logo" className="h-10 w-auto mb-4" />
          
        </div>

        {/* Certification Badges */}
        

        {/* Client Direct Service */}
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Links */}
        <div className="flex justify-center items-center mb-8">
          <a href="https://cyberinspect.com/cyberinspect/TermsAndConditions" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Termos e Condições
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p className="text-sm text-muted-foreground/60">
              © 2025 CyberInspect. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
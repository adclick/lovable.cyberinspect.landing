import { Button } from "@/components/ui/button";
import logo from "@/assets/cyberinspect-logo.png";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-card/95 to-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img alt="CyberInspect Logo" className="h-12 w-auto" src="/lovable-uploads/9a576a24-56d5-4b6b-92b9-68eca51403e9.png" />
          </div>

          {/* CTA Button */}
          <Button variant="cta" size="default" asChild>
            
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;
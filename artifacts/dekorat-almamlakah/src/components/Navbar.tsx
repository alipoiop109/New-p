import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary tracking-tight">
              ديكورات المملكة
            </a>
          </div>
          
          <div className="hidden md:block">
            <nav className="flex items-center gap-8">
              <button onClick={() => scrollTo("home")} className="text-foreground hover:text-primary transition-colors text-sm font-medium">الرئيسية</button>
              <button onClick={() => scrollTo("about")} className="text-foreground hover:text-primary transition-colors text-sm font-medium">من نحن</button>
              <button onClick={() => scrollTo("gallery")} className="text-foreground hover:text-primary transition-colors text-sm font-medium">أعمالنا</button>
              <button onClick={() => scrollTo("contact")} className="text-foreground hover:text-primary transition-colors text-sm font-medium">تواصل معنا</button>
              <Button onClick={() => scrollTo("contact")} size="lg" className="rounded-full px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                احجز موعدك
              </Button>
            </nav>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-start gap-4 mt-4">
            <button onClick={() => scrollTo("home")} className="text-foreground hover:text-primary w-full text-right py-2 font-medium">الرئيسية</button>
            <button onClick={() => scrollTo("about")} className="text-foreground hover:text-primary w-full text-right py-2 font-medium">من نحن</button>
            <button onClick={() => scrollTo("gallery")} className="text-foreground hover:text-primary w-full text-right py-2 font-medium">أعمالنا</button>
            <button onClick={() => scrollTo("contact")} className="text-foreground hover:text-primary w-full text-right py-2 font-medium">تواصل معنا</button>
            <Button onClick={() => scrollTo("contact")} className="w-full mt-4 rounded-full bg-primary text-primary-foreground font-semibold">
              احجز موعدك
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

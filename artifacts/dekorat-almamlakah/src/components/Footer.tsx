import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-right">
            <a href="#" className="text-3xl font-bold text-primary tracking-tight block mb-4">
              ديكورات المملكة
            </a>
            <p className="text-muted-foreground max-w-sm">
              نصنع الفخامة في كل زاوية. خيارك الأمثل للتصميم الداخلي والتنفيذ الاحترافي في جدة وضواحيها.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/ksa__decor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@ksa_0_decor?_r=1&_t=ZS-96bEjxMxRHZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <SiTiktok size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm font-medium">
            جميع الحقوق محفوظة لديكورات المملكة © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

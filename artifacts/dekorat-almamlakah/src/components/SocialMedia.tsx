import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function SocialMedia() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-foreground">تابعنا على منصات التواصل الاجتماعي</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف أحدث أعمالنا وتصاميمنا، وكن على اطلاع دائم بكل جديد في عالم الديكور الداخلي.
          </p>
          
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="https://www.instagram.com/ksa__decor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a 
              href="https://www.tiktok.com/@ksa_0_decor?_r=1&_t=ZS-96bEjxMxRHZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label="TikTok"
            >
              <SiTiktok size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

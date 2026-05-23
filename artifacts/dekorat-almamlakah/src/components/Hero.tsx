import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-card/40 z-0"></div>
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[200px] z-0 -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-tr-[100px] z-0"></div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            نصمم أحلامك، <br />
            <span className="text-primary">ننفذ رؤيتك</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            شركة رائدة في التصميم الداخلي الفاخر والتنفيذ الاحترافي. نصنع مساحات تعكس ذوقك الرفيع في جدة وضواحيها.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              onClick={() => scrollTo("contact")} 
              size="lg" 
              className="w-full sm:w-auto px-10 py-6 text-lg rounded-full font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              احجز موعداً
            </Button>
            <Button 
              onClick={() => scrollTo("gallery")} 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-10 py-6 text-lg rounded-full font-bold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary text-foreground transition-all"
            >
              شاهد أعمالنا
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

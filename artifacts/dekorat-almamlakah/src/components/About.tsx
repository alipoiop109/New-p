import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide">
              من نحن
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              نحن نصنع الفخامة في كل زاوية
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                ديكورات المملكة هي شركة سعودية متخصصة في التصميم الداخلي الفاخر وتنفيذ المشاريع السكنية والتجارية بمستوى عالٍ من الاحترافية والجودة.
              </p>
              <p>
                يقع مقرنا في مدينة جدة، ونقدم خدماتنا في ضواحيها، حيث نجمع بين الأصالة العربية والحداثة العالمية لنخلق مساحات تعبر عن شخصية عملائنا وتلبي احتياجاتهم الوظيفية والجمالية.
              </p>
              <p>
                نفخر بفريقنا من المصممين والمهندسين المبدعين الذين يحرصون على الاهتمام بأدق التفاصيل في كل مرحلة من مراحل المشروع، بدءاً من الفكرة وحتى التسليم.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-secondary/30 relative">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <img 
                  src="/gallery/majlis.png" 
                  alt="تصميم داخلي فاخر من ديكورات المملكة" 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-[-1]"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { PenTool, Sofa, Palette, Hammer, Lightbulb, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "ديكور داخلي",
    description: "تصميم مساحات داخلية تعكس شخصيتك بأسلوب عصري وأنيق.",
    icon: PenTool,
  },
  {
    id: 2,
    title: "تصميم الأثاث",
    description: "تصميم وتصنيع أثاث مخصص يتناسب مع مساحاتك وذوقك الخاص.",
    icon: Sofa,
  },
  {
    id: 3,
    title: "اختيار الألوان",
    description: "استشارات احترافية لاختيار تناسق الألوان والمواد المثالية.",
    icon: Palette,
  },
  {
    id: 4,
    title: "تنفيذ المشاريع",
    description: "إشراف هندسي متكامل وتنفيذ دقيق يضمن لك الجودة العالية.",
    icon: Hammer,
  },
  {
    id: 5,
    title: "الاستشارات",
    description: "جلسات استشارية مع نخبة من المهندسين لمناقشة أفكارك وتطويرها.",
    icon: Lightbulb,
  },
  {
    id: 6,
    title: "تصميم الإضاءة",
    description: "توزيع إضاءة مدروس لإبراز جماليات المكان وخلق جو مريح.",
    icon: Zap,
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide">
            خدماتنا
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            حلول متكاملة للتصميم الداخلي
          </h2>
          <p className="text-lg text-muted-foreground">
            نقدم مجموعة واسعة من الخدمات التي تغطي كافة احتياجات مشروعك من الفكرة المبدئية إلى التسليم النهائي.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full bg-background border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

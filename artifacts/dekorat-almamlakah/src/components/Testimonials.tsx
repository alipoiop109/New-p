import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "م. خالد الغامدي",
    role: "مالك فيلا",
    content: "تجربة رائعة مع ديكورات المملكة. اهتمام أدق التفاصيل واحترافية عالية في التنفيذ. النتيجة النهائية فاقت توقعاتي بكثير.",
  },
  {
    id: 2,
    name: "سارة الجدعاني",
    role: "سيدة أعمال",
    content: "صمموا لي مكتب عمل يبعث على الراحة والإنتاجية. الألوان والفرش وتوزيع الإضاءة كان مثالياً. أنصح بهم بشدة.",
  },
  {
    id: 3,
    name: "عبدالله العتيبي",
    role: "مالك شقة",
    content: "ما يميزهم هو الاستماع الجيد للعميل وفهم احتياجاته ومن ثم تحويلها لواقع جميل. تسليم في الوقت المحدد وبجودة عالية.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide">
            آراء العملاء
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            ماذا يقول عملاؤنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-background border-border/50">
                <CardContent className="pt-8 px-6 pb-8">
                  <div className="flex text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" className="ml-1" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

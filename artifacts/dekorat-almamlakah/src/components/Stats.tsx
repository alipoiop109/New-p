import { motion } from "framer-motion";
import { Users, Instagram, MapPin, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "عميل راضٍ",
    value: "+500",
    icon: Users,
  },
  {
    id: 2,
    name: "متابع على الإنستغرام",
    value: "+100,000",
    icon: Instagram,
  },
  {
    id: 3,
    name: "جدة وضواحيها",
    value: "موقعنا",
    icon: MapPin,
  },
  {
    id: 4,
    name: "سنوات خبرة",
    value: "+5",
    icon: Award,
  },
];

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <p className="text-4xl font-bold text-foreground" dir="ltr">{stat.value}</p>
              <p className="text-lg font-medium text-muted-foreground">{stat.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

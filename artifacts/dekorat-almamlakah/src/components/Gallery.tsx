import { motion } from "framer-motion";

const photos = [
  { id: 1, src: "/gallery/living1.png", alt: "صالة جلوس فاخرة", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { id: 2, src: "/gallery/bed1.png", alt: "غرفة نوم عصرية", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { id: 3, src: "/gallery/dining.png", alt: "منطقة طعام أنيقة", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { id: 4, src: "/gallery/majlis.png", alt: "مجلس عربي حديث", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide">
            أعمالنا
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            نماذج من إبداعنا
          </h2>
          <p className="text-lg text-muted-foreground">
            تصفح معرض أعمالنا واستلهم أفكاراً لمشروعك القادم. كل صورة تروي قصة اهتمامنا بالتفاصيل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${photo.colSpan} ${photo.rowSpan}`}
            >
              <div className="absolute inset-0 bg-secondary/20 z-0"></div>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{photo.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

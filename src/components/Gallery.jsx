import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631032396971-6a9e3b36505f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618401470634-2f9c4c7b1cbd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618453292432-8f733b0d31f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1609953647564-8b7b86c8b41b?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900">Gallery</h2>
          <p className="text-amber-800/80 mt-2">A glimpse into our artwork</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="aspect-[3/4] rounded-xl overflow-hidden border border-amber-200/70 bg-white shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <img src={src} alt="Mehndi" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

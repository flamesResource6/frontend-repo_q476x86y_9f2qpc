import { motion } from "framer-motion";

const styles = [
  {
    title: "Bridal",
    desc: "Grand, elaborate patterns for the bride with peacocks, paisleys, and mandalas.",
  },
  {
    title: "Arabic",
    desc: "Bold floral strokes with flowing vines for a contemporary festive look.",
  },
  {
    title: "Traditional",
    desc: "Classic Indian motifs symbolizing joy, prosperity, and auspiciousness.",
  },
  {
    title: "Khafif",
    desc: "Minimal yet elegant designs that highlight delicate detailing.",
  },
];

export default function Styles() {
  return (
    <section id="styles" className="bg-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900">Popular Styles</h2>
          <p className="text-amber-800/80 mt-2">Choose a style that suits your occasion</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {styles.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl p-5 bg-gradient-to-br from-amber-100 to-rose-50 border border-amber-200/70 shadow-sm"
            >
              <h3 className="text-xl font-bold text-amber-900">{s.title}</h3>
              <p className="text-amber-800/80 mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

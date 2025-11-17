import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-rose-200/60 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">
            Timeless Indian Mehndi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-amber-900">
            Celebrate your moments with intricate Mehndi artistry
          </h1>
          <p className="text-amber-800/80 md:text-lg">
            From bridal elegance to festive charm, our designs blend tradition with grace. Book a session and bring auspicious beauty to your occasion.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-gradient-to-r from-rose-700 to-amber-700 text-amber-50 font-semibold shadow hover:opacity-90 transition">
              Book Your Mehndi
            </a>
            <a href="#gallery" className="px-5 py-3 rounded-full border border-amber-700 text-amber-900 hover:bg-amber-100 transition font-semibold">
              View Gallery
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-amber-800/80">
            <div>
              <p className="text-3xl font-extrabold text-amber-900">10+</p>
              <p className="text-sm">Years of experience</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-amber-900">1000+</p>
              <p className="text-sm">Happy clients</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-amber-900">100%</p>
              <p className="text-sm">Natural henna</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative mx-auto md:ml-auto w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] p-1 bg-gradient-to-br from-amber-700 to-rose-700 shadow-2xl">
            <div className="h-full w-full rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl border-4 border-amber-50 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl border-4 border-amber-50 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

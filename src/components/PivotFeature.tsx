"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function PivotFeature() {
  const screenshots = [
    { src: "/pivot/pivot1.jpg", title: "Data OHLC & Input" },
    { src: "/pivot/pivot2.jpg", title: "Pivot Ladder & S/R" },
    { src: "/pivot/pivot3.jpg", title: "Strength & Market Sentiment" }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-navy/20">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-400 ring-1 ring-purple-500/20"
          >
            Exclusive VIP Ecosystem
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gradient-silver text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            TRADING STARS <br />
            <span className="text-white">Pivot Analyzer Tool</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-silver"
          >
            Dapatkan akses penuh ke ekosistem analisa kami, mulai dari data OHLC, Pivot Ladder, hingga Sentimen Pasar. Dirancang khusus untuk memberikan akurasi maksimal bagi member VIP.
          </motion.p>
        </div>

        {/* Trio Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {screenshots.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Neon Purple Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative rounded-2xl border border-white/10 bg-navy/80 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* VIP Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center gap-1.5 rounded-full bg-purple-600/90 backdrop-blur-md px-3 py-1 text-[8px] font-black uppercase tracking-widest text-white shadow-lg ring-1 ring-white/20 animate-pulse">
                    <ShieldAlert size={8} /> VIP ONLY
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Subtitle Overlay */}
                <div className="mt-3 px-2 pb-2">
                  <h4 className="text-xs font-bold text-silver/80 group-hover:text-purple-400 transition-colors uppercase tracking-widest text-center">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-silver/40 flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-purple-500" />
            Integrasi otomatis tersedia setelah aktivasi paket VIP
            <span className="h-1 w-1 rounded-full bg-purple-500" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}

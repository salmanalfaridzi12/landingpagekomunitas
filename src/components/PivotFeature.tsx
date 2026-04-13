"use client";

import { motion } from "framer-motion";
import { Zap, Target, BarChart3, ChevronRight } from "lucide-react";

export default function PivotFeature() {
  const features = [
    {
      icon: <Zap className="text-purple-400" size={20} />,
      title: "Otomatis & Real-time",
      desc: "Hitung titik pivot secara instan tanpa perlu input manual yang rumit."
    },
    {
      icon: <Target className="text-purple-400" size={20} />,
      title: "Panduan Visual Chart",
      desc: "Visualisasi garis S/R langsung di dashboard untuk mapping harga yang lebih jelas."
    },
    {
      icon: <BarChart3 className="text-purple-400" size={20} />,
      title: "Hanya untuk Member VIP",
      desc: "Alat bantu eksklusif yang dirancang meningkatkan win-rate trading harian Anda."
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2"
          >
            {/* Glow Frame Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="relative rounded-[2rem] border border-white/10 bg-navy/80 p-2 shadow-[0_0_50px_rgba(147,51,234,0.3)] overflow-hidden">
              <img 
                src="/pivot/pivot1.jpg" 
                alt="Pivot Analyzer Preview" 
                className="w-full h-auto rounded-[1.5rem] object-cover"
              />
              
              {/* VIP Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(147,51,234,0.6)] ring-1 ring-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  VIP EXCLUSIVE
                </div>
              </div>

              {/* Glass Overlay on Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-navy to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-400 ring-1 ring-purple-500/20"
              >
                Exclusive VIP Tool
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gradient-silver text-4xl font-extrabold tracking-tight md:text-5xl"
              >
                Akses Eksklusif: <br />
                <span className="text-white">TRADING STARS Pivot Analyzer</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-silver leading-relaxed"
              >
                Member VIP mendapatkan akses khusus ke web kalkulator Pivot Point otomatis yang dilengkapi dengan panduan visual chart. Tidak perlu hitung manual, biarkan sistem kami yang mencari titik Support & Resistance terakurat untuk Anda.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid gap-6"
            >
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{f.title}</h4>
                    <p className="text-sm text-silver">{f.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a 
                href="https://hitung-pivot-tradingstars.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]"
              >
                Cek Demo Fitur
                <ChevronRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

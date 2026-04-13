"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShieldCheck } from "lucide-react";

const TestimonialCard = ({ 
  src, 
  title, 
  delay = 0, 
  isAlpha = false,
  className = "" 
}: { 
  src: string; 
  title: string; 
  delay?: number;
  isAlpha?: boolean;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all hover:bg-white/[0.05] ${isAlpha ? "md:col-span-2 md:row-span-2 shadow-[0_0_40px_rgba(251,191,36,0.15)] ring-1 ring-gold/30" : ""} ${className}`}
  >
    {isAlpha && (
      <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl border-2 border-gold/50 animate-border-beam" />
    )}
    
    <div className="relative z-10 p-6 h-full flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h3 className={`font-bold tracking-tight text-white ${isAlpha ? "text-xl md:text-2xl" : "text-sm"}`}>
          {title}
        </h3>
        {isAlpha && (
          <div className="flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold text-gold ring-1 ring-gold/40">
            <Star size={10} fill="currentColor" /> ALPHA GAIN
          </div>
        )}
      </div>
      
      <div className="relative flex-grow overflow-hidden rounded-2xl border border-white/5 bg-navy/40">
        <Image
          src={src}
          alt={title}
          width={800}
          height={1200}
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${isAlpha ? "" : "opacity-90"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
      </div>

      {isAlpha && (
        <div className="mt-4 flex items-center gap-2 text-[10px] font-medium text-silver">
          <ShieldCheck size={12} className="text-gold" />
          Bukti Transaksi Terverifikasi
        </div>
      )}
    </div>
  </motion.div>
);

export default function Testimonials() {
  const screenshots = [
    { src: "/testimonials/profit1.jpg", title: "Portofolio Hijau Royo-Royo", delay: 0 },
    { src: "/testimonials/profit2.jpg", title: "Profit 42% dalam Semalam (ZATA)", delay: 0.2, isAlpha: true },
    { src: "/testimonials/profit3.jpg", title: "Profit Konsisten Setiap Hari", delay: 0.1 },
    { src: "/testimonials/profit4.jpg", title: "Panen Cuan Bareng Admin", delay: 0.3 },
    { src: "/testimonials/profit5.jpg", title: "Scalping Kilat Hasil Nyata", delay: 0.4 },
  ];

  return (
    <section id="community" className="relative py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-gradient-silver text-4xl font-extrabold tracking-tight md:text-5xl">
            Bukti Nyata Profit Member
          </h2>
          <p className="mt-4 text-silver">
            Hasil nyata dari komunitas TRADING STARS. Transparan, Akurat, dan Teruji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[240px]">
          {/* Card 1: Small */}
          <TestimonialCard {...screenshots[0]} />
          
          {/* Card 2: THE ALPHA (Large) */}
          <TestimonialCard {...screenshots[1]} />
          
          {/* Card 3: Small */}
          <TestimonialCard {...screenshots[2]} />

          {/* Card 4: Small */}
          <TestimonialCard {...screenshots[3]} className="md:col-span-1" />
          
          {/* Card 5: Small */}
          <TestimonialCard {...screenshots[4]} />
        </div>
      </div>
    </section>
  );
}

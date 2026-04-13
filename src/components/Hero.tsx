"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart, Target } from "lucide-react";

const FloatingCard = ({ 
  title, 
  icon: Icon, 
  delay, 
  duration, 
  className 
}: { 
  title: string; 
  icon: any; 
  delay: number; 
  duration: number;
  className?: string;
}) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={`glass-premium absolute flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl ${className}`}
  >
    <div className="mb-3 rounded-full bg-white/5 p-3 text-cyan ring-1 ring-white/10">
      <Icon size={24} />
    </div>
    <span className="text-sm font-semibold tracking-wider text-white">
      {title}
    </span>
    <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-transparent opacity-50" />
  </motion.div>
);

export default function Hero() {
  const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/TRADINGSTARSVIP?text=Halo%20Admin%20Trading%20Stars,%20saya%20mau%20ambil%20slot%20VIP%20Fast%20Track%20sekarang.";

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gradient-silver text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl"
        >
          Let Your Profits <br /> Defy Gravity
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-silver md:text-xl"
        >
          Master the markets with institutional grade analysis and <br className="hidden md:block" />
          real-time bot alerts designed for the top 1%.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <motion.a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-tr from-gold to-yellow-500 px-8 py-5 text-lg font-bold text-navy shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]"
          >
            Join VIP Fast Track
            <TrendingUp size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </motion.div>
      </div>

      {/* Antigravity Floating Elements */}
      <div className="mt-20 relative w-full max-w-5xl h-[400px] hidden md:block">
        <FloatingCard 
          title="SMC ALERTS" 
          icon={TrendingUp} 
          delay={0} 
          duration={5} 
          className="left-[5%] top-[10%] w-40 glass-cyan"
        />
        <FloatingCard 
          title="VPA ENGINE" 
          icon={BarChart} 
          delay={1.5} 
          duration={7} 
          className="right-[10%] top-[0%] w-40 glass-gold shadow-gold/10"
        />
        <FloatingCard 
          title="PIVOT POINTS" 
          icon={Target} 
          delay={0.8} 
          duration={6} 
          className="left-[40%] bottom-[10%] w-44 glass-premium"
        />
        
        {/* Decorative Stock Candles (SVG) */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[35%] top-[60%] opacity-20"
        >
          <svg width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="45" y="0" width="10" height="150" fill="#22d3ee" fillOpacity="0.5" />
            <rect x="25" y="40" width="50" height="70" rx="4" fill="#22d3ee" />
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[25%] top-[40%] opacity-15"
        >
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="35" y="0" width="10" height="120" fill="#fbbf24" fillOpacity="0.5" />
            <rect x="15" y="30" width="50" height="60" rx="4" fill="#fbbf24" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Zap, Bell, LineChart, Earth } from "lucide-react";

const FeatureItem = ({ text, included, isVip }: { text: string; included: boolean; isVip?: boolean }) => (
  <div className={`flex items-center gap-3 ${!included ? "opacity-40" : ""}`}>
    <div className={`flex h-5 w-5 items-center justify-center rounded-full ${included ? (isVip ? "bg-cyan/20 text-cyan" : "bg-white/10 text-white") : "bg-white/5 text-silver"}`}>
      {included ? <Check size={12} /> : <X size={12} />}
    </div>
    <span className={`text-sm ${included ? "text-white" : "text-silver"}`}>{text}</span>
  </div>
);

export default function ConversionSection() {
  return (
    <section id="vip" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-gradient-silver text-4xl font-bold tracking-tight md:text-5xl">
            Choose Your Galaxy
          </h2>
          <p className="mt-4 text-silver">
            From casual observer to institutional grade performance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:px-20">
          {/* Free Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-8 grayscale"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white">BASIC (Free Group)</h3>
              <p className="mt-2 text-sm text-silver">Community insights & basic analysis.</p>
            </div>

            <div className="mb-8 space-y-4">
              <FeatureItem text="Delayed Market News" included={true} />
              <FeatureItem text="Weekly Stock Picks" included={true} />
              <FeatureItem text="General Community Chat" included={true} />
              <FeatureItem text="Real-time Bot Alerts" included={false} />
              <FeatureItem text="SMC/VPA Insights" included={false} />
              <FeatureItem text="Daily Market Outlook" included={false} />
            </div>

            <div className="mt-auto space-y-4">
              <div className="rounded-xl bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-widest text-silver">Status</p>
                <p className="mt-1 font-bold text-red-500/80 uppercase">Full (154 on waitlist)</p>
                <p className="text-[10px] text-silver/60 mt-1">Estimated wait time: 14+ days</p>
              </div>
              <button 
                disabled 
                className="w-full rounded-xl bg-white/5 py-4 text-sm font-bold text-silver border border-white/10 cursor-not-allowed"
              >
                JOIN WAITING LIST
              </button>
            </div>
          </motion.div>

          {/* VIP Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-8 shadow-[0_0_40px_rgba(251,191,36,0.1)] overflow-hidden"
          >
            {/* Border Beam Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl border-2 border-gold/50 animate-border-beam" />
            
            <div className="absolute -right-12 -top-12 h-40 w-40 bg-gold/10 blur-[60px] rounded-full" />
            
            <div className="mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold ring-1 ring-gold/30">
                <Zap size={10} /> Fast Track Access
              </div>
              <h3 className="mt-4 text-3xl font-extrabold text-white">VIP ALPHA</h3>
              <p className="mt-2 text-sm text-silver">The institutional edge delivered instantly.</p>
            </div>

            <div className="mb-8 space-y-4 relative z-10">
              <FeatureItem text="Real-time SMC/VPA Bot Alerts" included={true} isVip />
              <FeatureItem text="Daily Market Deep Dives" included={true} isVip />
              <FeatureItem text="Private Institutional Network" included={true} isVip />
              <FeatureItem text="Direct Mentorship Access" included={true} isVip />
              <FeatureItem text="Risk Management Hub" included={true} isVip />
              <FeatureItem text="Live Weekly Trading Room" included={true} isVip />
            </div>

            <div className="mt-auto space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold">Membership</p>
                  <p className="text-2xl font-bold text-white">$99<span className="text-sm font-normal text-silver">/month</span></p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-cyan font-bold">3 Slots Left</p>
                  <p className="text-[10px] text-silver/60">Resets in 12h 44m</p>
                </div>
              </div>

              <motion.a
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/TRADINGSTARSVIP?text=Halo%20Admin%20Trading%20Stars,%20saya%20mau%20ambil%20slot%20VIP%20Fast%20Track%20sekarang."}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-gold to-yellow-500 py-5 text-lg font-bold text-navy shadow-[0_0_20px_rgba(251,191,36,0.3)] animate-pulse"
              >
                ACCESS INSTANTLY
              </motion.a>
              <div className="flex items-center justify-center gap-2 text-[10px] text-silver">
                <ShieldCheck size={12} className="text-gold" />
                7-Day Money Back Guarantee
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

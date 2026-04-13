"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Zap, Lock, Star } from "lucide-react";

const FeatureItem = ({ text, included, isVip }: { text: string; included: boolean; isVip?: boolean }) => (
  <div className={`flex items-center gap-3 ${!included ? "opacity-40" : ""}`}>
    <div className={`flex h-5 w-5 items-center justify-center rounded-full ${included ? (isVip ? "bg-cyan/20 text-cyan" : "bg-white/10 text-white") : "bg-white/5 text-silver"}`}>
      {included ? <Check size={12} /> : <X size={12} />}
    </div>
    <span className={`text-sm ${included ? "text-white" : "text-silver"}`}>{text}</span>
  </div>
);

export default function ConversionSection() {
  const telegramMonthly = "https://t.me/TRADINGSTARSVIP?text=Halo%20Admin%20TRADING%20STARS!%20Saya%20sudah%20baca%20penjelasannya%20di%20web%20dan%20tertarik%20buat%20join%20Grup%20VIP%20via%20jalur%20BULANAN.%20Tolong%20info%20cara%20pembayarannya%20ya,%20mau%20langsung%20gas%20pantau%20sinyal%20hari%20ini!%20%F0%9F%93%88";
  const telegramLifetime = "https://t.me/TRADINGSTARSVIP?text=Halo%20Admin!%20Saya%20pilih%20paket%20VIP%20LIFETIME%20buat%20dapet%20akses%20selamanya.%20Gak%20mau%20ribet%20perpanjang%20tiap%20bulan,%20mau%20fokus%20profit%20bareng%20komunitas%20aja.%20Tolong%20amankan%20slot%20saya%20ya!%20%F0%9F%94%A5%E2%AD%90";

  return (
    <section id="vip" className="relative py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-gradient-silver text-4xl font-bold tracking-tight md:text-5xl">
            Pilih Jalur Trading Anda
          </h2>
          <p className="mt-4 text-silver">
            Dari pengamat pasar hingga trader profesional dengan performa institusional.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Card 1: Grup FREE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-8 grayscale opacity-60"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500 ring-1 ring-red-500/30">
                <Lock size={10} /> KUOTA PENUH
              </div>
              <h3 className="mt-4 text-xl font-bold text-white uppercase tracking-tight">Grup FREE</h3>
              <p className="mt-2 text-sm text-silver">Wawasan komunitas & analisis dasar.</p>
            </div>

            <div className="mb-8 space-y-4">
              <FeatureItem text="Berita Pasar Terlambat" included={true} />
              <FeatureItem text="Pilihan Saham Mingguan" included={true} />
              <FeatureItem text="Chat Komunitas Umum" included={true} />
              <FeatureItem text="Sinyal Bot Real-time" included={false} />
              <FeatureItem text="Wawasan SMC/VPA" included={false} />
            </div>

            <div className="mt-auto">
              <button 
                disabled 
                className="w-full rounded-xl bg-white/5 py-4 text-sm font-bold text-silver border border-white/10 cursor-not-allowed"
              >
                ANTRE DI WAITING LIST
              </button>
              <p className="text-[10px] text-center text-silver/40 mt-3 italic">Estimasi tunggu: 14+ hari</p>
            </div>
          </motion.div>

          {/* Card 2: VIP Bulanan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 relative overflow-hidden"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">VIP Bulanan</h3>
              <p className="mt-2 text-sm text-silver">Akses penuh ke semua alert bot.</p>
            </div>

            <div className="mb-8 space-y-4">
              <FeatureItem text="Sinyal Bot Real-time" included={true} isVip />
              <FeatureItem text="Analisis SMC & VPA" included={true} isVip />
              <FeatureItem text="Grup VIP Eksklusif" included={true} isVip />
              <FeatureItem text="Market Deep Dives" included={true} isVip />
              <FeatureItem text="Mentorship Langsung" included={false} />
            </div>

            <div className="mt-auto space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan font-semibold">Berlangganan</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">Rp300.000</span>
                  <span className="text-sm text-silver">/bulan</span>
                </div>
              </div>

              <motion.a
                href={telegramMonthly}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center rounded-xl bg-cyan py-4 text-sm font-bold text-navy shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                GABUNG VIP BULANAN
              </motion.a>
            </div>
          </motion.div>

          {/* Card 3: VIP Lifetime (THE ALPHA) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col rounded-3xl border border-gold/40 bg-gradient-to-b from-gold/15 to-transparent p-8 shadow-[0_0_50px_rgba(251,191,36,0.2)] overflow-hidden z-20"
          >
            {/* Border Beam Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl border-2 border-gold/50 animate-border-beam" />
            
            <div className="absolute -right-12 -top-12 h-40 w-40 bg-gold/20 blur-[60px] rounded-full" />
            
            <div className="mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold ring-1 ring-gold/40 shadow-[0_0_10px_rgba(251,191,36,0.4)]">
                <Star size={10} fill="currentColor" /> BEST VALUE / PALING POPULER
              </div>
              <h3 className="mt-4 text-3xl font-extrabold text-white">VIP LIFETIME</h3>
              <p className="mt-2 text-sm text-silver font-medium">Investasi sekali untuk profit selamanya.</p>
            </div>

            <div className="mb-8 space-y-4 relative z-10">
              <FeatureItem text="Semua Alert Bot (SMC/VPA)" included={true} isVip />
              <FeatureItem text="Akses Grup Selamanya" included={true} isVip />
              <FeatureItem text="Prioritas Konsultasi 1-on-1" included={true} isVip />
              <FeatureItem text="Bonus Strategi Eksklusif" included={true} isVip />
              <FeatureItem text="Risk Management Hub" included={true} isVip />
            </div>

            <div className="mt-auto space-y-4 relative z-10">
              <div>
                <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-bold">
                  AKSES SELAMANYA 
                  <span className="rounded bg-gold/20 px-1.5 py-0.5 text-[8px] text-gold animate-pulse">Hemat 50%+</span>
                </p>
                <div className="mt-1 flex flex-col">
                  <span className="text-sm text-silver/60 line-through">Rp1.500.000</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">Rp700.000</span>
                    <span className="text-sm font-normal text-silver">Sekali Bayar</span>
                  </div>
                </div>
              </div>

              <motion.a
                href={telegramLifetime}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-gold to-yellow-500 py-5 text-lg font-black text-navy shadow-[0_0_30px_rgba(251,191,36,0.4)] animate-pulse"
              >
                AMBIL AKSES SELAMANYA
              </motion.a>
              <div className="flex items-center justify-center gap-2 text-[10px] text-silver font-medium">
                <ShieldCheck size={12} className="text-gold" />
                Garansi Puas atau Uang Kembali
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

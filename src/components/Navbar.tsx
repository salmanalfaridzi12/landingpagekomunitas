"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-11 z-40 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass px-6 py-3">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="TRADING STARS Logo" 
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold tracking-tighter text-white">
            TRADING STARS
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 md:flex">
            {["Layanan", "Komunitas", "VIP"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-silver transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.a
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/TRADINGSTARSVIP?text=Halo%20Admin%20Trading%20Stars,%20saya%20mau%20ambil%20slot%20VIP%20Fast%20Track%20sekarang."}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            <Send size={16} className="text-cyan" />
            Hubungi Admin
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

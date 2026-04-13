"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-11 z-40 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gold to-cyan shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          <span className="text-xl font-bold tracking-tighter text-white">
            TRADING STARS
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 md:flex">
            {["Services", "Community", "VIP"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-silver transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            <User size={16} />
            Login
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

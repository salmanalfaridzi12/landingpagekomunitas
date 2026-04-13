"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 400px scroll (roughly after Hero)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-0 right-0 z-40 px-6 md:hidden"
        >
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/TRADINGSTARSVIP?text=Halo%20Admin%20Trading%20Stars,%20saya%20mau%20ambil%20slot%20VIP%20Fast%20Track%20sekarang."}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold to-yellow-500 py-4 text-lg font-bold text-navy shadow-[0_-4px_20px_rgba(251,191,36,0.3)]"
          >
            <Zap size={20} /> Skip the Queue - Get VIP
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

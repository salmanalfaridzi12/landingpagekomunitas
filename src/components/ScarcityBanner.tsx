"use client";

export default function ScarcityBanner() {
  return (
    <div className="sticky top-0 z-50 w-full bg-red-600 py-2.5 text-center backdrop-blur-md border-b border-yellow-400 animate-glow-urgent">
      <p className="text-sm font-bold tracking-wide text-white flex items-center justify-center gap-2">
        <span className="text-yellow-300">⚠️</span>
        GROUP FREE FULL. <span className="text-yellow-300">VIP FAST TRACK</span> STILL AVAILABLE FOR 3 SLOTS TODAY.
      </p>
    </div>
  );
}

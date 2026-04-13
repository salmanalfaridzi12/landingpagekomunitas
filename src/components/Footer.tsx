import { Earth, Send, Share, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy/50 py-12 px-6 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-gold to-cyan" />
              <span className="text-lg font-bold tracking-tighter text-white">
                TRADING STARS
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-silver">
              Elevate your trading with institutional grade insights and real-time algorithmic alerts. 
              Join the community that defies gravity.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Community</h4>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              <li><a href="#" className="hover:text-gold transition-colors">Free Group</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">VIP Alpha</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              <li><a href="#" className="hover:text-gold transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-silver/60">
            © 2026 TRADING STARS. All rights reserved. Trading involves significant risk.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-silver hover:text-cyan transition-colors"><Send size={18} /></a>
            <a href="#" className="text-silver hover:text-cyan transition-colors"><Share size={18} /></a>
            <a href="#" className="text-silver hover:text-cyan transition-colors"><MessageCircle size={18} /></a>
            <a href="#" className="text-silver hover:text-cyan transition-colors"><Earth size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

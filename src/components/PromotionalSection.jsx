import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function PromoDiscountWidget() {
  return (
    /* 🌊 from-workable-primary এবং to-workable-bg দুটোই এখন তোমার নতুন ওশান থিমের ভেরিয়েবল */
    <div className="bg-gradient-to-br from-workable-primary to-workable-bg border border-workable-dark-green/20 rounded-2xl p-5 text-workable-text-dark shadow-[0_12px_30px_rgba(4,32,43,0.2)] relative overflow-hidden min-h-[170px] flex flex-col justify-between group transition-all duration-300 hover:border-workable-dark-green/40">
      
      {/* 🖼️ Background Neon-Orange/Teal Abstract Image (Inspired by image_49b1a4.png energy) */}
      <div className="absolute inset-0 w-full h-full opacity-20 mix-blend-screen pointer-events-none group-hover:scale-110 group-hover:opacity-30 transition-all duration-700">
        <Image 
          src="/promotionalLogo.jpg" 
          alt="Abstract Neon Glowing background"
          fill
          className="object-cover"
        />
      </div>

      {/* Top Header Section */}
      <div className="w-full space-y-2 relative z-10 space-y-4">
        <div className="flex items-center gap-1.5">
          <HiSparkles className="text-[#FF6B35] shrink-0 animate-pulse" size={13} />
          <span className="text-[10px] uppercase font-heading font-black tracking-widest text-ocean-slate-light">
            Special Offer Active
          </span>
        </div>
        
        {/* Sub-text Box */}
        <p className="text-xs font-medium text-workable-text-dark/90 leading-relaxed pt-1">
          Unlock unlimited job applications and premium resume tracking. Save{" "}
          <span className="text-[#FF6B35] font-black underline decoration-wavy decoration-[#FF6B35]/40">30%</span> on
          your first month using code <span className="bg-workable-bg/60 border border-workable-slate px-1.5 py-0.5 rounded font-mono text-[11px] font-bold text-workable-dark-green">PROMO30</span>.
        </p>
      </div>

      {/* Bottom CTA Action Button */}
      <div className="pt-4 w-full relative z-10 mt-2">
        <Link
          href="/dashboard/billing"
          className="flex items-center justify-between w-full text-[11px] font-heading font-black text-workable-bg bg-gradient-to-r from-workable-dark-green to-ocean-slate-light hover:from-[#FF6B35] hover:to-[#FF8C61] hover:text-white transition-all duration-300 px-4 py-2.5 rounded-xl shadow-md font-bold group/btn"
        >
          <span>Claim 30% Off</span>
          <div className="w-4 h-4 rounded-full bg-workable-bg/10 flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
            <FiArrowRight size={11} className="group-hover/btn:text-white" />
          </div>
        </Link>
      </div>

    </div>
  );
}
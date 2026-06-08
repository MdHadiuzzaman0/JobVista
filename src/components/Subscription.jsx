import Link from "next/link";
import { FiTrendingUp, FiZap, FiArrowUpRight } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { getSavedJobs } from "@/lib/data";

export default function CurrentPlanWidget({ savedCount , planType = "Free" }) {
  
  const planConfigs = {
    Free: {
      name: "Free Tier",
      desc: `${savedCount.length}/10 saved jobs used`,
      icon: <FiTrendingUp className="text-workable-dark-green shrink-0" size={14} />,
      badgeClass: "bg-workable-dark-green/10 text-workable-dark-green border-workable-dark-green/20",
      borderAccent: "border-t-workable-dark-green",
      ctaText: "Upgrade to Pro",
    },
    Pro: {
      name: "Pro Member",
      desc: "Unlimited applies & saves active",
      icon: <FiZap className="text-ocean-slate-light shrink-0" size={14} />,
      badgeClass: "bg-ocean-slate-light/10 text-ocean-slate-light border-ocean-slate-light/20",
      borderAccent: "border-t-ocean-slate-light",
      ctaText: "Go to Enterprise",
    },
    Enterprise: {
      name: "Enterprise",
      desc: "All power analytics & job posts active",
      icon: <FaCrown className="text-workable-text-dark shrink-0" size={14} />,
      badgeClass: "bg-workable-text-dark/10 text-workable-text-dark border-workable-text-dark/20",
      borderAccent: "border-t-workable-text-dark",
      ctaText: "Manage Billing",
    },
  };

  const currentPlan = planConfigs[planType] || planConfigs.Free;

  return (
    <div className={`bg-workable-bg border border-workable-slate/40 rounded-2xl p-5 shadow-md shadow- min-h-[150px] flex flex-col justify-between border-t-4 ${currentPlan.borderAccent} relative overflow-hidden w-full transition-all duration-300 hover:border-workable-slate/80`}>
      
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-workable-primary/10 to-transparent pointer-events-none" />

      {/* Top Section: Header & Badge */}
      <div className="w-full space-y-3 relative z-10">
        <div className="flex items-center justify-between w-full gap-2">
          <span className="text-[9px] uppercase font-heading font-black tracking-widest text-workable-text-muted">
            Account Status
          </span>
          <span className={`text-[9px] font-sans font-bold px-2 py-0.5 rounded-full border shrink-0 backdrop-blur-sm ${currentPlan.badgeClass}`}>
            Active
          </span>
        </div>

        {/* Title and Icon */}
        <div className="flex items-center gap-2 min-w-0">
          {currentPlan.icon}
          <h3 className="font-heading font-black text-sm text-workable-text-dark truncate">
            {currentPlan.name}
          </h3>
        </div>
      </div>

      {/* Bottom Section: Vertical Layout */}
      <div className="flex flex-col gap-3 pt-3 border-t border-workable-slate/50 w-full relative z-10 mt-2">
        {/* Usage description */}
        <p className="text-[11px] text-workable-text-muted font-semibold font-sans leading-relaxed">
          {currentPlan.desc}
        </p>

        {/* Action Link Button */}
        <Link 
          href="/dashboard/billing"
          className="flex items-center justify-between w-full text-[10px] font-heading font-black text-workable-text-dark hover:text-workable-dark-green transition-colors group bg-workable-primary/20 hover:bg-workable-primary/30 px-3 py-2 rounded-xl border border-workable-slate/40"
        >
          <span>{currentPlan.ctaText}</span>
          <div className="w-4 h-4 rounded-md bg-workable-bg flex items-center justify-center border border-workable-slate/60 group-hover:border-workable-dark-green/40 transition-all">
            <FiArrowUpRight size={10} className="text-workable-text-muted group-hover:text-workable-dark-green transition-colors" />
          </div>
        </Link>
      </div>

    </div>
  );
}
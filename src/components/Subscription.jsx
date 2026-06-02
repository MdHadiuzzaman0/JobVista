import Link from "next/link";
import { FiTrendingUp, FiZap, FiAward, FiArrowUpRight } from "react-icons/fi";

export default function CurrentPlanWidget({ planType = "Free", usageCount = 4 }) {
  // 1. Dynamic Plan Configurations based on image_8be27c.png & image_8be80.png
  const planConfigs = {
    Free: {
      name: "Free Tier",
      desc: `${usageCount}/10 saved jobs used`,
      icon: <FiTrendingUp className="text-emerald-500" size={16} />,
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
      borderAccent: "border-t-emerald-500",
      ctaText: "Upgrade to Pro",
    },
    Pro: {
      name: "Pro Member",
      desc: "Unlimited applies & saves active",
      icon: <FiZap className="text-amber-500" size={16} />,
      badgeClass: "bg-amber-50 text-amber-700 border-amber-100",
      borderAccent: "border-t-amber-500",
      ctaText: "Go Enterprise",
    },
    Enterprise: {
      name: "Enterprise",
      desc: "Full analytics & job posts active",
      icon: <FiAward className="text-purple-500" size={16} />,
      badgeClass: "bg-purple-50 text-purple-700 border-purple-100",
      borderAccent: "border-t-purple-500",
      ctaText: "Manage Billing",
    },
  };

  const currentPlan = planConfigs[planType] || planConfigs.Free;

  return (
    <div className={`bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] min-h-[140px] flex flex-col justify-between border-t-4 ${currentPlan.borderAccent} transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] group relative overflow-hidden`}>
      
      {/* Subtle Background Radial Glow on Hover */}
      <div className="absolute -right-10 -top-10 w-24 h-24 bg-slate-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Section: Header & Badge */}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="space-y-0.5">
          <span className="text-[9px] uppercase font-heading font-black tracking-widest text-slate-400">
            Account Status
          </span>
          <h3 className="font-heading font-black text-sm text-workable-text-dark flex items-center gap-1.5">
            {currentPlan.icon}
            {currentPlan.name}
          </h3>
        </div>
        
        {/* Minimal Status Capsule */}
        <span className={`text-[10px] font-sans font-bold px-2 py-0.5 rounded-full border ${currentPlan.badgeClass}`}>
          Active
        </span>
      </div>

      {/* Bottom Section: Dynamic Usage/Timeline Details & Premium CTA */}
      <div className="flex items-end justify-between gap-2 pt-2 relative z-10 border-t border-slate-50">
        <p className="text-[11px] text-slate-400 font-medium font-sans leading-tight max-w-[160px]">
          {currentPlan.desc}
        </p>

        {/* Floating Interactive Action Link */}
        <Link 
          href="/dashboard/billing"
          className="flex items-center gap-1 text-[11px] font-heading font-black text-workable-text-dark hover:text-emerald-600 transition-colors shrink-0 group/btn"
        >
          <span>{currentPlan.ctaText}</span>
          <div className="w-5 h-5 rounded-md bg-slate-50 flex items-center justify-center border border-slate-100 group-hover/btn:bg-emerald-50 group-hover/btn:border-emerald-100 transition-all transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
            <FiArrowUpRight size={11} className="text-slate-500 group-hover/btn:text-emerald-600 transition-colors" />
          </div>
        </Link>
      </div>

    </div>
  );
}
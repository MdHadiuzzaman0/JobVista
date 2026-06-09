
import { LuConstruction } from "react-icons/lu";

export default function MyPoints() {
  return (
    <div className="bg-workable-bg border border-workable-slate/40 rounded-2xl p-5 shadow-md min-h-[100px] flex flex-col justify-center border-t-4 border-t-amber-500/50 relative overflow-hidden w-full transition-all duration-300 hover:border-workable-slate/80 select-none group">
      
      {/* 🎪 উপর থেকে ঝুলে থাকা কাস্টম ব্যানার */}
      <div className="absolute top-0 right-6 transform origin-top transition-all duration-300  z-20">
        <div className="w-[2px] h-8 bg-amber-500/40 mx-auto" />
        <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-workable-bg font-sans font-black uppercase tracking-wider text-[8px] px-2 py-0.5 rounded shadow-[0_4px_10px_rgba(245,158,11,0.3)] animate-pulse">
          <LuConstruction size={10} />
          <span>Under Construction</span>
        </div>
      </div>

      {/* Content Section: Only Names */}
      <div className="w-full space-y-1 relative z-10">
        <h3 className="font-heading font-black text-[12px] text-center text-workable-text-dark truncate">
          SMS Job Alerts
        </h3>
      </div>

    </div>
  );
}
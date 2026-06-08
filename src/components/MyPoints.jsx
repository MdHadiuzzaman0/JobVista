import { Button, Tooltip } from "@heroui/react";
import { LuConstruction } from "react-icons/lu";

export default function PointsWidget() {
  return (
    <div className="w-full max-w-[400px] border border-gray-100 rounded-2xl p-5 bg-white shadow-sm flex items-center justify-between">
      
      {/* 📊 বামপাশে টেক্সট এবং লিমিটেড স্ট্যাটিক ভিউ */}
      <div className="space-y-3 flex-1">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block">
            Features Portal
          </span>
          <h3 className="text-base font-bold text-gray-800 tracking-tight">
            My Points & Rewards
          </h3>
        </div>

        {/* 🛠️ HeroUI Compound Tooltip */}
        <Tooltip delay={0} closeDelay={0}>
          <Button 
            variant="flat" 
            size="sm"
            radius="xl"
            className="font-bold text-[11px] h-8 bg-emerald-50 text-workable-dark-green border border-emerald-100/50 cursor-pointer"
          >
            How to earn?
          </Button>
          <Tooltip.Content className="text-xs font-semibold text-gray-700 bg-white border border-gray-100 p-2.5 shadow-xl rounded-xl">
            <p>Points system is currently being integrated with your profile updates.</p>
          </Tooltip.Content>
        </Tooltip>
      </div>

      {/* ⏳ ডানপাশে আন্ডার কনস্ট্রাকশন অ্যানিমেটেড সাইনবোর্ড/আইকন */}
      <div className="flex flex-col items-center justify-center gap-1.5 shrink-0 pl-4 border-l border-gray-50">
        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-500 flex items-center justify-center animate-spin [animation-duration:3s] shadow-sm">
          <LuConstruction size={20} />
        </div>
        <span className="text-[9px] uppercase font-black tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
          In Progress
        </span>
      </div>

    </div>
  );
}
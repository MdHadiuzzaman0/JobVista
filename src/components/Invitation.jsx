import { Button, Tooltip } from "@heroui/react";
import { LuConstruction } from "react-icons/lu";

export default function TotalInvitationsWidget() {
  return (
    // 🌊 Card Parent: bg-workable-slate
    <div className="w-full max-w-[420px] border border-ocean-slate-light/10 rounded-2xl p-4 bg-workable-slate text-workable-text-dark shadow-sm relative overflow-hidden group select-none">
      
      {/* 📋 Header Section */}
      <div className="flex items-center justify-between border-b border-ocean-slate-light/10 pb-2.5 mb-3.5">
        <h3 className="text-xs font-black tracking-tight text-workable-text-dark">
          Your Total Invitation
        </h3>
        
        {/* 🛠️ HeroUI Compound Tooltip (Shortened Text) */}
        <Tooltip delay={0} closeDelay={0}>
          <Button 
            variant="flat" 
            size="sm" 
            radius="md"
            className="h-5 min-w-5 p-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 font-black cursor-pointer text-[10px]"
          >
            <LuConstruction size={12} />
          </Button>
          <Tooltip.Content className="text-[10px] font-bold text-black bg-amber-200 border border-ocean-slate-light/10 p-2 shadow-xl rounded-xl">
            <p>Under Construction</p>
          </Tooltip.Content>
        </Tooltip>
      </div>

      {/* 🔄 Main Content Layout */}
      <div className="flex items-center justify-between gap-4">
        
        {/* 🎯 Left: Slim Tailwind Donut Chart */}
        <div className="relative w-26 h-26 rounded-full bg-ocean-slate-light/10 flex items-center justify-center shrink-0">
          {/* Inner masking expanded to make the ring slim */}
          <div className="absolute w-22 h-22 rounded-full bg-workable-slate flex flex-col items-center justify-center z-10 shadow-inner">
            <span className="text-xl font-black text-workable-text-dark leading-none">0</span>
            <span className="text-[8px] text-workable-text-muted font-black uppercase tracking-wider mt-0.5">Total</span>
          </div>
          {/* Small customized construction gear icon */}
          <div className="absolute text-amber-500/20 animate-spin [animation-duration:10s] z-0">
            <LuConstruction size={20} />
          </div>
        </div>

        {/* 📋 Right: Stages List with Micro Typography */}
        <div className="flex-1 space-y-1.5">
          {/* Online Test */}
          <div className="flex items-center justify-between text-[10px] font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-blue-500 shrink-0" />
              <span className="text-workable-text-muted">Online Test</span>
            </div>
            <span className="text-workable-text-dark bg-ocean-slate-light/5 px-1.5 py-0.5 rounded font-mono text-[10px]">00</span>
          </div>

          {/* Video Interview */}
          <div className="flex items-center justify-between text-[10px] font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-emerald-500 shrink-0" />
              <span className="text-workable-text-muted">Video Interview</span>
            </div>
            <span className="text-workable-text-dark bg-ocean-slate-light/5 px-1.5 py-0.5 rounded font-mono text-[10px]">00</span>
          </div>

          {/* General Interview */}
          <div className="flex items-center justify-between text-[10px] font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-sky-400 shrink-0" />
              <span className="text-workable-text-muted">General Interview</span>
            </div>
            <span className="text-workable-text-dark bg-ocean-slate-light/5 px-1.5 py-0.5 rounded font-mono text-[10px]">00</span>
          </div>

          {/* Personality Test */}
          <div className="flex items-center justify-between text-[10px] font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-amber-500 shrink-0" />
              <span className="text-workable-text-muted">Personality Test</span>
            </div>
            <span className="text-workable-text-dark bg-ocean-slate-light/5 px-1.5 py-0.5 rounded font-mono text-[10px]">00</span>
          </div>
        </div>

      </div>

    </div>
  );
}
"use client";
import React from "react";
import { Button, Tooltip } from "@heroui/react";
import { LuConstruction } from "react-icons/lu";

export default function TotalInvitationsWidget() {
  return (
    // 🌊 Card Parent: bg-workable-slate (#112240)
    <div className="w-full max-w-[480px] border border-ocean-slate-light/10 rounded-2xl p-5 bg-workable-slate text-workable-text-dark shadow-sm relative overflow-hidden group">
      
      {/* 📋 Header Section with Tooltip */}
      <div className="flex items-center justify-between border-b border-ocean-slate-light/10 pb-3 mb-4">
        <h3 className="text-sm font-bold tracking-tight text-workable-text-dark">
          Your Total Invitation
        </h3>
        
        {/* 🛠️ HeroUI Compound Tooltip */}
        <Tooltip delay={0} closeDelay={0}>
          <Button 
            variant="flat" 
            size="sm" 
            radius="md"
            className="h-7 min-w-7 px-0 bg-workable-dark-green/10 text-workable-dark-green border border-workable-dark-green/20 font-black cursor-pointer"
          >
            i
          </Button>
          <Tooltip.Content className="text-xs font-semibold text-workable-text-dark bg-workable-slate border border-ocean-slate-light/10 p-2.5 shadow-xl rounded-xl">
            <p>This panel tracks your upcoming interview rounds. Currently under construction!</p>
          </Tooltip.Content>
        </Tooltip>
      </div>

      {/* 🔄 Main Content Layout */}
      <div className="flex items-center justify-between gap-6">
        
        {/* 🎯 Left: Pure Tailwind/CSS Donut Chart with Dynamic Dark Theme Colors */}
        <div className="relative w-28 h-28 rounded-full bg-ocean-slate-light/10 flex items-center justify-center shrink-0">
          {/* Inner masking to make it a donut/circle chart */}
          <div className="absolute w-20 h-20 rounded-full bg-workable-slate flex flex-col items-center justify-center z-10">
            <span className="text-2xl font-black text-workable-text-dark leading-none">0</span>
            <span className="text-[10px] text-workable-text-muted font-bold mt-0.5">Total</span>
          </div>
          {/* Subtle construction gear inside chart */}
          <div className="absolute text-amber-500/20 animate-spin [animation-duration:8s]">
            <LuConstruction size={40} />
          </div>
        </div>

        {/* 📋 Right: Stages List with matching theme indicators */}
        <div className="flex-1 space-y-2">
          {/* Online Test */}
          <div className="flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-blue-500 shrink-0" />
              <span className="text-workable-text-dark">Online Test</span>
            </div>
            <span className="text-workable-text-muted bg-ocean-slate-light/5 px-2 py-0.5 rounded-md font-mono text-[11px]">00</span>
          </div>

          {/* Video Interview */}
          <div className="flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-emerald-500 shrink-0" />
              <span className="text-workable-text-dark">Video Interview</span>
            </div>
            <span className="text-workable-text-muted bg-ocean-slate-light/5 px-2 py-0.5 rounded-md font-mono text-[11px]">00</span>
          </div>

          {/* General Interview */}
          <div className="flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-sky-400 shrink-0" />
              <span className="text-workable-text-dark">General Interview</span>
            </div>
            <span className="text-workable-text-muted bg-ocean-slate-light/5 px-2 py-0.5 rounded-md font-mono text-[11px]">00</span>
          </div>

          {/* Personality Test */}
          <div className="flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-amber-500 shrink-0" />
              <span className="text-workable-text-dark">Personality Test</span>
            </div>
            <span className="text-workable-text-muted bg-ocean-slate-light/5 px-2 py-0.5 rounded-md font-mono text-[11px]">00</span>
          </div>
        </div>

      </div>

      {/* 🚧 Under Construction Status Badge */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
        <span className="text-[8px] uppercase font-black tracking-wider text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
          Under Construction
        </span>
      </div>

    </div>
  );
}
"use client";
import React from "react";
import { Button, Tooltip } from "@heroui/react";
import { LuConstruction } from "react-icons/lu";

export default function SmsAlertWidget() {
  return (
    // 🌊 Card: bg-workable-slate (#112240) এবং text-workable-text-dark (#E6F1FF)
    <div className="w-full max-w-[400px] border border-ocean-slate-light/10 rounded-2xl p-5 bg-workable-slate text-workable-text-dark shadow-sm flex items-center justify-between">
      
      {/* 📊 Left Content: Title and Action */}
      <div className="space-y-3 flex-1">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-black tracking-widest text-workable-text-muted block">
            Add-on Features
          </span>
          <h3 className="text-base font-bold tracking-tight text-workable-text-dark">
            SMS Job Alerts
          </h3>
        </div>

        {/* 🛠️ HeroUI Compound Tooltip */}
        <Tooltip delay={0} closeDelay={0}>
          <Button 
            variant="flat" 
            size="sm"
            radius="xl"
            // 🎯 Accent Color: text-workable-dark-green (#64FFDA)
            className="font-bold text-[11px] h-8 bg-workable-dark-green/10 text-workable-dark-green border border-workable-dark-green/20 hover:bg-workable-dark-green/20 cursor-pointer transition-colors"
          >
            Check Availability
          </Button>
          <Tooltip.Content className="text-xs font-semibold text-workable-text-dark bg-workable-slate border border-ocean-slate-light/10 p-2.5 shadow-xl rounded-xl">
            <p>SMS notification carrier service is currently under construction.</p>
          </Tooltip.Content>
        </Tooltip>
      </div>

      {/* ⏳ Right Content: Construction Indicator */}
      <div className="flex flex-col items-center justify-center gap-1.5 shrink-0 pl-4 border-l border-ocean-slate-light/10">
        {/* 🚧 Icon Container: Amber warning system */}
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center animate-bounce shadow-sm">
          <LuConstruction size={20} />
        </div>
        <span className="text-[9px] uppercase font-black tracking-wider text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded-md">
          Coming Soon
        </span>
      </div>

    </div>
  );
}
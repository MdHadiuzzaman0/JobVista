import { FiCheckCircle, FiCircle, FiTrendingUp, FiEdit3, FiDownload } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function ProfileProgressWidget({ percentage = 70, setIsEditing }) {
  return (
    <div className="bg-workable-bg border border-workable-slate/40 rounded-2xl p-5 shadow-[0_12px_40px_rgba(4,32,43,0.2)] flex flex-col justify-between min-h-[440px] w-full">
      
      {/* 1️⃣ Profile Heading */}
      <div className="border-b border-workable-slate/50 pb-3 w-full">
        <span className="text-[11px] uppercase font-heading font-black tracking-widest text-ocean-slate-light">
          Your Profile Progress
        </span>
      </div>

      {/* 2️⃣ Inspirational Text (Micro Tip CTA) */}
      <div className="mt-3 p-2.5 bg-workable-primary/10 border border-workable-slate/50 rounded-xl flex items-center gap-2 w-full">
        <FiTrendingUp className="text-ocean-slate-light shrink-0" size={14} />
        <p className="text-[10px] text-workable-text-muted font-medium font-sans leading-normal">
          Profiles at <span className="text-workable-dark-green font-bold">80%+</span> get up to 3x more recruiter responses.
        </p>
      </div>

      {/* 3️⃣ Progress Bar (Radial Donut Chart) */}
      <div className="flex flex-col items-center justify-center py-4 w-full">
        <div 
          className="relative flex items-center justify-center rounded-full text-workable-dark-green bg-workable-slate/20"
          style={{
            width: "90px",
            height: "90px",
            background: `conic-gradient(var(--color-workable-dark-green) ${percentage * 3.6}deg, var(--color-workable-slate) 0deg)`
          }}
        >
          <div className="absolute w-[76px] h-[76px] bg-workable-bg rounded-full flex flex-col items-center justify-center">
            <span className="text-base font-heading font-black text-workable-text-dark">{percentage}%</span>
            <span className="text-[8px] uppercase tracking-wider text-workable-text-muted font-bold">Done</span>
          </div>
        </div>
      </div>

      {/* 4️⃣ Edit Profile & Download CV Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pb-2 w-full">
        <Button onClick={() => setIsEditing(true)}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-workable-slate/60 bg-workable-slate/20 hover:bg-workable-slate/40 text-workable-text-dark text-[10px] font-heading font-black transition-all cursor-pointer" >
          <FiEdit3 size={12} className="text-ocean-slate-light" /> <span>Edit Profile</span>
        </Button>

        <Link 
          href="/dashboard/profile/download-cv"
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-workable-dark-green/30 bg-workable-dark-green/10 hover:bg-workable-dark-green/20 text-workable-dark-green text-[10px] font-heading font-black transition-all"
        >
          <FiDownload size={12} />
          <span>Download CV</span>
        </Link>
      </div>

      {/* 5️⃣ What is complete & what remains (Checklists) */}
      <div className="space-y-2.5 w-full pt-1 border-t border-workable-slate/30">
        
        {/* Remaining Item (বাকি আছে) */}
        <div className="flex items-start gap-3 p-2.5 rounded-xl border bg-workable-slate/10 border-workable-slate/30">
          <FiCircle className="text-workable-text-muted shrink-0 mt-0.5" size={14} />
          <span className="text-[12px] font-medium font-sans text-workable-text-dark leading-tight">
            Connect GitHub or Portfolio <span className="text-workable-dark-green font-bold text-[10px] ml-1">(+20%)</span>
          </span>
        </div>

        {/* Completed Item (হয়ে গেছে) */}
        <div className="flex items-start gap-3 p-2.5 rounded-xl border bg-workable-dark-green/5 border-workable-dark-green/20">
          <FiCheckCircle className="text-workable-dark-green shrink-0 mt-0.5" size={14} />
          <span className="text-[12px] font-medium font-sans text-workable-text-dark/60 line-through leading-tight">
            Upload Professional Resume <span className="text-workable-dark-green/50 font-bold text-[10px] ml-1">(+25%)</span>
          </span>
        </div>

        {/* Completed Item (হয়ে গেছে) */}
        <div className="flex items-start gap-3 p-2.5 rounded-xl border bg-workable-dark-green/5 border-workable-dark-green/20">
          <FiCheckCircle className="text-workable-dark-green shrink-0 mt-0.5" size={14} />
          <span className="text-[12px] font-medium font-sans text-workable-text-dark/60 line-through leading-tight">
            Add at least 5 core skills <span className="text-workable-dark-green/50 font-bold text-[10px] ml-1">(+15%)</span>
          </span>
        </div>

      </div>

    </div>
  );
}
import { FiCheckCircle, FiCircle, FiTrendingUp, FiEdit3, FiDownload } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@heroui/react";
import ProgressBarAndUpdate from "@/components/ProgressBarAndUpdate";

export default function ProfileProgressWidget({ setIsEditing, userInfo, setGlobalPercentage }) {
  return (
    <div className="bg-workable-bg border border-workable-slate/40 rounded-2xl px-2 py-2 shadow-[0_12px_40px_rgba(4,32,43,0.2)] flex flex-col justify-between min-h-[440px] w-full">
      
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

      <ProgressBarAndUpdate userInfo={userInfo} setIsEditing={setIsEditing} setGlobalPercentage={setGlobalPercentage}/>

    </div>
  );
}
import { Tooltip, Button } from "@heroui/react";
import { FiMaximize2 } from "react-icons/fi";
import { LuConstruction } from "react-icons/lu";
import Image from "next/image";

export default function QrShareWidget() {
  return (
    // 🌊 Card Parent: একদম ছোট এবং ফ্লেক্স কল সেন্টারেড উইজেট
    <div className="w-full min-h-[160px] border border-ocean-slate-light/10 rounded-2xl p-4 bg-workable-slate text-workable-text-dark shadow-sm flex flex-col items-center justify-center gap-2 relative group hover:border-workable-dark-green/30 transition-all duration-300 select-none">
      
      {/* 🚧 Top Right: Construction Icon with Short Tooltip */}
      <div className="absolute top-4 right-4">
       <Tooltip delay={0} closeDelay={0}>
                 <Button 
                   variant="flat" 
                   size="sm" 
                   radius="md"
                   className="h-5 min-w-5 p-2 animate-plus bg-amber-400/10 text-amber-400 border border-amber-400/20 font-black cursor-pointer text-[10px]"
                 >
                   <LuConstruction size={12} />
                 </Button>
                 <Tooltip.Content className="text-[10px] font-bold text-black bg-amber-200 border border-ocean-slate-light/10 p-2 shadow-xl rounded-xl">
                   <p>Under Construction</p>
                 </Tooltip.Content>
               </Tooltip>
      </div>

      {/* 📱 Center Content: Interactive QR Wrapper */}
      <div className="relative w-20 h-20 bg-white p-1 rounded-xl shadow-md group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] transition-all duration-300 overflow-hidden mt-1">
        <Image 
          src="/hovercode.png" 
          alt="Job Vista QR Code"
          width={80}
          height={80}
          className="rounded-lg object-contain"
        />
        
        {/* Hover icon overlay */}
        <div className="absolute inset-0 bg-workable-bg/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer">
          <FiMaximize2 size={14} className="text-workable-dark-green animate-pulse" />
        </div>
      </div>

      {/* 🏷️ Dynamic "Scan Me" Tag */}
      <span className="text-[8px] uppercase font-black tracking-widest text-workable-dark-green bg-workable-dark-green/10 px-2 py-0.5 rounded-md group-hover:bg-workable-dark-green group-hover:text-workable-slate transition-all duration-300">
        Scan Me
      </span>

    </div>
  );
}
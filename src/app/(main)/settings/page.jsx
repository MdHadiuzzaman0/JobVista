"use client";
import React from "react";
import { Card, Button } from "@heroui/react";
import { FiLock, FiBell, FiAlertTriangle, FiCpu, FiShield, FiUserCheck, FiSmartphone } from "react-icons/fi";

export default function SettingsPage() {
  
  // ভবিষ্যতে যে ফিচারগুলো আসবে তার একটি স্ট্যাটিক প্রিভিউ লিস্ট
  const upcomingFeatures = [
    {
      title: "Account Security",
      desc: "Change passwords, enable two-factor authentication (2FA), and manage active sessions.",
      icon: <FiLock size={20} className="text-blue-500" />,
      tag: "Security"
    },
    {
      title: "Smart Notifications",
      desc: "Customize your email alerts, instant push notifications, and weekly job match digests.",
      icon: <FiBell size={20} className="text-amber-500" />,
      tag: "Alerts"
    },
    {
      title: "Privacy Controls",
      desc: "Control who sees your profile, portfolio links, and manage recruiter direct message requests.",
      icon: <FiShield size={20} className="text-emerald-500" />,
      tag: "Privacy"
    },
    {
      title: "Connected Devices",
      desc: "Track logged-in browsers, locations, and instantly revoke permissions from unknown setups.",
      icon: <FiSmartphone size={20} className="text-purple-500" />,
      tag: "Devices"
    }
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4 md:p-6 space-y-8 min-h-[80vh] flex flex-col justify-center">
      
      {/* 🚧 মেইন অ্যানিমেটেড আন্ডার কনস্ট্রাকশন সাইনবোর্ড */}
      <div className="text-center space-y-4 max-w-[500px] mx-auto py-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200/60 text-amber-500 animate-bounce shadow-sm">
          <FiCpu size={32} />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
            Settings Under Construction
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed">
            We are engineering a secure and powerful control panel for your account. This page will be fully functional soon!
          </p>
        </div>

        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest bg-amber-100 text-amber-800 border border-amber-200">
            Coming Soon
          </span>
        </div>
      </div>

      <hr className="border-gray-100 max-w-[600px] mx-auto w-full" />

      {/* 📊 স্ট্যাটিক ফিউচার ফিচার প্রিভিউ সেকশন */}
      <div className="space-y-4 max-w-[800px] mx-auto w-full">
        <div className="text-center md:text-left">
          <h2 className="text-xs uppercase font-black tracking-widest text-gray-400">
            What's Cooking?
          </h2>
          <p className="text-sm text-gray-600 font-semibold mt-0.5">
            Preview of upcoming account configurations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {upcomingFeatures.map((feature, idx) => (
            <Card 
              key={idx} 
              className="p-5 border border-gray-100/70 bg-white/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-white border border-gray-100 shadow-sm transition-colors shrink-0">
                  {feature.icon}
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-gray-800 truncate">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* ⚠️ Danger Zone (সিম্পল স্ট্যাটিক ব্যানার) */}
      <div className="max-w-[800px] mx-auto w-full pt-4">
        <div className="border border-red-100 bg-red-50/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left flex-col sm:flex-row">
            <div className="p-2.5 rounded-xl bg-red-50 text-red-500 border border-red-100 shrink-0">
              <FiAlertTriangle size={18} />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-gray-800">Need Immediate Account Changes?</h4>
              <p className="text-[11px] text-gray-400">For account deletion or urgent security resets, please contact direct support.</p>
            </div>
          </div>
          <Button 
            isDisabled
            color="danger" 
            variant="flat" 
            size="sm" 
            radius="xl" 
            className="font-bold text-[11px] px-4 cursor-not-allowed border border-red-200/40"
          >
            Contact Support
          </Button>
        </div>
      </div>

    </div>
  );
}
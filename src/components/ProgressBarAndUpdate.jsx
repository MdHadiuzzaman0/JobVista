"use client";
import { FiCheckCircle, FiXCircle, FiEdit3, FiDownload } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useEffect } from "react";

export default function ProgressBarAndUpdate({ userInfo, setIsEditing, setGlobalPercentage }) {

  // 🎯 ১. এমপ্লয়মেন্টের ফাঁকিবাজি বা ইনভ্যালিড কি-ওয়ার্ড ফিল্টার
  const isValidInput = (value) => {
    if (!value) return false;
    const cleanValue = value.trim().toLowerCase();
    const invalidKeywords = ["n/a", "none", "fresher", "unemployed", "unemployment", ""];
    return !invalidKeywords.includes(cleanValue);
  };

  // 🎯 ২. Personal Details সেকশন চেকিং (২৫%)
  // PersonalInfo.jsx এর রিকোয়ার্ড ফিল্ড: firstName, mobile, gender, maritalStatus
  const isPersonalDone = !!(
    userInfo?.firstName &&
    userInfo?.mobile &&
    userInfo?.gender &&
    userInfo?.maritalStatus
  );
  const personalScore = isPersonalDone ? 25 : 0;

  // 🎯 ৩. Education Background সেকশন চেকিং (২৫%)
  // EducationInfo.jsx এর রিকোয়ার্ড ফিল্ড: degree, institution, cgpa, passingYear
  const isEducationDone = !!(
    userInfo?.degree &&
    userInfo?.institution &&
    userInfo?.cgpa &&
    userInfo?.passingYear
  );
  const educationScore = isEducationDone ? 25 : 0;

  // 🎯 ৪. Employment History সেকশন চেকিং (২৫% - স্টেপ ভিত্তিক)
  // EmploymentInfo.jsx এর ফিল্ড: companyName, designation, jobResponsibility
  let employmentCount = 0;
  if (isValidInput(userInfo?.companyName)) employmentCount++;
  if (isValidInput(userInfo?.designation)) employmentCount++;
  if (isValidInput(userInfo?.jobResponsibility)) employmentCount++;

  const isEmploymentDone = employmentCount === 3;
  let employmentScore = 0;
  if (employmentCount === 1) employmentScore = 8;
  if (employmentCount === 2) employmentScore = 16;
  if (employmentCount === 3) employmentScore = 25;

  // 🎯 ৫. Skills & Links সেকশন চেকিং (২৫%)
  // SkillsAndLinksInfo.jsx এর ফিল্ড: skills (Required), github/portfolio (Optional)
  const isSkillsRequiredDone = !!userInfo?.skills; // রিকোয়ার্ড ফিল্ড চেক (ফিউচার প্রুফ)
  const isLinksOptionalDone = !!(userInfo?.github || userInfo?.portfolio); // অপশনাল ফিল্ড চেক

  const isSkillsSectionDone = isSkillsRequiredDone && isLinksOptionalDone;

  let skillsScore = 0;
  if (isSkillsRequiredDone) skillsScore += 20; // রিকোয়ার্ডের জন্য ২০%
  if (isLinksOptionalDone) skillsScore += 5;   // অপশনালের জন্য ৫%


  // 🎯 ৬. টোটাল ডাইনামিক পার্সেন্টেজ ক্যালকুলেশন
  const percentage = personalScore + educationScore + employmentScore + skillsScore;
  useEffect(() => {
  setGlobalPercentage(percentage);
}, [percentage, setGlobalPercentage]);

  return (
    <div className="bg-workable-bg border border-workable-slate/40 rounded-2xl p-1 shadow-[0_12px_40px_rgba(4,32,43,0.2)] flex flex-col justify-between min-h-[440px] w-full mt-2">

      {/* ------------------ 3️⃣ Progress Bar (Radial Donut Chart) ------------------ */}
      <div className="flex flex-col items-center justify-center py-4 w-full">
        <div
          className="relative flex items-center justify-center rounded-full text-workable-dark-green bg-workable-slate/20 transition-all duration-500"
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
      <div className="grid grid-cols-2 gap-2 w-full">
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


      {/* ------------------ 5️⃣ What is complete & what remains (Checklists) ------------------ */}
      <div className=" w-full pt-2 border-t border-workable-slate/30">

        {/* 📋 Personal Details Section */}
        <div className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${isPersonalDone
            ? 'bg-workable-dark-green/5 border-workable-dark-green/20'
            : 'bg-workable-slate/10 border-workable-slate/30'
          }`}>
          {isPersonalDone ? (
            <FiCheckCircle className="text-workable-dark-green shrink-0" size={14} />
          ) : (
            <FiXCircle className="text-red-500 shrink-0" size={14} />
          )}
          <span className={`text-[12px] font-medium font-sans text-workable-text-dark leading-tight ${isPersonalDone && 'text-workable-text-dark/60 line-through'
            }`}>
            Personal Information <span className={`text-[10px] font-bold ml-1 ${isPersonalDone ? 'text-workable-dark-green/50' : 'text-workable-dark-green'}`}>(+25%)</span>
          </span>
        </div>

        {/* 📋 Educational Background Section */}
        <div className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${isEducationDone
            ? 'bg-workable-dark-green/5 border-workable-dark-green/20'
            : 'bg-workable-slate/10 border-workable-slate/30'
          }`}>
          {isEducationDone ? (
            <FiCheckCircle className="text-workable-dark-green shrink-0" size={14} />
          ) : (
            <FiXCircle className="text-red-500 shrink-0" size={14} />
          )}
          <span className={`text-[12px] font-medium font-sans text-workable-text-dark leading-tight ${isEducationDone && 'text-workable-text-dark/60 line-through'
            }`}>
            Educational Details <span className={`text-[10px] font-bold ml-1 ${isEducationDone ? 'text-workable-dark-green/50' : 'text-workable-dark-green'}`}>(+25%)</span>
          </span>
        </div>

        {/* 📋 Employment History Section */}
        <div className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${isEmploymentDone
            ? 'bg-workable-dark-green/5 border-workable-dark-green/20'
            : 'bg-workable-slate/10 border-workable-slate/30'
          }`}>
          {isEmploymentDone ? (
            <FiCheckCircle className="text-workable-dark-green shrink-0" size={14} />
          ) : (
            <FiXCircle className="text-red-500 shrink-0" size={14} />
          )}
          <span className={`text-[12px] font-medium font-sans text-workable-text-dark leading-tight ${isEmploymentDone && 'text-workable-text-dark/60 line-through'
            }`}>
            Employment History <span className={`text-[10px] font-bold ml-1 ${isEmploymentDone ? 'text-workable-dark-green/50' : 'text-workable-dark-green'}`}>
              ({isEmploymentDone ? "+25%" : `Current: ${employmentScore}%`})
            </span>
          </span>
        </div>

        {/* 📋 Skills & Portfolio Links Section */}
        <div className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${isSkillsSectionDone
            ? 'bg-workable-dark-green/5 border-workable-dark-green/20'
            : 'bg-workable-slate/10 border-workable-slate/30'
          }`}>
          {isSkillsSectionDone ? (
            <FiCheckCircle className="text-workable-dark-green shrink-0" size={14} />
          ) : (
            <FiXCircle className="text-red-500 shrink-0" size={14} />
          )}
          <span className={`text-[12px] font-medium font-sans text-workable-text-dark leading-tight ${isSkillsSectionDone && 'text-workable-text-dark/60 line-through'
            }`}>
            Skills & Social Links <span className={`text-[10px] font-bold ml-1 ${isSkillsSectionDone ? 'text-workable-dark-green/50' : 'text-workable-dark-green'}`}>
              ({isSkillsSectionDone ? "+25%" : `Current: ${skillsScore}%`})
            </span>
          </span>
        </div>

      </div>

    </div>
  );
}
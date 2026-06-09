import { Button, Link } from "@heroui/react";
import ProfileVisibilityStatus from "@/components/ProfileVisibilityStatus";
import { FiEye, FiDownload, FiArrowLeft, FiGlobe, FiBriefcase } from "react-icons/fi";
import ProfileAvailabilityModal from "./ProfileAvailabilityModal";

export default function ProfileHeader2({ user, userInfo, setIsEditing, visibility, availability, globalPercentage }) {
   const getFormattedDate = (updatedAtString) => {
    try {
      if (!updatedAtString) return "Not Available";
      const dateObj = new Date(updatedAtString);
      return dateObj.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
      });
    } catch (error) {
      return "Error";
    }
  };
  const lastUpdateDate = getFormattedDate(userInfo?.updatedAt);

  return (
    <div className="w-full space-y-4 mb-6">

      {/* first section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-heading">JobVista Profile</h2>
          <p className="text-xs text-gray-400 mt-0.5 font-sans">
            Update your JobVista profile anytime. Stay ready for the next opportunity.
          </p>
        </div>

        {/* ডানপাশের স্ট্যাটাস ব্যাজ এবং ব্যাক বাটন কন্টেইনার */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">

          {/* Profile Visibility Status */}
          <ProfileVisibilityStatus user={user} visibility={visibility} />

          {/* Immediately Availability Status */}
          <ProfileAvailabilityModal user={user} availability={availability} />

          {/* ড্যাশবোর্ডে ফিরে যাওয়ার বাটন */}
          <Button onClick={() => setIsEditing(false)}
            className="px-3 py-1.5 border border-pink-200 bg-pink-50 hover:bg-pink-100 text-pink-600 text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-1"
          >
            <FiArrowLeft size={14} />
            <span>Back</span>
          </Button>
        </div>
      </div>

      {/* second section*/}
      <div className="bg-gradient-to-r from-pink-50/30 via-white to-pink-50/10 border border-pink-100/70 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-5">

        {/* বামপাশ: গ্রাফ/রেডিয়াল প্রোগ্রেস এরিয়া এবং টেক্সট */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          {/* 📊 রেডিয়াল প্রোগ্রেস বার (ডোনাট চার্ট) */}
          <div
            className="relative flex items-center justify-center rounded-full text-pink-600 bg-pink-100 shrink-0"
            style={{
              width: "56px",
              height: "56px",
              background: `conic-gradient(var(--color-workable-primary, #db2777) ${globalPercentage * 3.6}deg, #f3f4f6 0deg)`
            }}
          >
            <div className="absolute w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-gray-900">{globalPercentage}%</span>
            </div>
          </div>

          {/* ব্যানার টেক্সট */}
          <div>
            <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug">
              We've built a resume based on your profile
            </h3>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              Last Update Date: <span className="text-gray-600">{lastUpdateDate}</span>
            </p>
          </div>
        </div>

        {/* ডানপাশ: ডাউনলোড এবং ভিউ প্রোফাইল অ্যাকশন বাটনস */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button className="text-pink-600 hover:text-pink-700 text-xs font-bold flex items-center gap-1.5 transition-colors px-3 py-2 rounded-xl hover:bg-pink-50/50 cursor-pointer">
            <FiDownload size={14} />
            <span>Download Profile</span>
          </button>

          <Link href='/myProfile' className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold rounded-xl shadow-md shadow-pink-600/10 transition-all flex items-center gap-1.5 cursor-pointer">
            <FiEye size={14} />
            <span>View Profile</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
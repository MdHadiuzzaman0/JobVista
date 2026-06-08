"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { FiBookmark } from "react-icons/fi"; 
import { FaBookmark } from "react-icons/fa"; 
import { handleDeleteSavedJob, handleSaveJob } from "@/lib/action"; 
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// 🎯 userInfo প্রপ্স এখানে রিসিভ করা হলো
function SaveButton({ job, email, allSavedJob, userInfo }) {
  const router = useRouter();
  const { title, _id } = job;

  const isAlreadySaved = allSavedJob?.some(singleJob => singleJob.jobId === _id);
  const [saveValue, setSaveValue] = useState(isAlreadySaved);
  const [loading, setLoading] = useState(false); // ⏳ ট্রানজিশন স্মুথ করার জন্য লোডিং স্টেট
  
  // ⚡ ইউজারের প্ল্যান অনুযায়ী ডাইনামিক লিমিট সেট করা (Free হলে ৩, Pro/Enterprise হলে আনলিমিটেড)
  const currentPlan = userInfo?.subscription || userInfo?.planType || "Free";
  const savedLimit = currentPlan === "Free" ? 3 : Infinity; 
  
  // 🔒 বাটন ডিজেবল করার ডাইনামিক কন্ডিশন
  const isLimitReached = allSavedJob?.length >= savedLimit && !saveValue;

  async function handleSaveToggle() {
    setLoading(true);
    if (saveValue) {
      const savedItem = allSavedJob?.find(singleJob => singleJob.jobId === _id);
      const result = await handleDeleteSavedJob(savedItem._id); 
      if (result.success) {
        setSaveValue(false); 
        toast.error(`${title} removed!`);
        router.refresh(); // 🔄 ডাটাবেজ চেঞ্জের পর প্যারেন্ট সার্ভার কম্পোনেন্টকে রিফ্রেশ করবে   
      }
    } else {
      const { _id, ...jobWithoutId } = job; 
      const savedData = { ...jobWithoutId, email, jobId: _id }; 
      const result = await handleSaveJob(savedData); 
      if (result.success) {
        setSaveValue(true); 
        toast.success(`${title} saved!`);
        router.refresh(); // 🔄 রিফ্রেশ দিলে 'allSavedJob.length' এর নতুন কাউন্ট সার্ভার থেকে চলে আসবে 
      }
    }
    setLoading(false);
  }

  return (
    <Button 
      isDisabled={isLimitReached || loading} // 🔒 ডাইনামিক লিমিট ক্রস হলে বা লোডিং থাকলে ডিজেবল হবে
      isLoading={loading}
      onPress={handleSaveToggle}
      variant={saveValue ? "flat" : "solid"}
      className={`font-heading font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer
        ${saveValue
          ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
          : "bg-workable-dark-green text-white hover:bg-workable-dark-green/90 shadow-md shadow-green-100"
        } ${isLimitReached && "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"}`}
    >
      {!loading && (saveValue ? (
        <FaBookmark size={14} className="text-emerald-600" />
      ) : (
        <FiBookmark size={14} />
      ))}
    </Button>
  );
}

export default SaveButton;
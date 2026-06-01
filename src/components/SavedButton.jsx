"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { FiBookmark } from "react-icons/fi"; // নরমাল বুকমার্ক আইকন
import { FaBookmark } from "react-icons/fa"; // ফিল্ড বা সেভড বুকমার্ক আইকন
import { handleSaveJob } from "@/lib/action"; // তোমার সার্ভার অ্যাকশন
import { toast } from "react-toastify";

function SaveButton({ job, email }) {
  // ১. সেভড স্টেট ট্র্যাকিংয়ের জন্য (true/false)
  const [isSaved, setIsSaved] = useState(false);
  const [saveText, setSaveText] = useState("Save Job");

  const { title } = job;
  const { _id, ...jobWithoutId } = job


  // ২. ক্লিক করলে যে ফাংশন ফায়ার হবে
  async function handleSaveToggle() {
    const result = await handleSaveJob({ ...jobWithoutId, email });
    if (result.success) {
      if (!isSaved) {
        setIsSaved(true);
        setSaveText("Saved");
        toast.success(`${title} saved successfully!`);
      } else {
        setIsSaved(false);
        setSaveText("Save Job");
        toast.info(`${title} removed from saved list!`);
      }
    }
  }

  return (
    <Button
      onPress={handleSaveToggle}
      variant={isSaved ? "flat" : "solid"}
      className={`font-heading font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer
        ${isSaved
          ? "bg-purple-50 text-workable-dark-green border border-purple-100"
          : "bg-workable-dark-green text-white hover:bg-workable-dark-green/90 shadow-md shadow-green-100"
        }`}
    >
      {/* ৩. ডাইনামিক আইকন: সেভ হলে ভরা বুকমার্ক, না হলে খালি বুকমার্ক */}
      {isSaved ? (
        <FaBookmark size={14} className="text-workable-dark-green" />
      ) : (
        <FiBookmark size={14} />
      )}

      {/* ৪. ডাইনামিক স্টেট টেক্সট (Save Job / Saved) */}
      <span className="capitalize">{saveText}</span>
    </Button>
  );
}

export default SaveButton;
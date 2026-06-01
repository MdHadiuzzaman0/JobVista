"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { FiBookmark } from "react-icons/fi"; 
import { FaBookmark } from "react-icons/fa"; 
import { handleDeleteSavedJob, handleSaveJob } from "@/lib/action"; 
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function SaveButton({ job, email, allSavedJob }) {
  const router = useRouter();
  const { title, _id } = job;

  const isAlreadySaved = allSavedJob?.some(singleJob => singleJob.jobId === _id);
  const [saveValue, setSaveValue] = useState(isAlreadySaved);

  async function handleSaveToggle() {
    if (saveValue) {
      const savedItem = allSavedJob?.find(singleJob => singleJob.jobId === _id);
      const result = await handleDeleteSavedJob(savedItem._id); 
      if (result.success) {
        setSaveValue(false); 
        toast.error(`${title} removed!`);
        router.refresh();    
      }
    } else {
      const { _id, ...jobWithoutId } = job; 
      const savedData = { ...jobWithoutId, email, jobId: _id }; 
      const result = await handleSaveJob(savedData); 
      if (result.success) {
        setSaveValue(true); 
        toast.success(`${title} saved!`);
        router.refresh();   
      }
    }
  }

  return (
    <Button
      onPress={handleSaveToggle}
      variant={saveValue ? "flat" : "solid"}
      className={`font-heading font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer
        ${saveValue
          ? "bg-emerald-50 text-emerald-600 border border-emerald-100" // Premium Soft Green
          : "bg-workable-dark-green text-white hover:bg-workable-dark-green/90 shadow-md shadow-green-100"
        }`}
    >
      {saveValue ? (
        <FaBookmark size={14} className="text-emerald-600" />
      ) : (
        <FiBookmark size={14} />
      )}
    </Button>
  );
}

export default SaveButton;
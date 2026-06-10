"use client"; // ১. ব্রাউজারকে সিগনাল দিচ্ছে যে এই ফাইলে ইউজারের মাউস ক্লিক বা ইভেন্ট হ্যান্ডেল হবে।

import { useRouter, useSearchParams } from "next/navigation"; 

export default function Filter() {
  const router = useRouter(); // ২. ব্রাউজারের URL পরিবর্তন করার টুলটি রেডি করা হলো।
  const searchParams = useSearchParams(); // ৩. URL-এ বর্তমানে কী কুয়েরি আছে তা পড়ার টুল।
  //console.log => searchParams: { "page": "2", "type": "Remote" } | স্পেশাল ব্রাউজার অবজেক্ট (Read-Only)
  
  const currentType = searchParams.get("type") || "All";
  // ৪. URL থেকে 'type' এর মান টানছে। যদি URL-এ কিছু না থাকে, তবে currentType = "All"।

  const handleFilterChange = (e) => {
    const selectedType = e.target.value; 
    // 🎯 লাইন চেঞ্জ: ইউজার "Remote" সিলেক্ট করায় এখন: selectedType = "Remote"

    const params = new URLSearchParams(searchParams.toString());
    // 🎯 লাইন চেঞ্জ: বর্তমান URL-এর কুয়েরিকে এডিট করার অবজেক্ট বানানো হলো।
    // console.log => "page=2&type=Remote"

    if (selectedType === "All") {
      params.delete("type"); 
    } else {
      params.set("type", selectedType); 
      // 🎯 লাইন চেঞ্জ: "Remote" যেহেতু "All" না, তাই params-এর ভেতর সেট হলো: type=Remote
    }

    router.push(`/explore_jobs?${params.toString()}`);
    // 🎯 লাইন চেঞ্জ: params.toString() এখন "type=Remote"। 
    // এই লাইনের পর ব্রাউজারের URL বদলে হয়ে গেল: localhost:3000/jobs?type=Remote
  };

  return (
    // 🎯 সার্চ বক্সের মতো হুবহু একই প্যারেন্ট ডিভ (সাদা ব্যাকগ্রাউন্ড, বর্ডার ও শ্যাডো)
        <div className="bg-white border border-workable-text-muted/10 p-4 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex items-center gap-3 focus-within:border-workable-dark-green/20 transition-all duration-200 relative">
            
            <select
                value={currentType}
                onChange={handleFilterChange}
                // 🎯 appearance-none দিয়ে ব্রাউজারের ডিফল্ট ডিজাইন তাড়ালাম, বাকিগুলো সার্চ ইনপুটের মতো করলাম
                className="w-full font-body text-sm text-black bg-transparent focus:outline-none py-1 cursor-pointer appearance-none pr-8"
            >
                <option value="All" className="bg-white text-black">All Job</option>
                <option value="Full-time" className="bg-white text-black">Full-time</option>
                <option value="Part-time" className="bg-white text-black">Part-time</option>
                <option value="Contract" className="bg-white text-black">Contract</option>
                <option value="Remote" className="bg-white text-black">Remote</option>
            </select>

            {/* 🎯 ড্রপডাউনের ডানপাশে বসানোর জন্য একটি কাস্টম তীর চিহ্ন আইকন */}
            <div className="absolute right-4 pointer-events-none text-workable-text-muted">
                <FiChevronDown className="text-xl" />
            </div>
        </div>
  );
}
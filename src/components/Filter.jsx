"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {  Dropdown,  Button,  Label,  Description,  Separator} from '@heroui/react';
import { FiChevronDown } from "react-icons/fi";

const FilterDropdown = ({ categoryOptions, typeOptions }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // ১. ইউআরএল (URL) থেকে কারেন্টলি একটিভ ফিল্টার রিড করা
    const currentCategory = searchParams.get("category");
    const currentType = searchParams.get("type");

    // ২. মেইন ফিল্টার বাটনের টেক্সট ডাইনামিক করা
    let buttonText = "Filter Jobs";
    if (currentCategory) buttonText = `Category: ${currentCategory}`;
    if (currentType) buttonText = `Type: ${currentType}`;

    // ৩. ফিল্টার হ্যান্ডলার (টগলিং এবং রিসেট লজিক সহ)
    const handleFilterClick = (filterType, value) => {
        // const params = new URLSearchParams(searchParams.toString()); // ফ্রেশ খালি অবজেক্ট
        //params.set("page", "1"); // ফিল্টার চেঞ্জ হলে পেজ ১ নম্বরে চলে যাবে

        const params = new URLSearchParams(searchParams.toString()); // old url link

        // চেক করছি ইউজার অলরেডি একটিভ থাকা ফিল্টারেই আবার ক্লিক করেছে কিনা
        const isCurrentlyActive = searchParams.get(filterType) === value;

        // 🎯 টগল এবং 'All' অপশনের কন্ডিশনাল চেক
        if (value === "All" || isCurrentlyActive) {
            // যদি 'All' এ ক্লিক করে বা রানিং ফিল্টারে আবার ক্লিক করে, 
            // তবে খালি অবজেক্টে ওটা সেট হবে না (ফলে ইউআরএল থেকে ওটা ডিলিট হয়ে যাবে)
            params.delete(filterType); 
        } else {
            // একদম নতুন ফিল্টার হলে সেটা খালি অবজেক্টে পুশ হবে
            params.set(filterType, value); 
        }
        
        // ফাইনাল ইউআরএল পুশ (যেমন: ?page=1 অথবা ?page=1&type=Remote)
        router.push(`?${params.toString()}`);
    };

    // ৪. এক ক্লিকে সব ফিল্টার সাফ করার ফাংশন
    const handleClearFilter = () => {
        router.push("?"); // ইউআরএল একদম ডিফল্ট অবস্থায় নিয়ে যাবে
    };

    return (
        <Dropdown>
            {/* 🔘 মেইন বাটন ট্রিগার */}
            <Dropdown.Trigger
                    className="bg-gray-200 border-workable-text-muted/10 p-6 rounded-2xl font-body text-sm font-semibold text-workable-dark-green shadow-[0_4px_25px_rgba(0,0,0,0.02)] cursor-pointer flex justify-between items-center"
                >
                    <span className="text-xl">{buttonText}</span>
                    <FiChevronDown className="text-lg text-workable-text-muted ml-2 inline-block" />
               
            </Dropdown.Trigger>

            {/* 🍿 মেইন পপওভার বডি */}
            <Dropdown.Popover className="bg-white border border-gray-100 rounded-2xl shadow-xl min-w-[220px]">
                <Dropdown.Menu aria-label="Job Filter Menu">

                    <Dropdown.Item 
                        onPress={handleClearFilter}
                        className="text-red-500 text-center hover:bg-red-50 font-medium cursor-pointer"
                    >
                        <Label>Clear Filters</Label>
                    </Dropdown.Item>

                    <Separator className="my-1 bg-gray-100" />

                    {/* 🗂️ সাব-মেনু ১: জব ক্যাটাগরি */}
                    <Dropdown.SubmenuTrigger>
                        <Dropdown.Item className={`cursor-pointer ${currentCategory ? "text-workable-dark-green font-bold bg-workable-bg" : ""}`}>
                            <Label>Job Category</Label>
                            <Dropdown.SubmenuIndicator />
                        </Dropdown.Item>
                        
                        {/* ক্যাটাগরি অপশনস লিস্ট পপওভার */}
                        <Dropdown.Popover className="bg-white border border-gray-100 rounded-2xl shadow-xl min-w-[200px]">
                            <Dropdown.Menu aria-label="Categories">
                                <Dropdown.Item 
                                    onPress={() => handleFilterClick("category", "All")}
                                    className={`cursor-pointer ${!currentCategory ? "text-workable-dark-green font-bold bg-workable-bg" : ""}`}
                                >
                                    <Label>All Categories</Label>
                                    {!currentCategory && <Dropdown.ItemIndicator />}
                                </Dropdown.Item>

                                {/* প্রপ্স থেকে আসা ডাইনামিক ক্যাটাগরি লিস্ট */}
                                {categoryOptions.map((opt) => (
                                    <Dropdown.Item 
                                        key={opt}
                                        onPress={() => handleFilterClick("category", opt)}
                                        className={`cursor-pointer ${currentCategory === opt ? "bg-workable-bg text-workable-dark-green font-bold" : ""}`}
                                    >
                                        <Label>{opt}</Label>
                                        {currentCategory === opt && <Dropdown.ItemIndicator />}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown.SubmenuTrigger>

                    {/* 🗂️ সাব-মেনু ২: জব টাইপ */}
                    <Dropdown.SubmenuTrigger>
                        <Dropdown.Item className={`cursor-pointer ${currentType ? "text-workable-dark-green font-bold bg-workable-bg" : ""}`}>
                            <Label>Job Type</Label>
                            <Dropdown.SubmenuIndicator />
                        </Dropdown.Item>
                        
                        {/* টাইপ অপশনস লিস্ট পপওভার */}
                        <Dropdown.Popover className="bg-white border border-gray-100 rounded-2xl shadow-xl min-w-[180px]">
                            <Dropdown.Menu aria-label="Job Types">
                                {/* রিসেট করার জন্য ডিফল্ট 'All Types' অপশন */}
                                <Dropdown.Item 
                                    onPress={() => handleFilterClick("type", "All")}
                                    className={`cursor-pointer ${!currentType ? "text-workable-dark-green font-bold bg-workable-bg" : ""}`}
                                >
                                    <Label>All Types</Label>
                                    {!currentType && <Dropdown.ItemIndicator />}
                                </Dropdown.Item>

                                {/* প্রপ্স থেকে আসা ডাইনামিক টাইপ লিস্ট */}
                                {typeOptions.map((opt) => (
                                    <Dropdown.Item 
                                        key={opt}
                                        onPress={() => handleFilterClick("type", opt)}
                                        className={`cursor-pointer ${currentType === opt ? "bg-workable-bg text-workable-dark-green font-bold" : ""}`}
                                    >
                                        <Label>{opt}</Label>
                                        {currentType === opt && <Dropdown.ItemIndicator />}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown.SubmenuTrigger>

                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};

export default FilterDropdown;












// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { FiChevronDown, FiChevronRight, FiCheck } from "react-icons/fi";

// const FilterDropdown = ({ categoryOptions, typeOptions }) => {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const dropdownRef = useRef(null);
    
//     // স্টেটস
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeSubMenu, setActiveSubMenu] = useState(null); // 'category' অথবা 'type'

//     // ইউআরএল থেকে কারেন্ট ফিল্টার চেক করা
//     const currentCategory = searchParams.get("category");
//     const currentType = searchParams.get("type");

//     // বাটন টেক্সট ডাইনামিক করা
//     let buttonText = "Filter Jobs";
//     if (currentCategory) buttonText = `Category: ${currentCategory}`;
//     if (currentType) buttonText = `Type: ${currentType}`;

//     const handleFilterClick = (filterType, value) => {
//         const params = new URLSearchParams(); 
//         if (value !== "All") {
//             params.set(filterType, value); // শুধু যেটা সিলেক্ট করছে সেটা সেট হবে
//         }

//         router.push(`?${params.toString()}`);
//         setIsOpen(false);
//         setActiveSubMenu(null);
//     };

//     const handleClearFilter = () => {
//         router.push("?"); // সব কুয়েরি ডিলিট করে ফ্রেশ ইউআরএল
//         setIsOpen(false);
//         setActiveSubMenu(null);
//     };

//     // বাইরের ক্লিকে বন্ধ হওয়া
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//                 setActiveSubMenu(null);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <div className="relative w-full md:w-64" ref={dropdownRef}>
//             {/* মেইন বাটন */}
//             <button
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="w-full bg-white border border-workable-text-muted/10 p-4 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex items-center justify-between font-body text-sm text-workable-text-dark focus:border-workable-dark-green/20 transition-all duration-200 cursor-pointer"
//             >
//                 <span className="truncate font-semibold text-workable-dark-green">{buttonText}</span>
//                 <FiChevronDown className={`text-xl text-workable-text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
//             </button>

//             {/* মেইন ড্রপডাউন মেনু */}
//             {isOpen && (
//                 <div className="absolute left-0 mt-2 w-full bg-white border border-workable-text-muted/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-50 py-2 flex flex-col md:flex-row">
                    
//                     {/* বাম পাশের মেইন টপিক লিস্ট */}
//                     <div className="w-full md:w-48 border-r border-gray-100">
//                         <button
//                             type="button"
//                             onClick={handleClearFilter}
//                             className="w-full text-left px-4 py-3 text-sm font-body text-red-500 hover:bg-red-50 transition-all"
//                         >
//                             Clear All Filters
//                         </button>

//                         {/* ক্যাটাগরি মেইন বাটন */}
//                         <button
//                             type="button"
//                             onMouseEnter={() => setActiveSubMenu("category")}
//                             onClick={() => setActiveSubMenu("category")}
//                             className={`w-full text-left px-4 py-3 text-sm font-body flex items-center justify-between transition-all ${activeSubMenu === "category" || currentCategory ? "bg-workable-bg text-workable-dark-green font-semibold" : "text-workable-text-dark"}`}
//                         >
//                             <span>Job Category</span>
//                             <FiChevronRight />
//                         </button>

//                         {/* টাইপ মেইন বাটন */}
//                         <button
//                             type="button"
//                             onMouseEnter={() => setActiveSubMenu("type")}
//                             onClick={() => setActiveSubMenu("type")}
//                             className={`w-full text-left px-4 py-3 text-sm font-body flex items-center justify-between transition-all ${activeSubMenu === "type" || currentType ? "bg-workable-bg text-workable-dark-green font-semibold" : "text-workable-text-dark"}`}
//                         >
//                             <span>Job Type</span>
//                             <FiChevronRight />
//                         </button>
//                     </div>

//                     {/* ডান পাশের সাব-ড্রপডাউন মেনু (ডাইনামিক) */}
//                     {activeSubMenu && (
//                         <div className="w-full md:w-56 h-64 overflow-y-auto bg-gray-50/50 p-1 transition-all duration-200">
//                             {activeSubMenu === "category" && (
//                                 <>
//                                     {categoryOptions.map((opt) => (
//                                         <button
//                                             key={opt}
//                                             type="button"
//                                             onClick={() => handleFilterClick("category", opt)}
//                                             className={`w-full text-left px-4 py-2.5 text-xs font-body rounded-lg flex items-center justify-between mb-1 last:mb-0 transition-all ${currentCategory === opt ? "bg-workable-dark-green text-white font-semibold" : "text-workable-text-dark hover:bg-white"}`}
//                                         >
//                                             <span className="truncate">{opt}</span>
//                                             {currentCategory === opt && <FiCheck />}
//                                         </button>
//                                     ))}
//                                 </>
//                             )}

//                             {activeSubMenu === "type" && (
//                                 <>
//                                     {typeOptions.map((opt) => (
//                                         <button
//                                             key={opt}
//                                             type="button"
//                                             onClick={() => handleFilterClick("type", opt)}
//                                             className={`w-full text-left px-4 py-2.5 text-xs font-body rounded-lg flex items-center justify-between mb-1 last:mb-0 transition-all ${currentType === opt ? "bg-workable-dark-green text-white font-semibold" : "text-workable-text-dark hover:bg-white"}`}
//                                         >
//                                             <span>{opt}</span>
//                                             {currentType === opt && <FiCheck />}
//                                         </button>
//                                     ))}
//                                 </>
//                             )}
//                         </div>
//                     )}

//                 </div>
//             )}
//         </div>
//     );
// };

// export default FilterDropdown;


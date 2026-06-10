import { FiSearch, FiMapPin } from "react-icons/fi";
import JobCard from "@/components/JobCard";
import { getAllJobs, getAppliedJobs, getSavedJobs, getUserInfo } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Filter from "@/components/Filter";
import { getFilteredJobs } from "@/lib/action";

const AllJobsPage = async ({searchParams: searchParamsPromise}) => {
    // const allJobs = await getAllJobs();
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const email = session?.user?.email;
    const allAppliedJob = await getAppliedJobs(email)
    const allSavedJob = await getSavedJobs(email)
    const userInfo = await getUserInfo(email)

    const searchParams = await searchParamsPromise;  
    //Next.js-এর নতুন ভার্সনে (Next.js 15+) সার্ভার কম্পোনেন্টে searchParams, params এখন আর সাধারণ অবজেক্ট নাই, এখন একটা Promise (প্রমিস) হয়ে গেছে। so await must use
    
    const selectedType = searchParams?.type || "All";
    // 🎯 লাইন চেঞ্জ: searchParams.type থেকে "Remote" টেনে বের করা হলো। client side hoile get use korte hoito, এখন: selectedType = "Remote"
    
    const allJobs = await getFilteredJobs(selectedType);
    // 🎯 লাইন চেঞ্জ: আমাদের action.js-এর ফাংশনকে কল করা হলো এইভাবে: getFilteredJobs("Remote")
    // ডাটা পাস হয়ে চলে গেল action.js ফাইলে।

    return (
        <div className="bg-workable-bg min-h-screen pt-12 pb-20 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">

                <div className="mb-7 text-left">
                    <h1 className="font-heading text-3xl md:text-4xl font-black text-workable-text-dark mb-3">
                        Find Your Dream Job
                    </h1>
                    <p className="font-body text-workable-text-muted text-sm md:text-base">
                        Explore the latest openings from top-tier global companies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white border border-workable-text-muted/10 p-4 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex items-center gap-3 focus-within:border-workable-dark-green/20 transition-all duration-200">
                        <FiSearch className="text-workable-dark-green text-xl shrink-0" />
                        <input
                            type="text"
                            placeholder="Search by job title, keywords, or company..."
                            className="w-full font-body text-sm text-workable-text-dark placeholder-workable-text-muted/50 focus:outline-none py-1"
                        />
                    </div>
                    <Filter />
                </div>

                {/* 🎯 এখানে আসল কন্ডিশনাল খেলা শুরু */}
                {allJobs && allJobs.length > 0 ? (
                    // 🟢 কন্ডিশন সত্য হলে (ডাটা থাকলে) এই গ্রিডটা শো করবে
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allJobs.map((job) => (
                            <JobCard 
                                key={job._id || job.id} 
                                job={job} 
                                email={email} 
                                allAppliedJob={allAppliedJob} 
                                allSavedJob={allSavedJob} 
                                userInfo={userInfo}
                            />
                        ))}
                    </div>
                ) : (
                    // 🔴 কন্ডিশন মিথ্যা হলে (ডাটা না থাকলে) এই সুন্দর খালি বক্সটা শো করবে
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-workable-text-muted/10 shadow-[0_4px_25px_rgba(0,0,0,0.02)] text-center px-4">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-3xl mb-4 font-bold">
                            🔍
                        </div>
                        <h3 className="font-heading text-xl font-bold text-workable-text-dark mb-2">
                            No {selectedType !== "All" ? selectedType : ""} Jobs Found
                        </h3>
                        <p className="font-body text-workable-text-muted text-sm max-w-sm">
                            We couldn't find any job matches for your current filter selection. Try changing the job type or searching for something else!
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AllJobsPage;
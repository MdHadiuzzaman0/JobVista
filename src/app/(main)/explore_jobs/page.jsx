import JobCard from "@/components/JobCard";
import { getAppliedJobs, getSavedJobs, getUserInfo } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Filter from "@/components/Filter"; 
import Search from "@/components/Search"; // 🎯 নতুন সার্চবক্স ইমপোর্ট করলাম
import { getFilteredJobs } from "@/lib/action";

const AllJobsPage = async ({ searchParams: searchParamsPromise }) => {
    // ১. ইউজার সেশন এবং পারসোনাল ডাটা তুলে আনা
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const email = session?.user?.email;
    const allAppliedJob = await getAppliedJobs(email);
    const allSavedJob = await getSavedJobs(email);
    const userInfo = await getUserInfo(email);

    // ২. Next.js 15+ এর নিয়ম অনুযায়ী searchParams প্রমিস await করা
    const searchParams = await searchParamsPromise;  
    
    // ৩. ইউআরএল থেকে ক্যাটাগরি, টাইপ এবং সার্চ আলাদা করা
    const category = searchParams?.category || "";
    const type = searchParams?.type || "";
    const search = searchParams?.search || "";

    // 🚀 তোমার সেই ফেভারিট অবজেক্ট স্টাইল অ্যাকশন কল
    const { jobs: allJobs } = await getFilteredJobs({ category, type, search });

    // ৪. ফিল্টারের ভেতরের ডাইনামিক অপশন লিস্ট
    const categoryOptions = ["Engineering", "Product", "Data & Analytics", "Design", "Marketing"];
    const typeOptions = ["Full-time", "Part-time", "Remote", "on-Site", "Hybrid", "Contract"];

    // নো ডাটা বক্সে সুন্দর নাম দেখানোর জন্য
    const activeFilterName = search || category || type || "All";

    return (
        <div className="bg-workable-bg min-h-screen pt-12 pb-20 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* টাইটেল সেকশন */}
                <div className="mb-7 text-left">
                    <h1 className="font-heading text-3xl md:text-4xl font-black text-workable-text-dark mb-3">
                        Find Your Dream Job
                    </h1>
                    <p className="font-body text-workable-text-muted text-sm md:text-base">
                        Explore the latest openings from top-tier global companies.
                    </p>
                </div>

                {/* সার্চবক্স এবং ফিল্টার ড্রপডাউন রো */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    {/* 🎯 পুরনো ইনপুট ফেলে দিয়ে আমাদের ডাইনামিক ক্লায়েন্ট সার্চবক্স বসালাম */}
                    <Search />
                    
                    {/* HeroUI অ্যানাটমি ফিল্টার ড্রপডাউন */}
                    <Filter
                        categoryOptions={categoryOptions} 
                        typeOptions={typeOptions} 
                    />
                </div>

                {/* 🎯 কন্ডিশনাল জবের মেইন গ্রিড */}
                {allJobs && allJobs.length > 0 ? (
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
                    /* 🔴 নো ডাটা ফাউন্ড বক্স */
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-workable-text-muted/10 shadow-[0_4px_25px_rgba(0,0,0,0.02)] text-center px-4">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-3xl mb-4 font-bold">
                            🔍
                        </div>
                        <h3 className="font-heading text-xl font-bold text-workable-text-dark mb-2">
                            No "{activeFilterName}" Jobs Found
                        </h3>
                        <p className="font-body text-workable-text-muted text-sm max-w-sm">
                            We couldn't find any job matches for your current selection. Try resetting the filter or searching for something else!
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AllJobsPage;
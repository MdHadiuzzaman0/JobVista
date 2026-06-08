import { FiSearch, FiMapPin } from "react-icons/fi";
import JobCard from "@/components/JobCard";
import { getAllJobs, getAppliedJobs, getSavedJobs, getUserInfo } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AllJobsPage = async () => {
    const allJobs = await getAllJobs();
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const email = session?.user?.email;
    const allAppliedJob = await getAppliedJobs(email)
    const allSavedJob = await getSavedJobs(email)
    const userInfo = await getUserInfo(email)

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

                    <div className="bg-white border border-workable-text-muted/10 p-4 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex items-center gap-3 focus-within:border-workable-dark-green/20 transition-all duration-200">
                        <FiMapPin className="text-workable-dark-green text-xl shrink-0" />
                        <input
                            type="text"
                            placeholder="Filter by city, state, or country..."
                            className="w-full font-body text-sm text-workable-text-dark placeholder-workable-text-muted/50 focus:outline-none py-1"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allJobs?.map((job) => (
                        <JobCard key={job._id || job.id} job={job} email={email} allAppliedJob={allAppliedJob} allSavedJob={allSavedJob} userInfo={userInfo}/>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllJobsPage;
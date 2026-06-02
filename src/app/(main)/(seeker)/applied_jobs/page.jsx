import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FiMapPin, FiClock, FiBriefcase } from "react-icons/fi";
import { getAppliedJobs } from "@/lib/data";
import AppliedDeleteButton from "@/components/AppliedDeleteButton";
import Image from "next/image";

// Extracts time directly from MongoDB ObjectId safely across Server/Client data types
function getRelativeTime(id) {
  try {
    if (!id) return "";
    
    const createdDate = typeof id.getTimestamp === "function" 
      ? id.getTimestamp() 
      : new Date(parseInt(id.toString().substring(0, 8), 16) * 1000);

    const now = new Date();
    const diffInSeconds = Math.floor((now - createdDate) / 1000);
    
    if (diffInSeconds < 60) return "Just now";
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return "Yesterday";
    return `${diffInDays} days ago`;
  } catch (error) {
    return "";
  }
}

export default async function AppliedJobsPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const email = session?.user?.email;
  const appliedJobs = email ? await getAppliedJobs(email) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 mt-20 py-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        {appliedJobs.length === 0 ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.01)]">
            <div className="w-14 h-14 bg-emerald-50 text-workable-dark-green rounded-full flex items-center justify-center mx-auto mb-3">
              <FiBriefcase size={24} />
            </div>
            <h2 className="font-heading font-black text-lg text-workable-text-dark mb-1">No Applications Found</h2>
            <p className="font-body text-xs text-workable-text-muted max-w-xs mx-auto">
              You haven't applied to any jobs yet. Explore opening jobs and start pitching your profile!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {appliedJobs.map((item) => {
              const { _id, title, type, location, deadline, company, salary, currency } = item;
              const currencySymbol = currency === "USD" ? "$" : "৳";           
              const relativeTimeStr = getRelativeTime(_id);

              return (
                <div
                  key={_id?.toString()}
                  className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden"
                >
                  {/* Left Section: Logo & Details Core Container */}
                  <div className="flex items-start gap-4 min-w-0 flex-1">
                    
                    {/* Company Brand Logo Image Container */}
                    <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 relative">
                      {company?.logo ? (
                        <Image 
                          src={company.logo} 
                          alt={company?.name || "Company Logo"} 
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="font-heading font-black text-sm text-workable-text-muted uppercase">
                          {company?.name?.substring(0, 2) || "CO"}
                        </span>
                      )}
                    </div>

                    {/* Metadata fields wrapper */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="bg-workable-dark-green/10 text-workable-dark-green px-2 py-0.5 rounded text-[8px] font-heading font-black uppercase tracking-wider">
                          {type || "N/A"}
                        </span>
                        <span className="text-[11px] font-body text-workable-text-muted font-semibold">
                          {company?.name || "N/A"}       
                        </span>
                      </div>

                      <h2 className="font-heading font-black text-base md:text-lg text-workable-text-dark truncate leading-snug">
                        {title}
                      </h2>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-body text-workable-text-muted pt-0.5">
                        <span className="flex items-center gap-1.5">
                          <FiMapPin className="text-slate-400 shrink-0" size={13} /> {location}
                        </span>
                        <span className="flex items-center gap-1.5 text-rose-600 font-medium">
                          <FiClock className="shrink-0" size={13} /> Deadline: {deadline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Salary Details, Actions & Dynamic Relative Time */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-slate-50 shrink-0 w-full md:w-auto self-stretch">
                    
                    <div className="flex items-center gap-4">
                      <div className="text-left md:text-right">
                        <p className="text-[9px] uppercase font-bold tracking-wider text-workable-text-muted mb-0.5">
                          Expected Salary
                        </p>
                        <p className="font-heading font-black text-sm md:text-base text-workable-dark-green leading-none">
                          {currencySymbol}{salary?.toLocaleString()} <span className="text-[10px] font-medium text-workable-text-muted">/mo</span>
                        </p>
                      </div>

                      <div className="shrink-0">
                        <AppliedDeleteButton jobId={_id} jobTitle={title}/>
                      </div>
                    </div>

                    {/* Dynamic Application Submission Timeline Tracking */}
                    {relativeTimeStr && (
                      <span className="text-[10px] font-sans font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md md:self-end">
                        Applied {relativeTimeStr}
                      </span>
                    )}

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FiMapPin, FiClock, FiTrash2, FiBriefcase } from "react-icons/fi";
import { getSavedJobs } from "@/lib/data"; // তোমার ডাটা ফেচিং ফাংশন (getSavedJobs)
import { Button } from "@heroui/react";
import SavedDeleteButton from "@/components/SavedDeleteButton";

export default async function SavedJobsPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const email = session?.user?.email;
  // সেভড জবের ডাটা নিয়ে আসা
  const savedJobs = email ? await getSavedJobs(email) : [];

  return (
  // 🎨 এখানে ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট এবং টেক্সট/বর্ডার কালার থিম চেঞ্জ করা হয়েছে
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 mt-20 py-8 px-4 md:px-8">
    <div className="max-w-4xl mx-auto"> 

      {savedJobs.length === 0 ? (
        // 🔹 নো ডাটা বক্সের পার্পল বর্ডার বদলে স্লিম শ্লেট বর্ডার করা হয়েছে
        <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.01)]">
          <div className="w-14 h-14 bg-emerald-50 text-workable-dark-green rounded-full flex items-center justify-center mx-auto mb-3">
            <FiBriefcase size={24} />
          </div>
          <h2 className="font-heading font-black text-lg text-workable-text-dark mb-1">No Saved Jobs</h2>
          <p className="font-body text-xs text-workable-text-muted max-w-xs mx-auto">
            You haven't saved any jobs yet. Bookmark interesting openings to track them here!
          </p>
        </div>
      ) : (

        <div className="space-y-3"> 
          {savedJobs.map((item) => {
            const { _id, title, type, location, deadline, company, salaryMin, salaryMax, currency } = item;
            console.log(_id, _id.toString())
            const currencySymbol = currency === "USD" ? "$" : "৳";

            return (
              <div
                key={_id}
                // 🔹 কার্ডের বর্ডার border-purple-100 থেকে পরিবর্তন করে border-slate-100 করা হয়েছে
                className="bg-white border border-slate-100 rounded-xl p-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                {/* বাম পাশের ইনফো সেকশন */}
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-workable-dark-green/10 text-workable-dark-green px-2 py-0.5 rounded text-[8px] font-heading font-black uppercase tracking-wider">
                      {type || "N/A"}
                    </span>
                    <span className="text-[11px] font-body text-workable-text-muted font-medium">
                      {company?.name || "N/A"}       
                    </span>
                  </div>

                  <h2 className="font-heading font-black text-base text-workable-text-dark truncate">
                    {title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] font-body text-workable-text-muted">
                    <span className="flex items-center gap-1">
                      {/* আইকন কালার স্লেট করা হয়েছে */}
                      <FiMapPin className="text-slate-400 shrink-0" size={12} /> {location}
                    </span>
                    <span className="flex items-center gap-1 text-rose-600 font-medium">
                      <FiClock className="shrink-0" size={12} /> Deadline: {deadline}
                    </span>
                  </div>
                </div>

                {/* ডান পাশের অ্যাকশন ও স্যালারি সেকশন */}
                <div className="flex items-center gap-3 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-50 shrink-0 w-full sm:w-auto justify-between sm:justify-end">

                  <div className="text-left sm:text-right">
                    <p className="text-[9px] uppercase font-bold tracking-wider text-workable-text-muted">
                      Offered Salary
                    </p>
                    <p className="font-heading font-black text-sm text-workable-dark-green">
                      {currencySymbol}{salaryMin?.toLocaleString()} - {salaryMax?.toLocaleString()} /mo
                    </p>
                  </div>

                  {/* রিমুভ/ডিলিট বাটন */}
                  <div className="shrink-0">
                    <SavedDeleteButton jobId={_id} jobTitle={title}/>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  </div>
)
}
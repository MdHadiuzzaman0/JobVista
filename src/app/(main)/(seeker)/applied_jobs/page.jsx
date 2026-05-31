import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FiMapPin, FiClock, FiTrash2, FiBriefcase } from "react-icons/fi";
import { getAppliedJobs } from "@/lib/data";
import { Button } from "@heroui/react";

export default async function AppliedJobsPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const email = session?.user?.email;
  const appliedJobs = email ? await getAppliedJobs(email) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        {appliedJobs.length === 0 ? (
          <div className="bg-white border border-purple-100 rounded-3xl p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
            <div className="w-16 h-16 bg-purple-50 text-workable-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
              <FiBriefcase size={28} />
            </div>
            <h2 className="font-heading font-black text-xl text-workable-text-dark mb-2">No Applications Found</h2>
            <p className="font-body text-sm text-workable-text-muted max-w-sm mx-auto">
              You haven't applied to any jobs yet. Explore opening jobs and start pitching your profile!
            </p>
          </div>
        ) : (

          <div className="space-y-4">
            {appliedJobs.map((item) => {
              const { _id, title, category, type, location, deadline, company, salary, currency } = item;
              const currencySymbol = currency === "USD" ? "$" : "৳";

              return (
                <div
                  key={_id}
                  className="bg-white border border-purple-100 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2 min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-workable-dark-green/10 text-workable-dark-green px-2.5 py-0.5 rounded-md text-[9px] font-heading font-black uppercase tracking-wider">
                        {type || "N/A"}
                      </span>
                      <span className="text-xs font-body text-workable-text-muted font-medium">
                        {company?.name || "N/A"}                       
                      </span>
                    </div>

                    <h2 className="font-heading font-black text-lg md:text-xl text-workable-text-dark truncate">
                      {title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-body text-workable-text-muted">
                      <span className="flex items-center gap-1">
                        <FiMapPin className="text-purple-400" /> {location}
                      </span>
                      <span className="flex items-center gap-1 text-rose-600 font-medium">
                        <FiClock /> Deadline: {deadline}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-purple-100 shrink-0 w-full md:w-auto justify-between md:justify-end">

                    <div className="text-left md:text-right">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-workable-text-muted">
                        Expected Salary
                      </p>
                      <p className="font-heading font-black text-base text-workable-dark-green">
                        {currencySymbol}{salary?.toLocaleString()} /mo
                      </p>
                    </div>

                    <div className="shrink-0">
                      <Button
                        type="submit"
                        className="p-3 text-gray-400 bg-workable-dark-green hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all cursor-pointer flex items-center justify-center"
                      >
                        <FiTrash2 size={18} />
                      </Button>
                    </div>

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
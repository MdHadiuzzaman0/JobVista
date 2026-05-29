import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineFolderOpen } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";

const JobCard = ({ job }) => {
    const { _id, title, category, company, location, type, salaryMin, salaryMax, currency, deadline } = job;

    const currencySymbol = currency === "USD" ? "$" : "৳";

    return (
        <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-workable-dark-green/20 transition-all duration-300 flex flex-col justify-between h-full group relative">
            <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-workable-bg border border-workable-text-muted/10 flex items-center justify-center overflow-hidden p-2 bg-white shrink-0">
                            <Image
                                src={company?.logo || "https://placehold.co/100x100?text=Job"} 
                                alt={company?.name} fill
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <p className="font-body text-sm text-workable-text-muted font-medium mb-0.5">{company?.name}</p>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider bg-workable-dark-green/10 text-workable-dark-green">
                                {type}
                            </span>
                        </div>
                    </div>

                    <button className="p-2.5 rounded-xl bg-workable-bg hover:bg-workable-dark-green/10 text-workable-text-muted hover:text-workable-dark-green transition-all duration-200 cursor-pointer select-none">
                        <FaRegBookmark className="text-sm" />
                    </button>
                </div>

                <Link href={`/jobs/${_id}`}>
                    <h3 className="font-heading text-lg font-bold text-workable-text-dark group-hover:text-workable-dark-green transition-colors duration-200 line-clamp-1 mb-3 cursor-pointer">
                        {title}
                    </h3>
                </Link>

                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-workable-text-muted font-body text-[13px]">
                        <HiOutlineFolderOpen className="text-workable-dark-green text-base shrink-0" />
                        <span className="bg-workable-bg px-2.5 py-0.5 rounded-md text-xs font-medium text-workable-text-dark/80">{category}</span>
                    </div>

                    <div className="flex items-center gap-2 text-workable-text-muted font-body text-[13px]">
                        <HiOutlineLocationMarker className="text-workable-dark-green text-base shrink-0" />
                        <span className="line-clamp-1">{location}</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-workable-text-muted/5 pt-4 mt-2">
                <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider font-heading text-workable-text-muted font-bold">Salary</span>
                        <div className="flex items-center font-heading text-[14px] font-bold text-workable-text-dark">
                            <span>{currencySymbol}{salaryMin.toLocaleString()}</span>
                            <span className="mx-0.5 text-workable-text-muted/50">-</span>
                            <span>{currencySymbol}{salaryMax.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase tracking-wider font-heading text-workable-text-muted font-bold">Deadline</span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md mt-0.5">
                            <FiClock className="shrink-0" />
                            <span>{deadline}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 w-full">
                    <Link href={`/jobs/${_id}`} className="w-full">
                        <button className="w-full bg-workable-bg hover:bg-workable-dark-green/5 text-workable-text-dark font-heading text-[11px] uppercase tracking-wider font-bold py-2.5 rounded-xl transition-all duration-300 border border-workable-text-muted/10 select-none cursor-pointer text-center">
                            Details
                        </button>
                    </Link>

                    <Link href={`/jobs/${_id}`} className="w-full">
                        <button className="w-full bg-workable-dark-green hover:bg-workable-dark-green/90 text-white font-heading text-[11px] uppercase tracking-wider font-bold py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md shadow-workable-dark-green/10 select-none cursor-pointer text-center">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;

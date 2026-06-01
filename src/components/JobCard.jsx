"use client";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineFolderOpen } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Image from "next/image";
import ApplyButton from '@/components/ApplyButton'
import SavedButton from '@/components/SavedButton'

const JobCard = ({ job, email, allAppliedJob, allSavedJob }) => {
    const { _id, title, category, company, location, type, salaryMin, salaryMax, currency, deadline } = job;
    const currencySymbol = currency === "USD" ? "$" : "৳";

    return (
        <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-workable-dark-green/20 transition-all duration-300 flex flex-col justify-between h-full group">

            <div>
                <div className="w-full h-48 rounded-xl bg-workable-bg border border-workable-text-muted/5 flex items-center justify-center overflow-hidden bg-gray-50 relative mb-4 shrink-0">
                    {company?.logo ? (
                        <Image
                            src={company.logo}
                            alt={company?.name || "Company Logo"}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    ) : (
                        <div className="text-sm font-bold text-workable-text-muted">No Image Available</div>
                    )}

                    <SavedButton job={job} email={email} allSavedJob={allSavedJob}/>

                    <span className="absolute bottom-3 left-3 inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-heading font-black uppercase tracking-wider bg-white/90 backdrop-blur-sm text-workable-dark-green shadow-sm">
                        {type}
                    </span>
                </div>

                <p className="font-body text-xs text-workable-text-muted font-semibold uppercase tracking-wider mb-1">
                    {company?.name}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                    <Link href={`/jobs/${_id}`}>
                        <h3 className="font-heading text-lg md:text-xl font-black text-workable-text-dark group-hover:text-workable-dark-green transition-colors duration-200 line-clamp-1 cursor-pointer">
                            {title}
                        </h3>
                    </Link>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                        <div className="flex items-center gap-1.5 text-workable-text-muted font-body text-xs">
                            <HiOutlineFolderOpen className="text-workable-dark-green text-sm shrink-0" />
                            <span className="font-medium text-workable-text-dark/80">{category}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-workable-text-muted font-body text-xs">
                            <HiOutlineLocationMarker className="text-workable-dark-green text-sm shrink-0" />
                            <span className="line-clamp-1">{location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-workable-text-muted/5 pt-4 mt-2">
                <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider font-heading text-workable-text-muted font-bold">Salary</span>
                        <div className="flex items-center font-heading text-[14px] font-bold text-workable-text-dark">
                            <span>{currencySymbol}{salaryMin?.toLocaleString()}</span>
                            <span className="mx-0.5 text-workable-text-muted/50">-</span>
                            <span>{currencySymbol}{salaryMax?.toLocaleString()}</span>
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
                    <Link href={`/explore_jobs/${_id}`} className="w-full">
                        <button className="w-full bg-workable-bg hover:bg-workable-dark-green/25 text-workable-text-dark font-heading text-[11px] uppercase tracking-wider font-bold py-2.5 rounded-xl transition-all duration-300 border border-workable-text-muted/20 select-none cursor-pointer text-center">
                            Details
                        </button>
                    </Link>

                    <ApplyButton job={job} email={email} allAppliedJob={allAppliedJob}/>
                </div>
            </div>

        </div>
    );
};

export default JobCard;
import { HiOutlineLocationMarker, HiOutlineFolderOpen } from "react-icons/hi";
import { FiClock, FiArrowLeft, FiEdit, FiTrash2, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { getJobById } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import GoBackBtnInDetailPage from '@/components/GoBackBtnInDetailPage';
import ApplyButton from "@/components/ApplyButton";
import SavedButton from "@/components/SavedButton";

const JobDetailsPage = async ({ params }) => {
    const { id } = await params;
    const job = await getJobById(id);
    
    if (!job) return <div className="text-center py-20 font-heading font-bold">Loading Job Details...</div>;

    const { title, category, type, salaryMin, salaryMax, currency, location, deadline, company, description, responsibilities, requirements, benefits } = job;
    const currencySymbol = currency === "USD" ? "$" : "৳";

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const email = user?.email;
    console.log(id, session)

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">

                   <GoBackBtnInDetailPage />

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                        {user?.role === "recruiter" ? (
                            <>
                                <Link href={`/jobs/${id}/edit`} className="w-full sm:w-auto px-6 bg-workable-text-dark hover:bg-black text-white font-heading font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer">
                                    <FiEdit size={14} /> Edit Post
                                </Link>
                                <Link href={`/jobs/${id}/delete`} className="w-full sm:w-auto px-6 bg-rose-50 hover:bg-rose-100 text-rose-600 font-heading font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer">
                                    <FiTrash2 size={14} /> Delete Job
                                </Link>
                            </>
                        ) : (
                            <>
                                <ApplyButton job={job} email={email}/>
                                <SavedButton job={job} email={email}/>
                            </>
                        )}
                    </div>
                </div>

                <div className="bg-white border border-purple-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">

                    <div className="w-full h-64 md:h-80 relative bg-purple-900/5 flex items-center justify-center p-8 border-b border-purple-50">
                        {company?.logo ? (
                            <Image
                                src={company.logo}
                                alt={`${company?.name} Logo`}
                                fill
                                className="object-contain p-12"
                                priority
                            />
                        ) : (
                            <div className="text-xl font-heading font-bold text-purple-300">No Logo Available</div>
                        )}
                    </div>

                    <div className="p-6 md:p-10">

                        <div className="mb-6">
                            <span className="bg-workable-dark-green text-white px-3 py-1 rounded-lg text-[10px] font-heading font-black uppercase tracking-wider mb-2.5 inline-block">
                                {type}
                            </span>
                            <h1 className="text-2xl md:text-4xl font-heading font-black text-workable-text-dark leading-tight">
                                {title}
                            </h1>
                            <p className="text-sm font-body text-workable-text-muted mt-1.5 font-medium">{company?.name}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 border-b border-purple-50 pb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-purple-50 rounded-xl text-workable-dark-green shrink-0">
                                    <HiOutlineFolderOpen size={20} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] uppercase font-bold tracking-wider text-workable-text-muted">Category</p>
                                    <p className="font-heading font-bold text-sm text-workable-text-dark truncate">{category}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-purple-50 rounded-xl text-workable-dark-green shrink-0">
                                    <HiOutlineLocationMarker size={20} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] uppercase font-bold tracking-wider text-workable-text-muted">Location</p>
                                    <p className="font-heading font-bold text-sm text-workable-text-dark truncate">{location}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-purple-50 rounded-xl text-workable-dark-green shrink-0">
                                    <FiClock size={20} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] uppercase font-bold tracking-wider text-workable-text-muted">Deadline</p>
                                    <p className="font-heading font-bold text-sm text-rose-600 truncate">{deadline}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-heading font-black text-workable-text-dark mb-3">Job Description</h3>
                            <p className="font-body text-sm text-workable-text-muted leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="space-y-8 mb-6">
                            {responsibilities?.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-heading font-black text-workable-text-dark mb-3">Key Responsibilities</h3>
                                    <ul className="grid grid-cols-1 gap-2.5">
                                        {responsibilities.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 font-body text-sm text-workable-text-muted">
                                                <FiCheckCircle className="text-workable-dark-green text-base mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {requirements?.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-heading font-black text-workable-text-dark mb-3">Requirements</h3>
                                    <ul className="grid grid-cols-1 gap-2.5">
                                        {requirements.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 font-body text-sm text-workable-text-muted">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {benefits?.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-heading font-black text-workable-text-dark mb-3">Benefits & Perks</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {benefits.map((item, idx) => (
                                            <span key={idx} className="font-body text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-xl">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="pt-6 border-t border-purple-50">
                            <span className="text-[10px] uppercase tracking-wider font-heading text-workable-text-muted font-bold block mb-0.5">Salary Offer</span>
                            <span className="font-heading text-xl font-black text-workable-text-dark">
                                {currencySymbol}{salaryMin?.toLocaleString()} - {currencySymbol}{salaryMax?.toLocaleString()}
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetailsPage;
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getUserInfo } from "@/lib/data";
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiGithub, FiBriefcase, FiBook, FiUser } from "react-icons/fi";

export default async function SeekerProfile() {
    const session = await auth.api.getSession({ 
        headers: await headers() 
    });
    const email = session?.user?.email;
    const userData = await getUserInfo(email);

    if (!userData) return (
        <div className="min-h-screen flex items-center justify-center text-workable-text-muted text-sm">
            Profile not found.
        </div>
    );

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6 select-none text-slate-800">

            {/* 🎯 ROW 1: HERO CONTAINER (টপ বড় রেড বক্স) */}
            <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-pink-500/20 p-1 shrink-0 bg-white relative overflow-hidden shadow-inner">
                    <Image
                        src={userData.image || "https://www.freeiconspng.com/uploads/male-icon-32.png"}
                        alt={`${userData.firstName} ${userData.lastName}`} 
                        fill
                        priority
                        className="rounded-full object-cover"
                    />
                </div>

                <div className="flex-1 text-center md:text-left space-y-2 w-full z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                            <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                                {userData.firstName} {userData.lastName}
                            </h1>
                            <p className="text-xs md:text-sm font-semibold text-pink-600">
                                {userData.designation || "N/A"} @ <span className="text-gray-700">{userData.companyName || "N/A"}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-center md:justify-end gap-2">
                            <span className="px-2.5 py-0.5 text-[10px] font-black bg-pink-50 text-pink-600 rounded-full border border-pink-100 uppercase">
                                {userData.subscription} User
                            </span>
                            <span className={`px-2.5 py-0.5 text-[10px] font-black rounded-full border uppercase ${
                                userData.visibility === "private" ? "bg-amber-50 text-amber-600 border-amber-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"
                            }`}>
                                {userData.visibility}
                            </span>
                        </div>
                    </div>

                    <p className="text-xs md:text-sm text-gray-500 italic max-w-2xl">
                        "{userData.bio || "No bio added yet."}"
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 pt-2 text-[11px] font-semibold text-gray-400 border-t border-gray-50 mt-2">
                        <span className="flex items-center gap-1"><FiMail className="text-gray-400 text-xs shrink-0" /> {userData.email}</span>
                        <span className="flex items-center gap-1"><FiPhone className="text-gray-400 text-xs shrink-0" /> {userData.mobile}</span>
                        <span className="flex items-center gap-1"><FiMapPin className="text-gray-400 text-xs shrink-0" /> {userData.presentAddress}</span>
                        <span className="flex items-center gap-1">
                            <FiBriefcase className="text-gray-400 text-xs shrink-0" /> 
                            Available for Job: <b className={userData.availability === "Yes" ? "text-emerald-500" : "text-rose-500"}>{userData.availability}</b>
                        </span>
                    </div>
                </div>
            </div>

            {/* 🎯 ROW 2: EXPERIENCE (LEFT) & SKILLS-LINKS (RIGHT) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                
                {/* 🔴 Left Box: Professional Experience (Takes 2 cols width) */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm md:col-span-2 flex flex-col justify-between gap-4">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                            <div className="flex items-center gap-2">
                                <FiBriefcase className="text-base text-gray-600 shrink-0" />
                                <h2 className="font-black text-sm uppercase tracking-wider text-gray-900">Professional Experience</h2>
                            </div>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-md shrink-0">
                                {userData.experience || 0} Year Experience
                            </span>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">{userData.designation || "Fresher"}</h4>
                                <p className="text-xs text-gray-500 font-medium">{userData.companyName || "N/A"}</p>
                            </div>
                            <div>
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Responsibilities:</span>
                                <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100/50 leading-relaxed font-medium">
                                    {userData.jobResponsibility || "N/A"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔴 Right Box: Core Skills & Links Combos (Takes 1 col width) */}
                <div className="space-y-4 md:col-span-1 flex flex-col justify-between">
                    {/* Skills Component */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3 flex-1">
                        <h3 className="font-black text-xs uppercase tracking-wider text-gray-400">Core Skills</h3>
                        <div className="flex flex-wrap gap-1.5">
                            {userData.skills?.split(",").map((skill, index) => (
                                <span key={index} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-700 rounded-lg text-xs font-bold shadow-2xs">
                                    {skill.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links Component */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2">
                        <h3 className="font-black text-xs uppercase tracking-wider text-gray-400">Links</h3>
                        <div className="space-y-2 text-xs font-bold">
                            {userData.portfolio && (
                                <a href={userData.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors">
                                    <FiGlobe className="text-sm shrink-0 text-gray-400" /> <span className="hover:underline">Portfolio Website</span>
                                </a>
                            )}
                            {userData.github && (
                                <a href={userData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors">
                                    <FiGithub className="text-sm shrink-0 text-gray-400" /> <span className="hover:underline">GitHub Profile</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* 🎯 ROW 3: EDUCATION (LEFT) & PERSONAL INFORMATION (RIGHT) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                {/* 🔴 Bottom Left Box: Education Details */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-gray-50 pb-2">
                        <FiBook className="text-base text-gray-600 shrink-0" />
                        <h2 className="font-black text-sm uppercase tracking-wider text-gray-900">Education Details</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                            <span className="text-gray-400 block mb-0.5 font-medium">Degree</span>
                            <span className="font-bold text-gray-800">{userData.degree}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5 font-medium">Institution</span>
                            <span className="font-bold text-gray-800">{userData.institution}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5 font-medium">CGPA</span>
                            <span className="font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md inline-flex items-center gap-1 w-fit">
                                🎯 {userData.cgpa}
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5 font-medium">Passing Year</span>
                            <span className="font-bold text-gray-800">🗓️ {userData.passingYear}</span>
                        </div>
                    </div>
                </div>

                {/* 🔴 Bottom Right Box: Personal Information */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-gray-50 pb-2">
                        <FiUser className="text-base text-gray-600 shrink-0" />
                        <h2 className="font-black text-sm uppercase tracking-wider text-gray-900">Personal Information</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                            <span className="text-gray-400 block mb-0.5 font-medium">Marital Status</span>
                            <span className="font-bold text-gray-800">{userData.maritalStatus}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5 font-medium">Gender</span>
                            <span className="font-bold text-gray-800">{userData.gender}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5 font-medium">Present Address</span>
                            <span className="font-bold text-gray-800">{userData.presentAddress}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5 font-medium">Permanent Address</span>
                            <span className="font-bold text-gray-800">{userData.permanentAddress}</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
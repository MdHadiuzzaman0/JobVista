import { updateProfileInfo } from "@/lib/action";
import { useState } from "react";

export default function SkillsAndLinksInfo({ userInfo, user }) {
    const [isEditingSkills, setIsEditingSkills] = useState(false);
    
    const [formData, setFormData] = useState({
        skills: userInfo?.skills || "",
        portfolio: userInfo?.portfolio || "",
        github: userInfo?.github || "",
        bio: userInfo?.bio || ""
    });

    const handleFormSubmit = async (data) => {
        const updatedData = {
            skills: data.get("skills"),
            portfolio: data.get("portfolio"),
            github: data.get("github"),
            bio: data.get("bio")
        };
        console.log("Saving Skills & Links via Action:", updatedData);
        
        const response = await updateProfileInfo({ updatedData, email: user?.email });
        if (response.success) {
            setFormData(updatedData);
            setIsEditingSkills(false);
        } else {
            alert("Failed to update skills and links: " + response.error);
        }
    };

    return (
        <div className="space-y-4">
            {/* 🛠️ SKILLS & OTHER INFO BLOCK */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/30">

                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                    <h4 className="font-bold text-sm text-gray-900">Skills & Online Presence</h4>
                    {!isEditingSkills && (
                        <button
                            onClick={() => setIsEditingSkills(true)}
                            className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1"
                        >
                            📝 Edit Section
                        </button>
                    )}
                </div>

                {!isEditingSkills ? (
                    /* 👁️ VIEW MODE */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-xs">
                        <div className="md:col-span-2">
                            <span className="text-gray-400 block mb-0.5">Skills</span>
                            <span className="font-medium text-gray-800">{formData.skills || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Portfolio Link</span>
                            {formData.portfolio ? (
                                <a href={formData.portfolio} target="_blank" rel="noreferrer" className="font-medium text-pink-600 hover:underline break-all">{formData.portfolio}</a>
                            ) : <span>---</span>}
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">GitHub URL</span>
                            {formData.github ? (
                                <a href={formData.github} target="_blank" rel="noreferrer" className="font-medium text-pink-600 hover:underline break-all">{formData.github}</a>
                            ) : <span>---</span>}
                        </div>
                        <div className="md:col-span-2">
                            <span className="text-gray-400 block mb-0.5">Professional Summary (Bio)</span>
                            <span className="font-medium text-gray-800 block whitespace-pre-line">{formData.bio || "---"}</span>
                        </div>
                    </div>
                ) : (
                    /* 📝 EDIT MODE FORM */
                    <form action={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">

                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-gray-600 font-semibold">Skills (Comma separated) <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="skills"
                                    defaultValue={formData.skills}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="React, Next.js, Tailwind CSS, Node.js, MongoDB"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Portfolio / Website Link</label>
                                <input
                                    type="url"
                                    name="portfolio"
                                    defaultValue={formData.portfolio}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="https://yourportfolio.com"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">GitHub URL</label>
                                <input
                                    type="url"
                                    name="github"
                                    defaultValue={formData.github}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="https://github.com/yourusername"
                                />
                            </div>

                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-gray-600 font-semibold">Career Objective</label>
                                <textarea
                                    name="bio"
                                    defaultValue={formData.bio}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs w-full"
                                    placeholder="Briefly describe your career goals..."
                                    rows="3"
                                />
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={() => setIsEditingSkills(false)}
                                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-3 py-1.5 bg-pink-600 text-white text-xs font-semibold rounded-lg shadow-sm hover:bg-pink-700 transition-colors"
                            >
                                Save Info
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
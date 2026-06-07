import { updateProfileInfo } from "@/lib/action";
import { useState } from "react";

export default function EducationInfo({ userInfo, user }) {
    const [isEditingEducation, setIsEditingEducation] = useState(false);
    
    const [formData, setFormData] = useState({
        degree: userInfo?.degree || "",
        institution: userInfo?.institution || "",
        cgpa: userInfo?.cgpa || "", 
        passingYear: userInfo?.passingYear || ""
    });

    const handleFormSubmit = async (data) => {
        const updatedData = {
            degree: data.get("degree"),
            institution: data.get("institution"),
            cgpa: data.get("cgpa"),
            passingYear: data.get("passingYear")
        };
        console.log("Saving Education via Action:", updatedData);
        
        const response = await updateProfileInfo({ updatedData, email: user?.email });
        if (response.success) {
            setFormData(updatedData);
            setIsEditingEducation(false);
        } else {
            alert("Failed to update education: " + response.error);
        }
    };

    return (
        <div className="space-y-4">
            {/* 🎓 EDUCATION DETAILS BLOCK */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/30">

                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                    <h4 className="font-bold text-sm text-gray-900">Education Background</h4>
                    {!isEditingEducation && (
                        <button
                            onClick={() => setIsEditingEducation(true)}
                            className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1"
                        >
                            📝 Edit Section
                        </button>
                    )}
                </div>

                {!isEditingEducation ? (
                    /* 👁️ VIEW MODE */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-xs">
                        <div>
                            <span className="text-gray-400 block mb-0.5">Degree / Program</span>
                            <span className="font-medium text-gray-800">{formData.degree || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Institute / University</span>
                            <span className="font-medium text-gray-800">{formData.institution || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">CGPA / GPA</span>
                            <span className="font-medium text-gray-800">{formData.cgpa || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Passing Year</span>
                            <span className="font-medium text-gray-800">{formData.passingYear || "---"}</span>
                        </div>
                    </div>
                ) : (
                    /* 📝 EDIT MODE FORM */
                    <form action={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Degree / Program <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="degree"
                                    defaultValue={formData.degree}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="e.g. B.Sc. in Textile Engineering"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Institute / University <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="institution"
                                    defaultValue={formData.institution}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="e.g. KUET"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">CGPA / GPA <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="cgpa"
                                    defaultValue={formData.cgpa}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="e.g. 3.53"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Passing Year <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="passingYear"
                                    defaultValue={formData.passingYear}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="e.g. 2024"
                                    required
                                />
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={() => setIsEditingEducation(false)}
                                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-3 py-1.5 bg-pink-600 text-white text-xs font-semibold rounded-lg shadow-sm hover:bg-pink-700 transition-colors"
                            >
                                Save Education
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
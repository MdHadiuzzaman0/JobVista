import { updateProfileInfo } from "@/lib/action";
import { useState } from "react";

export default function EmploymentInfo({ userInfo, user }) {
    const [isEditingEmployment, setIsEditingEmployment] = useState(false);
    
    const [formData, setFormData] = useState({
        companyName: userInfo?.companyName || "",
        designation: userInfo?.designation || "",
        jobResponsibility: userInfo?.jobResponsibility || ""
    });

    const handleFormSubmit = async (data) => {
        const updatedData = {
            companyName: data.get("companyName"),
            designation: data.get("designation"),
            jobResponsibility: data.get("jobResponsibility")
        };
        console.log("Saving Employment via Action:", updatedData);
        
        const response = await updateProfileInfo({ updatedData, email: user?.email });
        if (response.success) {
            setFormData(updatedData);
            setIsEditingEmployment(false);
        } else {
            alert("Failed to update employment history: " + response.error);
        }
    };

    return (
        <div className="space-y-4">
            {/* 💼 EMPLOYMENT DETAILS BLOCK */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/30">

                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                    <h4 className="font-bold text-sm text-gray-900">Employment History</h4>
                    {!isEditingEmployment && (
                        <button
                            onClick={() => setIsEditingEmployment(true)}
                            className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1"
                        >
                            📝 Edit Section
                        </button>
                    )}
                </div>

                {!isEditingEmployment ? (
                    /* 👁️ VIEW MODE */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-xs">
                        <div>
                            <span className="text-gray-400 block mb-0.5">Company Name</span>
                            <span className="font-medium text-gray-800">{formData.companyName || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Designation / Role</span>
                            <span className="font-medium text-gray-800">{formData.designation || "---"}</span>
                        </div>
                        <div className="md:col-span-2">
                            <span className="text-gray-400 block mb-0.5">Key Responsibilities / Projects</span>
                            <span className="font-medium text-gray-800 block whitespace-pre-line">{formData.jobResponsibility || "---"}</span>
                        </div>
                    </div>
                ) : (
                    /* 📝 EDIT MODE FORM */
                    <form action={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    defaultValue={formData.companyName}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="Enter company name"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Designation / Role</label>
                                <input
                                    type="text"
                                    name="designation"
                                    defaultValue={formData.designation}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="e.g. Frontend Developer"
                                />
                            </div>

                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-gray-600 font-semibold">Key Responsibilities / Projects</label>
                                <textarea
                                    name="jobResponsibility"
                                    defaultValue={formData.jobResponsibility}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs w-full"
                                    placeholder="Briefly write about your role and contributions..."
                                    rows="3"
                                />
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={() => setIsEditingEmployment(false)}
                                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-3 py-1.5 bg-pink-600 text-white text-xs font-semibold rounded-lg shadow-sm hover:bg-pink-700 transition-colors"
                            >
                                Save Employment
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
import { updateProfileInfo } from "@/lib/action";
import { useState } from "react";

export default function PersonalInfo({ userInfo, user }) {
    const [isEditingPersonal, setIsEditingPersonal] = useState(false);
    
    const [formData, setFormData] = useState({
        firstName: userInfo?.firstName || "",
        lastName: userInfo?.lastName || "",
        mobile: userInfo?.mobile || "", 
        email: userInfo?.email || "",
        gender: userInfo?.gender || "",
        maritalStatus: userInfo?.maritalStatus || "",
        presentAddress: userInfo?.presentAddress || "",
        permanentAddress: userInfo?.permanentAddress || ""
    });

    const handleFormSubmit = async (data) => {
        const updatedData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            mobile: data.get("mobile"),
            gender: data.get("gender"),
            maritalStatus: data.get("maritalStatus"),
            presentAddress: data.get("presentAddress"),
            permanentAddress: data.get("permanentAddress"),
            email: formData.email
        };
        console.log("Saving via Form Action:", updatedData);
        const response = await updateProfileInfo({ updatedData, email: user?.email });
        if (response.success) {
            setFormData(updatedData);
            setIsEditingPersonal(false);
        } else {
            alert("Failed to update profile: " + response.error);
        }
    };

    return (
        <div className="space-y-4">

            {/* 🛡️ PERSONAL DETAILS BLOCK */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/30">

                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                    <h4 className="font-bold text-sm text-gray-900">Personal Details</h4>
                    {!isEditingPersonal && (
                        <button
                            onClick={() => setIsEditingPersonal(true)}
                            className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1"
                        >
                            📝 Edit Section
                        </button>
                    )}
                </div>

                {!isEditingPersonal ? (

                    /* 👁️ VIEW MODE (ডেটা না থাকলে "---" দেখাবে) */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-xs">
                        <div>
                            <span className="text-gray-400 block mb-0.5">First Name</span>
                            <span className="font-medium text-gray-800">{formData.firstName || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Last Name</span>
                            <span className="font-medium text-gray-800">{formData.lastName || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Primary Mobile</span>
                            <span className="font-medium text-gray-800">{formData.mobile || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Primary Email</span>
                            <span className="font-medium text-gray-800">{formData.email || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Gender</span>
                            <span className="font-medium text-gray-800">{formData.gender || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Marital Status</span>
                            <span className="font-medium text-gray-800">{formData.maritalStatus || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Present Address</span>
                            <span className="font-medium text-gray-800">{formData.presentAddress || "---"}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-0.5">Permanent Address</span>
                            <span className="font-medium text-gray-800">{formData.permanentAddress || "---"}</span>
                        </div>
                    </div>

                ) : (

                    /* 📝 EDIT MODE FORM (ইনপুট ফিল্ড ফাঁকা থাকবে, প্লেসহোল্ডার গাইড করবে) */
                    <form action={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">First Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="firstName"
                                    defaultValue={formData.firstName}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="Enter your First Name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    defaultValue={formData.lastName}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="Enter your Last Name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Primary Mobile <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="mobile"
                                    defaultValue={formData.mobile}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs"
                                    placeholder="Provide at least one Phone Number"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Primary Email</label>
                                <input
                                    type="email"
                                    defaultValue={formData.email}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium bg-gray-50 text-gray-500 text-xs cursor-not-allowed"
                                    disabled
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Gender <span className="text-red-500">*</span></label>
                                <select
                                    name="gender"
                                    defaultValue={formData.gender}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs bg-white"
                                    required
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-gray-600 font-semibold">Marital Status <span className="text-red-500">*</span></label>
                                <select
                                    name="maritalStatus"
                                    defaultValue={formData.maritalStatus}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs bg-white"
                                    required
                                >
                                    <option value="" disabled>Select Marital Status</option>
                                    <option value="Unmarried">Unmarried</option>
                                    <option value="Married">Married</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-gray-600 font-semibold">Present Address</label>
                                <textarea
                                    name="presentAddress"
                                    defaultValue={formData.presentAddress}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs w-full"
                                    placeholder="Enter your Present Address"
                                    rows="2" required
                                />
                            </div>

                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-gray-600 font-semibold">Permanent Address</label>
                                <textarea
                                    name="permanentAddress"
                                    defaultValue={formData.permanentAddress}
                                    className="border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none text-xs w-full"
                                    placeholder="Enter your Permanent Address"
                                    rows="2" required
                                />
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={() => setIsEditingPersonal(false)}
                                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-3 py-1.5 bg-pink-600 text-white text-xs font-semibold rounded-lg shadow-sm hover:bg-pink-700 transition-colors"
                            >
                                Save Details
                            </button>
                        </div>
                    </form>
                )}

            </div>

        </div>
    );
}
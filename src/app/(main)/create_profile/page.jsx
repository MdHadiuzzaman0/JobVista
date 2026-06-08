"use client";
import CreateProfileOfRecruiter from "@/components/CreateProfileOfRecruiter";
import CreateProfileOfSeeker from "@/components/CreateProfileOfSeeker";
import { useState } from "react";
import { handleFormSubmit } from "@/lib/action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CreateProfilePage({ sessionUser }) {
  const router = useRouter()
  const initialRole = sessionUser?.role || "";
  const [selectedRole, setSelectedRole] = useState(initialRole);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const profileData = Object.fromEntries(formData.entries());

    if (!initialRole) {
      profileData.role = selectedRole;
    }                          

    profileData.visibility = "public"
    profileData.availability = "Yes"
    const response = await handleFormSubmit(profileData);
    if (response.success) {
      toast.success("Profile saved successfully! 🎉");
      router.push("/profile");
    } else {
      toast.error(`Failed to save: ${response.error}`);
    }
  };

  return (
    <div className="max-w-5xl min-h-screen mx-auto p-6 bg-white rounded-2xl shadow-sm border mt-10 text-xs">
      <h2 className="text-lg font-bold mb-6">Complete Your Profile</h2>

      <form onSubmit={handleProfileSubmit} className="space-y-6">

        {/* SITUATION 2: পার্সোনাল ইনফো */}
        {!initialRole && (
          <div className="p-4 bg-gray-50 border rounded-xl space-y-4">
            <h3 className="font-bold text-gray-700">Step 1: Role Selection</h3>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-red-500">Select Your Account Type *</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="border p-2 rounded-lg bg-white font-medium text-gray-800"
                required
              >
                <option value="">-- Choose dynamic role --</option>
                <option value="seeker">Job Seeker</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
          </div>
        )}

        {/* DYNAMIC SITUATION: রোল অনুযায়ী ফর্ম */}
        {selectedRole === "seeker" && <CreateProfileOfSeeker />}
        {selectedRole === "recruiter" && <CreateProfileOfRecruiter />}

        {/* SUBMIT BUTTON */}
        {selectedRole && (
          <button type="submit" className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Save Profile
          </button>
        )}

      </form>
    </div>
  );
}
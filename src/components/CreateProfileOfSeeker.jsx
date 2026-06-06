"use client";

export default function CreateProfileOfSeeker() {
    return (
        <div className="space-y-5 text-xs animate-fadeIn">
            <div className="p-4 bg-pink-50/40 border border-pink-100/50 rounded-2xl space-y-4">
                <h3 className="text-sm font-bold text-pink-700 flex items-center gap-1.5 mb-2">
                    🧑‍💻 Job Seeker Professional Details
                </h3>

                {/* প্রথম ও শেষ নাম */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-black font-semibold">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            required
                            name="firstName"
                            placeholder="Enter your first name"
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-black font-semibold">Last Name</label>
                        <input
                            name="lastName"
                            placeholder="Enter your last name"
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-black font-semibold">Email</label>
                        <input
                            name="email"
                            placeholder="Enter your last name"
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                        />
                    </div>

                {/* মোবাইল এবং এক্সপেরিয়েন্স */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-black font-semibold">
                            Primary Mobile <span className="text-red-500">*</span>
                        </label>
                        <input
                            required
                            name="mobile"
                            type="tel"
                            placeholder="017XXXXXXXX"
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-black font-semibold">
                            Years of Experience <span className="text-red-500">*</span>
                        </label>
                        <input
                            required
                            name="experience"
                            placeholder="e.g. 2"
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                        />
                    </div>
                </div>

                {/* স্কিলস */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-black font-semibold">
                        Skills (Comma separated) <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        name="skills"
                        placeholder="React, Next.js, Node.js, MongoDB"
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                    />
                </div>

                {/* পোর্টফোলিও */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-black font-semibold">Portfolio / GitHub URL</label>
                    <input
                        name="portfolio"
                        type="url"
                        placeholder="https://github.com/yourusername"
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                    />
                </div>

                {/* বর্তমান ঠিকানা */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-black font-semibold">Present Address</label>
                    <input
                        name="presentAddress"
                        placeholder="Enter your current address"
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                    />
                </div>

                {/* লিঙ্গ */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-black font-semibold">
                        Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        name="gender"
                        defaultValue=""
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs appearance-none"
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* বৈবাহিক অবস্থা */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-black font-semibold">
                        Marital Status <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        name="maritalStatus"
                        defaultValue=""
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs appearance-none"
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="Married">Married</option>
                    </select>
                </div>

                {/* স্থায়ী ঠিকানা */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-black font-semibold">Permanent Address</label>
                    <input
                        name="permanentAddress"
                        placeholder="Enter your permanent address"
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
                    />
                </div>

                {/* বায়ো */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-black font-semibold">Professional Summary</label>
                    <textarea
                        name="bio"
                        rows={3}
                        placeholder="Briefly describe your career goals and expertise..."
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs resize-none"
                    />
                </div>
            </div>
        </div>
    );
}
import { Form, TextField, Label, Input, FieldError, Select, ListBox, TextArea } from "@heroui/react";

export default function CreateProfileOfSeeker() {
    return (
        <div className="space-y-5 text-xs animate-fadeIn max-w-4xl mx-auto p-2 text-workable-text-dark">
                {/* ================= SECTION 1: PERSONAL & PROFESSIONAL DETAILS ================= */}
                <div className="p-5 bg-workable-slate/20 border border-workable-slate/40 rounded-2xl space-y-4">
                    <h3 className="text-sm font-bold text-workable-dark-green flex items-center gap-1.5 mb-2">
                        Job Seeker Professional Details
                    </h3>

                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField isRequired name="firstName" type="name">
                            <Label className="text-workable-text-dark font-semibold">First Name</Label>
                            <Input placeholder="Enter your first name" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>

                        <TextField isRequired name="lastName" type="name">
                            <Label className="text-workable-text-dark font-semibold">Last Name</Label>
                            <Input placeholder="Enter your last name" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>
                    </div>

                    {/* Email */}
                    <TextField isRequired name="email" type="email">
                        <Label className="text-workable-text-dark font-semibold">Email</Label>
                        <Input placeholder="mdhadiuzzaman483@gmail.com" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                        <FieldError className="text-red-400 text-[10px] mt-1" />
                    </TextField>

                    {/* Mobile & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField isRequired name="mobile" type="tel">
                            <Label className="text-workable-text-dark font-semibold">Primary Mobile</Label>
                            <Input placeholder="017XXXXXXXX" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>

                        <TextField isRequired name="experience">
                            <Label className="text-workable-text-dark font-semibold">Years of Experience</Label>
                            <Input placeholder="e.g. 2" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>
                    </div>

                    {/* Gender & Marital Status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select isRequired className="w-full" name="gender" placeholder="Select Gender">
                            <Label className="text-workable-text-dark font-semibold">Gender</Label>
                            <Select.Trigger className="w-full flex justify-between items-center border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg text-xs text-workable-text-dark">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox className="bg-workable-bg border border-workable-slate rounded-lg shadow-xl p-1 text-xs text-workable-text-dark">
                                    <ListBox.Item id="Male" textValue="Male" className="p-2 hover:bg-workable-primary/40 rounded cursor-pointer transition-colors">Male <ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Female" textValue="Female" className="p-2 hover:bg-workable-primary/40 rounded cursor-pointer transition-colors">Female <ListBox.ItemIndicator /></ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </Select>

                        <Select isRequired className="w-full" name="maritalStatus" placeholder="Select Status">
                            <Label className="text-workable-text-dark font-semibold">Marital Status</Label>
                            <Select.Trigger className="w-full flex justify-between items-center border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg text-xs text-workable-text-dark">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox className="bg-workable-bg border border-workable-slate rounded-lg shadow-xl p-1 text-xs text-workable-text-dark">
                                    <ListBox.Item id="Unmarried" textValue="Unmarried" className="p-2 hover:bg-workable-primary/40 rounded cursor-pointer transition-colors">Unmarried <ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Married" textValue="Married" className="p-2 hover:bg-workable-primary/40 rounded cursor-pointer transition-colors">Married <ListBox.ItemIndicator /></ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </Select>
                    </div>

                    {/* 📍 Present Address */}
                    <TextField name="presentAddress">
                        <Label className="text-workable-text-dark font-semibold">Present Address</Label>
                        <Input placeholder="Enter your current address" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                        <FieldError className="text-red-400 text-[10px] mt-1" />
                    </TextField>

                    {/* 📍 Permanent Address */}
                    <TextField name="permanentAddress">
                        <Label className="text-workable-text-dark font-semibold">Permanent Address</Label>
                        <Input placeholder="Enter your permanent address" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                        <FieldError className="text-red-400 text-[10px] mt-1" />
                    </TextField>

                    {/* Bio / Professional Summary */}
                    <TextField name="bio">
                        <Label className="text-workable-text-dark font-semibold">Professional Summary</Label>
                        <TextArea placeholder="Briefly describe your career goals..." className="w-full h-15 border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs resize-none"/>
                        <FieldError className="text-red-400 text-[10px] mt-1" />
                    </TextField>
                </div>

                {/* ================= SECTION 2: EDUCATION / TRAINING ================= */}
                <div className="p-5 bg-workable-slate/20 border border-workable-slate/40 rounded-2xl space-y-4">
                    <h3 className="text-sm font-bold text-workable-dark-green flex items-center gap-1.5 mb-2">
                        Education & Academic Background
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField isRequired name="degree">
                            <Label className="text-workable-text-dark font-semibold">Degree / Program</Label>
                            <Input placeholder="e.g. B.Sc. in Textile Engineering" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>

                        <TextField isRequired name="institution">
                            <Label className="text-workable-text-dark font-semibold">Institute / University</Label>
                            <Input placeholder="e.g. KUET" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField isRequired name="cgpa">
                            <Label className="text-workable-text-dark font-semibold">CGPA / GPA</Label>
                            <Input placeholder="e.g. 3.53" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>

                        <TextField isRequired name="passingYear">
                            <Label className="text-workable-text-dark font-semibold">Passing Year</Label>
                            <Input placeholder="e.g. 2024" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>
                    </div>
                </div>

                {/* ================= SECTION 3: EMPLOYMENT HISTORY ================= */}
                <div className="p-5 bg-workable-slate/20 border border-workable-slate/40 rounded-2xl space-y-4">
                    <h3 className="text-sm font-bold text-workable-dark-green flex items-center gap-1.5 mb-2">
                        Employment / Industrial Attachment History
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField name="companyName">
                            <Label className="text-workable-text-dark font-semibold">Company Name</Label>
                            <Input placeholder="Enter company name" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>

                        <TextField name="designation">
                            <Label className="text-workable-text-dark font-semibold">Designation / Role</Label>
                            <Input placeholder="e.g. Frontend Developer" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>
                    </div>

                    <TextField name="jobResponsibility">
                        <Label className="text-workable-text-dark font-semibold">Key Responsibilities / Projects</Label>
                        <TextArea placeholder="Briefly write about your role and contributions..." className="w-full h-15 border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs resize-none"/>
                        <FieldError className="text-red-400 text-[10px] mt-1" />
                    </TextField>
                </div>

                {/* ================= SECTION 4: SKILLS & OTHER INFO ================= */}
                <div className="p-5 bg-workable-slate/20 border border-workable-slate/40 rounded-2xl space-y-4">
                    <h3 className="text-sm font-bold text-workable-dark-green flex items-center gap-1.5 mb-2">
                        Skills & Online Presence
                    </h3>

                    <TextField isRequired name="skills">
                        <Label className="text-workable-text-dark font-semibold">Skills (Comma separated)</Label>
                        <Input placeholder="React, Next.js, Tailwind CSS, Node.js, MongoDB" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                        <FieldError className="text-red-400 text-[10px] mt-1" />
                    </TextField>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField name="portfolio">
                            <Label className="text-workable-text-dark font-semibold">Portfolio / Website Link</Label>
                            <Input type="url" placeholder="https://yourportfolio.com" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>

                        <TextField name="github">
                            <Label className="text-workable-text-dark font-semibold">GitHub URL</Label>
                            <Input type="url" placeholder="https://github.com/yourusername" className="w-full border border-workable-slate bg-workable-bg/50 px-3 py-2 rounded-lg font-medium focus:border-workable-dark-green focus:outline-none text-workable-text-dark placeholder:text-workable-text-muted/50 text-xs" />
                            <FieldError className="text-red-400 text-[10px] mt-1" />
                        </TextField>
                    </div>
                </div>

        </div>






























        // <div className="space-y-5 text-xs animate-fadeIn">
        //     <div className="p-4 bg-pink-50/40 border border-pink-100/50 rounded-2xl space-y-4">
        //         <h3 className="text-sm font-bold text-pink-700 flex items-center gap-1.5 mb-2">
        //             🧑‍💻 Job Seeker Professional Details
        //         </h3>

        //         {/* প্রথম ও শেষ নাম */}
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //             <div className="flex flex-col gap-1.5">
        //                 <label className="text-black font-semibold">
        //                     First Name <span className="text-red-500">*</span>
        //                 </label>
        //                 <input
        //                     required
        //                     name="firstName"
        //                     placeholder="Enter your first name"
        //                     className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //                 />
        //             </div>

        //             <div className="flex flex-col gap-1.5">
        //                 <label className="text-black font-semibold">Last Name</label>
        //                 <input
        //                     name="lastName"
        //                     placeholder="Enter your last name"
        //                     className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //                 />
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-1.5 w-full">
        //                 <label className="text-black font-semibold">Email</label>
        //                 <input
        //                     name="email"
        //                     placeholder="Enter your last name"
        //                     className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //                 />
        //             </div>

        //         {/* মোবাইল এবং এক্সপেরিয়েন্স */}
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //             <div className="flex flex-col gap-1.5">
        //                 <label className="text-black font-semibold">
        //                     Primary Mobile <span className="text-red-500">*</span>
        //                 </label>
        //                 <input
        //                     required
        //                     name="mobile"
        //                     type="tel"
        //                     placeholder="017XXXXXXXX"
        //                     className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //                 />
        //             </div>

        //             <div className="flex flex-col gap-1.5">
        //                 <label className="text-black font-semibold">
        //                     Years of Experience <span className="text-red-500">*</span>
        //                 </label>
        //                 <input
        //                     required
        //                     name="experience"
        //                     placeholder="e.g. 2"
        //                     className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //                 />
        //             </div>
        //         </div>

        //         {/* স্কিলস */}
        //         <div className="flex flex-col gap-1.5">
        //             <label className="text-black font-semibold">
        //                 Skills (Comma separated) <span className="text-red-500">*</span>
        //             </label>
        //             <input
        //                 required
        //                 name="skills"
        //                 placeholder="React, Next.js, Node.js, MongoDB"
        //                 className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //             />
        //         </div>

        //         {/* পোর্টফোলিও */}
        //         <div className="flex flex-col gap-1.5">
        //             <label className="text-black font-semibold">Portfolio / GitHub URL</label>
        //             <input
        //                 name="portfolio"
        //                 type="url"
        //                 placeholder="https://github.com/yourusername"
        //                 className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //             />
        //         </div>

        //         {/* বর্তমান ঠিকানা */}
        //         <div className="flex flex-col gap-1.5">
        //             <label className="text-black font-semibold">Present Address</label>
        //             <input
        //                 name="presentAddress"
        //                 placeholder="Enter your current address"
        //                 className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //             />
        //         </div>

        //         {/* লিঙ্গ */}
        //         <div className="flex flex-col gap-1.5">
        //             <label className="text-black font-semibold">
        //                 Gender <span className="text-red-500">*</span>
        //             </label>
        //             <select
        //                 required
        //                 name="gender"
        //                 defaultValue=""
        //                 className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs appearance-none"
        //             >
        //                 <option value="" disabled>Select Gender</option>
        //                 <option value="Male">Male</option>
        //                 <option value="Female">Female</option>
        //             </select>
        //         </div>

        //         {/* বৈবাহিক অবস্থা */}
        //         <div className="flex flex-col gap-1.5">
        //             <label className="text-black font-semibold">
        //                 Marital Status <span className="text-red-500">*</span>
        //             </label>
        //             <select
        //                 required
        //                 name="maritalStatus"
        //                 defaultValue=""
        //                 className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs appearance-none"
        //             >
        //                 <option value="" disabled>Select Status</option>
        //                 <option value="Unmarried">Unmarried</option>
        //                 <option value="Married">Married</option>
        //             </select>
        //         </div>

        //         {/* স্থায়ী ঠিকানা */}
        //         <div className="flex flex-col gap-1.5">
        //             <label className="text-black font-semibold">Permanent Address</label>
        //             <input
        //                 name="permanentAddress"
        //                 placeholder="Enter your permanent address"
        //                 className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs"
        //             />
        //         </div>

        //         {/* বায়ো */}
        //         <div className="flex flex-col gap-1.5">
        //             <label className="text-black font-semibold">Professional Summary</label>
        //             <textarea
        //                 name="bio"
        //                 rows={3}
        //                 placeholder="Briefly describe your career goals and expertise..."
        //                 className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-pink-500 focus:outline-none bg-white text-xs resize-none"
        //             />
        //         </div>
        //     </div>
        // </div>
    );
}
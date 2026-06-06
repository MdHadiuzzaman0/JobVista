"use client";

import { useForm } from "react-hook-form";
import { TextField, Label, Input, FieldError, Button, Select } from "@heroui/react";
import { toast } from "react-toastify";

export default function CreateProfileOfRecruiter() {
    // 🎯 React Hook Form ইনিশিয়ালিজেশন
    const { register, handleSubmit, formState: { errors } } = useForm();

    // 🎯 ফর্ম সাবমিট হ্যান্ডলার (React Hook Form সাকসেস ডাটা এখানে পাঠাবে)
    const onFormSubmit = async (data) => {
        if (handleFormSubmit) {
            const response = await handleFormSubmit(data);
            if (response.success) {
                toast.success("Company profile saved successfully! 🎉");
            } else {
                toast.error("Failed to save: " + response.error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5 text-xs animate-fadeIn">
            <div className="p-4 bg-blue-50/40 border border-blue-100/50 rounded-2xl space-y-4">
                <h3 className="text-sm font-bold text-blue-700 flex items-center gap-1.5 mb-2">
                    🏢 Recruiter & Company Details (React Hook Form)
                </h3>

                {/* কোম্পানির নাম এবং অফিশিয়াল ওয়েবসাইট */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* HeroUI TextField-এ isInvalid প্রপ্স পাস করতে হয় যদি এরর থাকে */}
                    <TextField isInvalid={!!errors.companyName} className="flex flex-col gap-1.5">
                        <Label className="text-gray-700 font-semibold">Company Name *</Label>
                        <Input 
                            placeholder="e.g. JobVista Ltd." 
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs"
                            {...register("companyName", { required: "Company name is required" })}
                        />
                        {/* ডাইনামিকালি React Hook Form-এর মেসেজ পাস করা */}
                        <FieldError className="text-red-500 text-[10px] font-medium">
                            {errors.companyName?.message}
                        </FieldError>
                    </TextField>

                    <TextField isInvalid={!!errors.companyWebsite} className="flex flex-col gap-1.5">
                        <Label className="text-gray-700 font-semibold">Company Website *</Label>
                        <Input 
                            type="url"
                            placeholder="https://example.com" 
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs"
                            {...register("companyWebsite", { 
                                required: "Website URL is required",
                                pattern: { value: /^https?:\/\/.+/, message: "Enter a valid URL" }
                            })}
                        />
                        <FieldError className="text-red-500 text-[10px] font-medium">
                            {errors.companyWebsite?.message}
                        </FieldError>
                    </TextField>
                </div>

                {/* এইচআর মেইল এবং কন্টাক্ট নাম্বার */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField isInvalid={!!errors.hrEmail} className="flex flex-col gap-1.5">
                        <Label className="text-gray-700 font-semibold">HR / Contact Email *</Label>
                        <Input 
                            type="email"
                            placeholder="hr@company.com" 
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs"
                            {...register("hrEmail", { 
                                required: "HR Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                            })}
                        />
                        <FieldError className="text-red-500 text-[10px] font-medium">
                            {errors.hrEmail?.message}
                        </FieldError>
                    </TextField>

                    <TextField isInvalid={!!errors.companyPhone} className="flex flex-col gap-1.5">
                        <Label className="text-gray-700 font-semibold">Contact Mobile *</Label>
                        <Input 
                            type="tel"
                            placeholder="017XXXXXXXX" 
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs"
                            {...register("companyPhone", { 
                                required: "Contact number is required",
                                minLength: { value: 11, message: "Mobile number must be at least 11 digits" }
                            })}
                        />
                        <FieldError className="text-red-500 text-[10px] font-medium">
                            {errors.companyPhone?.message}
                        </FieldError>
                    </TextField>
                </div>

                {/* কোম্পানির লোগো ইউআরএল এবং সাইজ ড্রপডাউন */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField isInvalid={!!errors.companyLogo} className="flex flex-col gap-1.5">
                        <Label className="text-gray-700 font-semibold">Company Logo URL</Label>
                        <Input 
                            type="url"
                            placeholder="https://example.com/logo.png" 
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs"
                            {...register("companyLogo")}
                        />
                        <FieldError className="text-red-500 text-[10px] font-medium" />
                    </TextField>

                    <Select isInvalid={!!errors.companySize} className="flex flex-col gap-1.5">
                        <Label className="text-gray-700 font-semibold">Company Size *</Label>
                        <div className="relative">
                            <select 
                                className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs appearance-none"
                                {...register("companySize", { required: "Please select company size" })}
                            >
                                <option value="">Select Company Size</option>
                                <option value="1-10">1-10 Employees</option>
                                <option value="11-50">11-50 Employees</option>
                                <option value="51-200">51-200 Employees</option>
                                <option value="201+">201+ Employees</option>
                            </select>
                        </div>
                        <FieldError className="text-red-500 text-[10px] font-medium">
                            {errors.companySize?.message}
                        </FieldError>
                    </Select>
                </div>

                {/* ইন্ডাস্ট্রি টাইপ ড্রপডাউন */}
                <Select isInvalid={!!errors.industryType} className="flex flex-col gap-1.5">
                    <Label className="text-gray-700 font-semibold">Industry Type *</Label>
                    <div className="relative">
                        <select 
                            className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs appearance-none"
                            {...register("industryType", { required: "Please select industry type" })}
                        >
                            <option value="">Select Industry Type</option>
                            <option value="IT/Software">IT / Software Development</option>
                            <option value="Garments/Textile">Garments / Textile</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Finance/Banking">Finance / Banking</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <FieldError className="text-red-500 text-[10px] font-medium">
                        {errors.industryType?.message}
                    </FieldError>
                </Select>

                {/* কোম্পানির হেডকোয়ার্টার / ঠিকানা */}
                <TextField isInvalid={!!errors.companyAddress} className="flex flex-col gap-1.5">
                    <Label className="text-gray-700 font-semibold">Company Headquarters Address *</Label>
                    <Input
                        placeholder="Enter full address of the company"
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs"
                        {...register("companyAddress", { required: "Company address is required" })}
                    />
                    <FieldError className="text-red-500 text-[10px] font-medium">
                        {errors.companyAddress?.message}
                    </FieldError>
                </TextField>

                {/* কোম্পানির পরিচিতি / বায়ো */}
                <TextField isInvalid={!!errors.companyBio} className="flex flex-col gap-1.5 md:col-span-2">
                    <Label className="text-gray-700 font-semibold">About Company</Label>
                    <Input
                        placeholder="Briefly describe what your company does..."
                        className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:border-blue-500 focus:outline-none bg-white text-xs"
                        {...register("companyBio")}
                    />
                    <FieldError className="text-red-500 text-[10px] font-medium" />
                </TextField>
            </div>

            {/* সাবমিট বাটন */}
            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold h-11 rounded-xl shadow-md hover:opacity-90 transition-opacity text-xs uppercase tracking-wider"
            >
                Save Recruiter Profile
            </Button>
        </form>
    );
}
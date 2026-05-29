"use client";
import Link from 'next/link';
import { Form, TextField, Label, Input, Button, FieldError, Select, ListBox } from "@heroui/react";
import { FaGoogle } from 'react-icons/fa';
import { FiUser, FiMail, FiLock, FiImage, FiChevronDown, FiCheckCircle } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

export default function RegisterPage() {
    const router = useRouter()
    const handleSignUp = async (formData) => {
        const rawData = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signUp.email({
            name: rawData.name,
            email: rawData.email,
            image: rawData.image,
            role: rawData.role,
            password: rawData.password,
        })
        if (error) {
            toast.error(error.message || "Login failed. Please try again.");
        }
        else {
            toast.success('SignUp successfully!')
            router.push('/login')
            router.refresh()
        }
    };

    const handleSignUpWithGoogle = async () => {
        const data = await authClient.signUp.social({
            provider: "google",
            callBackURL: '/',
        });
    };

    return (
        <div className="min-h-[calc(100vh-68px)] w-full bg-workable-bg relative flex items-center justify-center p-4 sm:p-8 overflow-hidden text-workable-text-dark font-body">

            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(var(--color-workable-primary)_1px,transparent_1px)] [background-size:32px_32px]"></div>
            <div className="absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] bg-workable-primary/5 rounded-full blur-[140px] z-0 pointer-events-none" />

            <div className="w-full max-w-5xl bg-white border border-workable-text-muted/10 rounded-2xl shadow-xl z-10 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-workable-dark-green text-white relative">

                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                    <div className="my-6 lg:my-0 space-y-6 text-left relative z-10">
                        <span className="font-heading font-extrabold text-xl tracking-tight text-white block">
                            Job<span className="text-white/70">Vista</span>
                        </span>

                        <div className="space-y-2">
                            <h1 className="text-2xl lg:text-3xl font-heading font-extrabold tracking-tight text-white leading-tight">
                                Your Next Career <br />Move Starts Here.
                            </h1>
                            <p className="text-white/70 text-xs leading-relaxed max-w-xs font-normal">
                                Create your account to discover elite global opportunities, or build a scalable pipeline to hire 10x vetted talent.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <div className="flex items-start gap-2.5 text-xs text-white/90">
                                <FiCheckCircle className="text-white text-base mt-0.5 shrink-0 opacity-80" />
                                <div>
                                    <span className="font-bold block">Smart Job Matching</span>
                                    <span className="text-white/60 text-[11px] font-normal">Dynamic job sorting tailored perfectly to your expertise.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs text-white/90">
                                <FiCheckCircle className="text-white text-base mt-0.5 shrink-0 opacity-80" />
                                <div>
                                    <span className="font-bold block">One-Click Apply Pipeline</span>
                                    <span className="text-white/60 text-[11px] font-normal">Fast-track your submissions directly to premium tech teams.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs text-white/90">
                                <FiCheckCircle className="text-white text-base mt-0.5 shrink-0 opacity-80" />
                                <div>
                                    <span className="font-bold block">Unified Multi-Role Dashboard</span>
                                    <span className="text-white/60 text-[11px] font-normal">Tailored user-experience whether you are hiring or seeking.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block text-[10px] text-white/40 font-mono tracking-widest relative z-10">
                        JOBVISTA AUTH SERVICES // 2026
                    </div>
                </div>

                <div className="lg:col-span-7 p-8 lg:p-12 bg-white flex flex-col justify-center">
                    <div className="w-full max-w-md mx-auto space-y-5">

                        <div className="text-left">
                            <h2 className="text-xl font-heading font-extrabold tracking-tight text-workable-text-dark">Create Account</h2>
                            <p className="text-workable-text-muted text-xs mt-1">Join our network as a job seeker or talent recruiter</p>
                        </div>

                        <Button
                            onPress={handleSignUpWithGoogle}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 bg-workable-bg hover:bg-workable-bg border border-workable-text-muted/10 text-workable-text-dark text-xs font-semibold uppercase tracking-wider h-11 rounded-xl transition-all cursor-pointer"
                        >
                            <FaGoogle className="w-3.5 h-3.5 text-workable-primary" />
                            <span>Sign up with Google</span>
                        </Button>

                        <div className="relative flex items-center justify-center text-[10px] uppercase tracking-widest text-workable-text-muted/30">
                            <div className="w-full border-t border-workable-text-muted/10"></div>
                            <span className="bg-white px-4 absolute whitespace-nowrap">Or SignUp manually</span>
                        </div>

                        <Form action={handleSignUp} className="space-y-3.5 text-left">

                            <TextField isRequired name="name" type="text" className="w-full">
                                <Label className="text-[11px] font-bold tracking-wider text-workable-text-muted mb-1 block">Username</Label>
                                <div className="w-full relative flex items-center">
                                    <FiUser className="absolute left-4 text-workable-text-muted w-4 h-4 pointer-events-none" />
                                    <Input
                                        type="text"
                                        placeholder="johndoe123"
                                        className="w-full bg-workable-bg text-workable-text-dark placeholder-workable-text-muted/60 text-sm border border-workable-text-muted/10 focus:border-workable-primary rounded-xl pl-11 pr-4 py-2.5 outline-none transition-colors duration-200 block"
                                    />
                                </div>
                                <FieldError className="text-rose-500 text-[11px] mt-0.5 block" />
                            </TextField>

                            <TextField isRequired name="email" type="email" className="w-full"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                }}>
                                <Label className="text-[11px] font-bold tracking-wider text-workable-text-muted mb-1 block">Email Address</Label>
                                <div className="w-full relative flex items-center">
                                    <FiMail className="absolute left-4 text-workable-text-muted w-4 h-4 pointer-events-none" />
                                    <Input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full bg-workable-bg text-workable-text-dark placeholder-workable-text-muted/60 text-sm border border-workable-text-muted/10 focus:border-workable-primary rounded-xl pl-11 pr-4 py-2.5 outline-none transition-colors duration-200 block"
                                    />
                                </div>
                                <FieldError className="text-rose-500 text-[11px] mt-0.5 block" />
                            </TextField>

                            <TextField isRequired name="image" type="url" className="w-full">
                                <Label className="text-[11px] font-bold tracking-wider text-workable-text-muted mb-1 block">Profile Image URL</Label>
                                <div className="w-full relative flex items-center">
                                    <FiImage className="absolute left-4 text-workable-text-muted w-4 h-4 pointer-events-none" />
                                    <Input
                                        type="url"
                                        placeholder="https://example.com/avatar.png"
                                        className="w-full bg-workable-bg text-workable-text-dark placeholder-workable-text-muted/60 text-sm border border-workable-text-muted/10 focus:border-workable-primary rounded-xl pl-11 pr-4 py-2.5 outline-none transition-colors duration-200 block"
                                    />
                                </div>
                                <FieldError className="text-rose-500 text-[11px] mt-0.5 block" />
                            </TextField>


                            <div className="w-full">
                                <label className="text-[11px] font-bold tracking-wider text-workable-text-muted mb-1 block uppercase">
                                    Role
                                </label>
                                <div className="w-full relative flex items-center">
                                    {/* Left Side Icon - React Icon (FiUser) */}
                                    <span className="absolute left-4 text-workable-text-muted pointer-events-none">
                                        <FiUser className="w-4 h-4" />
                                    </span>

                                    <select
                                        name="role"
                                        className="w-full bg-workable-bg text-workable-text-dark text-sm border border-workable-text-muted/10 focus:border-workable-primary rounded-xl pl-11 pr-10 py-2.5 outline-none transition-colors duration-200 block appearance-none cursor-pointer"
                                        defaultValue=""
                                        required
                                    >

                                        <option value="" className="bg-workable-bg text-workable-text-dark font-medium" hidden>
                                            Choose an option...
                                        </option>
                                        <option value="seeker" className="bg-workable-bg text-workable-text-dark">
                                            Job Seeker
                                        </option>
                                        <option value="recruiter" className="bg-workable-bg text-workable-text-dark">
                                            Recruiter
                                        </option>
                                    </select>

                                    {/* Right Side Arrow Icon - React Icon (FiChevronDown) */}
                                    <span className="absolute right-4 text-workable-text-muted/60 pointer-events-none">
                                        <FiChevronDown className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }
                                    return null;
                                }}
                            >

                                <Label className="text-[11px] font-bold tracking-wider text-workable-text-muted mb-1 block">Password</Label>
                                <div className="w-full relative flex items-center">
                                    <FiLock className="absolute left-4 text-workable-text-muted w-4 h-4 pointer-events-none" />
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-workable-bg text-workable-text-dark placeholder-workable-text-muted/60 text-sm border border-workable-text-muted/10 focus:border-workable-primary rounded-xl pl-11 pr-4 py-2.5 outline-none transition-colors duration-200 block"
                                    />
                                </div>
                                <FieldError className="text-rose-500 text-[11px] mt-0.5 block" />
                            </TextField>

                            <Button
                                type="submit"
                                className="w-full bg-workable-primary hover:bg-workable-dark-green text-white font-bold text-xs uppercase tracking-widest h-11 rounded-xl mt-3 cursor-pointer transition-colors shadow-md shadow-workable-primary/10"
                            >
                                Sign Up
                            </Button>
                        </Form>

                        <p className="text-center text-xs text-workable-text-muted pt-0.5">
                            Already have an account? <Link href="/login" className="text-workable-primary hover:underline font-bold ml-1">Login here</Link>
                        </p>
                    </div>
                </div>

                <div className="lg:hidden p-4 text-center text-[9px] text-workable-text-muted/60 font-mono border-t border-workable-text-muted/10 bg-workable-bg/50">
                    JOBVISTA AUTH SYSTEMS // 2026
                </div>

            </div>
        </div>
    );
}
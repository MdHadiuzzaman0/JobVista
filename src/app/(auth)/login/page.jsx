"use client";
import Link from 'next/link';
import { Form, TextField, Label, Input, Button, FieldError, Spinner } from "@heroui/react";
import { FaGoogle } from 'react-icons/fa';
import { FiMail, FiLock, FiCheckCircle } from 'react-icons/fi';
import { authClient } from "@/lib/auth-client";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const rawData = Object.fromEntries(formData.entries());
        try {
            const { data, error } = await authClient.signIn.email({
                email: rawData.email,
                password: rawData.password,
            });
            if (error) {
                toast.error(error.message || "Invalid credentials. Please try again.");
            } else {
                toast.success('Logged in successfully!');
                router.push('/');
                router.refresh();
            }
        } catch (err) {
            console.error("Login Error: ", err);
            toast.error("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (err) {
            toast.error("Google sign-in failed.");
        }
    };

    return (
        <div className="min-h-[calc(100vh-68px)] w-full bg-workable-bg relative flex items-center justify-center p-4 sm:p-8 overflow-hidden text-workable-text-dark font-body">

            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(var(--color-workable-primary)_1px,transparent_1px)] [background-size:32px_32px]"></div>
            <div className="absolute bottom-[-15%] left-[-15%] w-[60vw] h-[60vw] bg-workable-primary/5 rounded-full blur-[140px] z-0 pointer-events-none" />

            <div className="w-full max-w-5xl bg-white border border-workable-text-muted/10 rounded-2xl shadow-xl z-10 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-workable-dark-green text-white relative">

                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                    <div className="my-6 lg:my-0 space-y-6 text-left relative z-10">
                        <span className="font-heading font-extrabold text-xl tracking-tight text-white block">
                            Job<span className="text-white/70">Vista</span>
                        </span>

                        <div className="space-y-2">
                            <h1 className="text-2xl lg:text-3xl font-heading font-extrabold tracking-tight text-white leading-tight">
                                Welcome Back to <br />Your Workspace.
                            </h1>
                            <p className="text-white/70 text-xs leading-relaxed max-w-xs font-normal">
                                Sign in to check your talent pipeline, manage active listings, or land your next elite engineering role.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <div className="flex items-start gap-2.5 text-xs text-white/90">
                                <FiCheckCircle className="text-white text-base mt-0.5 shrink-0 opacity-80" />
                                <div>
                                    <span className="font-bold block">10,000+ Companies</span>
                                    <span className="text-white/60 text-[11px] font-normal">Actively scouting for vetted 10x talent daily.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs text-white/90">
                                <FiCheckCircle className="text-white text-base mt-0.5 shrink-0 opacity-80" />
                                <div>
                                    <span className="font-bold block">Smart ATS Pipeline</span>
                                    <span className="text-white/60 text-[11px] font-normal">Seamless candidate shortlisting and live tracking.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs text-white/90">
                                <FiCheckCircle className="text-white text-base mt-0.5 shrink-0 opacity-80" />
                                <div>
                                    <span className="font-bold block">95% Success Match</span>
                                    <span className="text-white/60 text-[11px] font-normal">Fast-tracked interview schedules and hires.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block text-[10px] text-white/40 font-mono tracking-widest relative z-10">
                        JOBVISTA AUTH SERVICES
                    </div>
                </div>

                <div className="lg:col-span-7 p-8 lg:p-12 bg-white flex flex-col justify-center">
                    <div className="w-full max-w-md mx-auto space-y-6">

                        <div className="text-left">
                            <h2 className="text-xl font-heading font-extrabold tracking-tight text-workable-text-dark">Sign In</h2>
                            <p className="text-workable-text-muted text-xs mt-1">Enter your platform credentials to access your dashboard</p>
                        </div>

                        <Button
                            onPress={handleSignInWithGoogle}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 bg-workable-bg hover:bg-workable-bg border border-workable-text-muted/10 text-workable-text-dark text-xs font-semibold uppercase tracking-wider h-12 rounded-xl transition-all cursor-pointer"
                        >
                            <FaGoogle className="w-3.5 h-3.5 text-workable-primary" />
                            <span>Continue with Google</span>
                        </Button>

                        <div className="relative flex items-center justify-center text-[10px] uppercase tracking-widest text-workable-text-muted/30">
                            <div className="w-full border-t border-workable-text-muted/10"></div>
                            <span className="bg-white px-4 absolute whitespace-nowrap">Or secure login</span>
                        </div>

                        <Form onSubmit={handleLogin} className="space-y-4 text-left">

                            <TextField isRequired name="email" type="email" className="w-full"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                }}>
                                <Label className="text-[11px] font-bold tracking-wider text-workable-text-muted mb-1.5 block">Email Address</Label>
                                <div className="w-full relative flex items-center">
                                    <FiMail className="absolute left-4 text-workable-text-muted w-4 h-4 pointer-events-none" />
                                    <Input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-workable-bg text-workable-text-dark placeholder-workable-text-muted/60 text-sm border border-workable-text-muted/10 focus:border-workable-primary rounded-xl pl-11 pr-4 py-3 outline-none transition-colors duration-200 block"
                                    />
                                </div>
                                <FieldError className="text-rose-500 text-[11px] mt-1 block" />
                            </TextField>

                            <TextField isRequired minLength={8} name="password" type="password" className="w-full"
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
                                <div className="flex justify-between items-center mb-1.5">
                                    <Label className="text-[11px] font-bold tracking-wider text-workable-text-muted block">Password</Label>
                                    <Link href="/forgot-password" className="text-[11px] text-workable-primary hover:underline font-semibold">Forgot?</Link>
                                </div>
                                <div className="w-full relative flex items-center">
                                    <FiLock className="absolute left-4 text-workable-text-muted w-4 h-4 pointer-events-none" />
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-workable-bg text-workable-text-dark placeholder-workable-text-muted/60 text-sm border border-workable-text-muted/10 focus:border-workable-primary rounded-xl pl-11 pr-4 py-3 outline-none transition-colors duration-200 block"
                                    />
                                </div>
                                <FieldError className="text-rose-500 text-[11px] mt-1 block" />
                            </TextField>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-workable-primary hover:bg-workable-dark-green text-white font-bold text-xs uppercase tracking-widest h-12 rounded-xl mt-4 cursor-pointer transition-all shadow-md shadow-workable-primary/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Spinner color="success"/>
                                        <span>Processing...</span>
                                    </>
                                ) : (
                                    <span>Login to Account</span>
                                )}
                            </Button>
                        </Form>

                        <p className="text-center text-xs text-workable-text-muted pt-1">
                            Don&apos;t have an account yet? <Link href="/signup" className="text-workable-primary hover:underline font-bold ml-1">Sign-up here</Link>
                        </p>
                    </div>
                </div>

                <div className="lg:hidden p-4 text-center text-[9px] text-workable-text-muted/60 font-mono border-t border-workable-text-muted/10 bg-workable-bg/50">
                    JOBVISTA AUTH SERVICES
                </div>

            </div >
        </div >
    );
}
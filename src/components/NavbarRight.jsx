"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiLogOut, FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

const NavbarRight = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // outside click এ বন্ধ হবে
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (isPending) {
        return (
            <div className="text-workable-text-muted font-mono text-xs animate-pulse">
                Loading....
            </div>
        );
    }

    async function logout() {
        await authClient.signOut();
        router.push("/login");
        router.refresh();
    }

    const defaultItems = [
        { id: "home", label: "Home", href: "/" },
        { id: "explore_jobs", label: "Explore Jobs", href: "/explore_jobs" },
    ];

    const seekerItems = [
        { id: "profile", label: "Profile", href: "/profile" },
        { id: "explore_jobs", label: "Explore Jobs", href: "/explore_jobs" },
        { id: "applied_jobs", label: "Applied Jobs", href: "/applied_jobs" },
        { id: "saved_jobs", label: "Saved Items", href: "/saved_jobs" },
    ];

    const recruiterItems = [
        { id: "company_profile", label: "Company", href: "/company_profile" },
        { id: "dashboard", label: "Dashboard", href: "/dashboard" },
        { id: "explore_jobs", label: "Explore Jobs", href: "/explore_jobs" },
        { id: "post_job", label: "Post Job", href: "/post_job" },
        { id: "applicants", label: "Applicants", href: "/applicants" },
    ];
    
    if (!user?.role){
         menuItems = defaultItems;
    } else if (user?.role === "seeker") {
        menuItems = seekerItems;
    } else if (user?.role === "recruiter") {
        menuItems = recruiterItems;
    }

    return (
        <div className="flex items-center gap-4">

            {/* ── GUEST (NOT LOGGED IN) ── */}
            {!session && (
                <div className="flex items-center gap-4 font-heading text-sm uppercase tracking-wide">
                    <Link
                        href="/login"
                        className="text-workable-text-dark font-bold hover:text-workable-dark-green transition-colors duration-200 px-2"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-workable-dark-green hover:bg-workable-primary text-white font-bold rounded-full py-2 shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
                        style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
                    >
                        Sign Up
                    </Link>
                </div>
            )}

            {/* ── LOGGED IN ── */}
            {session && (
                <div className="relative" ref={dropdownRef}>

                    {/* Trigger pill */}
                    <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`flex items-center gap-3 border px-4 py-2 rounded-full shadow-sm cursor-pointer select-none transition-all duration-300
                            ${isOpen
                                ? "bg-white border-workable-dark-green"
                                : "bg-workable-bg border-workable-text-muted/20 hover:border-workable-dark-green/40 hover:bg-white"
                            }`}
                    >
                        {/* Avatar */}
                        <div>
                            <Avatar
                                size="sm"
                                className={`w-8 h-8 rounded-full ring-2 transition-all duration-300
                                ${isOpen ? "ring-workable-dark-green/30" : "ring-transparent"}`}
                            >
                                <Avatar.Image
                                    alt={user?.name || "User"}
                                    src={user?.image}
                                    className="rounded-full object-cover"
                                />
                                <Avatar.Fallback className="rounded-full bg-workable-dark-green text-white font-heading font-bold text-xs">
                                    {user?.name?.charAt(0)}
                                </Avatar.Fallback>
                            </Avatar>
                        </div>

                        {/* Name + role */}
                        <div className="flex flex-col text-left">
                            <span className="text-xs font-body text-workable-text-dark font-bold tracking-wide leading-tight">
                                {user?.name}
                            </span>
                            {/* 🎯 রোল না থাকলে সুন্দর করে "New Member" বা "Guest" টেক্সট দেখাবে */}
                            <span className="text-[9px] font-mono uppercase tracking-widest text-workable-primary font-bold leading-tight">
                                {user?.role || "New Member"}
                            </span>
                        </div>

                        {/* Chevron */}
                        <FiChevronDown
                            className={`w-4 h-4 text-workable-text-muted transition-all duration-300
                                ${isOpen ? "rotate-180 text-workable-dark-green" : "hover:text-workable-dark-green"}`}
                        />
                    </div>

                    {/* Dropdown panel */}
                    {isOpen && (
                        <div className="absolute right-0 top-full mt-2 bg-workable-bg border border-workable-text-muted/10 shadow-2xl rounded-2xl z-50 overflow-hidden py-2 text-center" style={{ width: "280px" }}>

                            {/* Section label */}
                            <div className="px-4 pt-1 pb-2 border-b border-workable-text-muted/10">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-workable-text-muted">
                                    Dashboard Actions
                                </span>
                            </div>

                            {/* Menu items */}
                            <div className="px-2 pt-2 flex flex-col gap-0.5">
                                {menuItems.map((item) => (
                                    <Button
                                        key={item.id} variant="light" disableAnimation
                                        onClick={() => { router.push(item.href); setIsOpen(false); }}
                                        className="w-full bg-transparent min-w-0 h-auto font-heading text-xs uppercase tracking-wide text-workable-text-dark hover:bg-workable-dark-green/15 hover:text-workable-dark-green rounded-xl px-3 py-2.5 transition-all cursor-pointer block text-center"
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </div>

                            {/* Logout */}
                            <div className="px-2 pt-2 mt-1 border-t border-workable-text-muted/10">
                                <Button
                                    onClick={() => { logout(); setIsOpen(false); }}
                                    className="w-full bg-transparent min-w-0 h-auto font-heading text-xs uppercase tracking-wide text-rose-500 hover:bg-rose-200 rounded-xl px-3 py-2.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <FiLogOut className="w-4 h-4" />
                                    Logout
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NavbarRight;
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SubNavbar = () => {
    const pathname = usePathname();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    // ইউজার লগইন না থাকলে সাব-ন্যাভবার দেখাবে না
    if (!session) return null;

    // রোল অনুযায়ী মেনু আইটেম সেটআপ
    const seekerLinks = [
        { name: "Applied", href: "/applied_jobs", count: 4 }, 
        { name: "Saved", href: "/saved_jobs", count: null },
        { name: "Profile", href: "/profile", count: null },
    ];

    const recruiterLinks = [
        { name: "Dashboard", href: "/dashboard", count: null },
        { name: "Post Job", href: "/post_job", count: null },
        { name: "Applicants", href: "/applicants", count: 12 },
        { name: "Company", href: "/company_profile", count: null },
    ];

    const links = user?.role === "recruiter" ? recruiterLinks : seekerLinks;

    return (
        <div className="w-full flex justify-center sticky top-[73px] z-40 mt-6 mb-4">
            <div className="bg-white/80 backdrop-blur-md border border-workable-text-muted/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-3 py-2 flex items-center gap-2 pointer-events-auto">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full font-heading text-[15px] uppercase tracking-widest transition-all duration-300 select-none
                                ${isActive
                                    ? "bg-workable-dark-green/10 text-workable-dark-green font-bold"
                                    : "text-workable-text-muted hover:text-workable-text-dark hover:bg-workable-bg"
                                }`}
                        >
                            {link.name}

                            {link.count && (
                                <span className={`flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[9px] font-mono transition-colors
                                    ${isActive
                                        ? "bg-workable-text-dark text-white"
                                        : "bg-workable-text-muted/20 text-workable-text-muted"
                                    }`}>
                                    {link.count}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SubNavbar;
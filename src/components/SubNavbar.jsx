"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Badge } from "@heroui/react";
import { useEffect } from "react";

const SubNavbar = () => {
    const pathname = usePathname();
    const { data: session } = authClient.useSession();
    const user = session?.user;
    
    const [appliedCount, setAppliedCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);

    useEffect(() => {
        async function fetchCounts() {
            if (user?.email) {
                try {
                    const appliedData = await getAppliedJobs(user.email);
                    const savedData = await getSavedJobs(user.email);
                    setAppliedCount(appliedData?.length || 0);
                    setSavedCount(savedData?.length || 0);
                } catch (error) {
                    console.error("Failed to fetch sub-navbar counts:", error);
                }
            }
        }
        fetchCounts();
    }, [user?.email]); 

    if (!session) return null;
    
    const seekerLinks = [
        { name: "Applied", href: "/applied_jobs", count: appliedCount },
        { name: "Saved", href: "/saved_jobs", count: savedCount },
        { name: "Profile", href: "/profile", count: 0 },
    ];

    const recruiterLinks = [
        { name: "Dashboard", href: "/dashboard", count: null },
        { name: "Post Job", href: "/post_job", count: null },
        { name: "Applicants", href: "/applicants", count: null },
        { name: "Company", href: "/company_profile", count: null },
    ];

    const links = user?.role === "recruiter" ? recruiterLinks : seekerLinks;

    return (
        
        <div className="w-full flex justify-center sticky top-[73px] z-40 mt-4 mb-8 px-4">
            <div className="bg-white/90 backdrop-blur-md border border-workable-text-muted/10 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.05)] px-3 py-1 flex items-center gap-2 pointer-events-auto">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative flex items-center gap-2 px-3 py-1 rounded-full font-heading text-[10px] uppercase tracking-widest transition-all duration-300 select-none whitespace-nowrap
                                ${isActive
                                    ? "bg-workable-dark-green/10 text-workable-dark-green font-bold"
                                    : "text-workable-text-muted hover:text-workable-text-dark hover:bg-workable-bg"
                                }`}
                        >
                            {link.count > 0 ?
                                <Badge.Anchor>
                                    {link.name}
                                    <Badge color="success" size="sm">
                                        {link.count}
                                    </Badge>
                                </Badge.Anchor>
                                    :
                                link.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SubNavbar;
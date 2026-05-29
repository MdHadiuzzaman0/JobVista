'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";

const NavLink = ({ href, children, className = "" }) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    
    return (
        <Link 
            href={href} 
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                isActive 
                    ? "text-[#00624A] bg-white border border-[#E5E4EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] font-bold" 
                    : "text-[#656B73] hover:text-[#00624A] hover:bg-white/80 hover:shadow-[0_2px_6px_rgba(0,0,0,0.02)]"
            } ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
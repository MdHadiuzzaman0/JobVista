'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";

const NavLink = ({ href, children, className }) => {
    const pathname = usePathname();
    const mainRoutes = ["/", "/explore_jobs", "/companies", "/resources"];
    
    let isMain = false;
    let isActive = false;

    if (mainRoutes.includes(href)) {
        isMain = true;
        isActive = pathname === href; 
    } else {
        isMain = false;
        isActive = pathname.startsWith(href); 
    }

    let activeClassCombo = "";
    
    if (isMain) {
        if (isActive) {
            activeClassCombo = "text-workable-dark-green bg-workable-dark-green/5 border border-workable-dark-green/30 rounded-full px-2 py-1 font-heading font-black shadow-[0_2px_10px_rgba(0,98,74,0.04)]";
        } else {
            activeClassCombo = "text-workable-text-muted font-sans font-medium border border-transparent hover:text-workable-dark-green";
        }
    } else {
        if (isActive) {
            activeClassCombo = "text-workable-dark-green bg-purple-50 border border-workable-text-muted/50 shadow-[0_4px_20px_rgba(0,0,0,0.04)] font-heading font-black";
        } else {
            activeClassCombo = "text-workable-text-muted font-sans font-semibold border border-transparent hover:text-workable-text-dark hover:bg-purple/30 hover:border-workable-text-muted/10 hover:shadow-[0_2px_6px_rgba(0,0,0,0.02)]";
        }
    }

    return (
        <Link 
            href={href} 
            className={`transition-all duration-300 ${activeClassCombo} ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
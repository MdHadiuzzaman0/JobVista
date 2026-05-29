"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const NavbarRight = () => {
    const router = useRouter();
    // 🟢 BetterAuth-এর সঠিক ডাটা স্ট্রাকচার
    const { data, isPending } = authClient.useSession(); 
    console.log(data)
    const session = data?.session;
    const user = data?.user;

    // 🚪 লগআউট হ্যান্ডলার
    const handleSignOut = async () => {
        try {
            await authClient.signOut();
            toast.success("Logged out successfully");
            router.refresh();
        } catch (err) {
            toast.error("Failed to log out");
        }
    };

    if (isPending) {
        return <div className="text-xs text-workable-text-muted">Loading session...</div>;
    }

    return (
        <div className="flex items-center gap-3">
            {/* 🔄 যদি সেশন থাকে (ইউজার লগইন অবস্থায় থাকে) */}
            {session ? (
                <div className="flex items-center gap-3">
                        <Image 
                            src={user.image} 
                            alt={user.name} fill
                            className="w-8 h-8 rounded-full border border-workable-primary/20 object-cover"
                        />
                        <div className='flex gap-2'>
                    <span className="text-sm font-medium text-workable-text-dark hidden sm:inline">
                        {user?.name || "User"}
                    </span>
                    <h3>{user.role}</h3>
                    </div>
                    <button 
                        onClick={handleSignOut}
                        className="text-xs font-semibold text-rose-500 hover:underline cursor-pointer"
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                /* 🔐 যদি সেশন না থাকে (ইউজার গেস্ট হিসেবে আছে) */
                <>
                    <Link href="/login" className="font-body font-medium text-[#1E242B] px-4 py-2 hover:text-[#00624A] transition-colors"> 
                        Log In 
                    </Link>
                    <Link href="/signup" className="btn font-body bg-[#008264] hover:bg-[#00624A] text-white border-none rounded-full px-6 min-h-0 h-11 flex items-center justify-center transition-all shadow-sm"> 
                        Sign Up 
                    </Link>
                </>
            )}
        </div>
    );
};

export default NavbarRight;
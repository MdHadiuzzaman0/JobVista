import Link from 'next/link';
import NavLink from '@/components/NavLink';
import NavbarRight from './NavbarRight';
import { getUserInfo } from '@/lib/data';
import { auth } from "@/lib/auth"
import { headers } from "next/headers";

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers()
})
  const user = session?.user;
  const userInfo = await getUserInfo(user?.email)
  console.log(session, user?.email, userInfo)

  return (
    <div className="navbar px-6 fixed lg:sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#E5E4EA]/60 font-body">

      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-3 cursor-pointer select-none group">
          <div className="w-11 h-11 bg-white border border-[#E5E4EA] rounded-xl flex items-center justify-center p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all group-hover:scale-105 group-hover:border-[#00624A]/20 duration-300">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="15" y="45" width="14" height="40" rx="5" fill="#00624A" />
              <rect x="38" y="30" width="14" height="55" rx="5" fill="#00624A" />
              <circle cx="72" cy="15" r="8.5" fill="#00624A" />
              <path
                d="M60 27C58.5 27 57 28.5 57 30V48C57 51 59 52 60 52V81C60 83.5 62 85 64.5 85C67 85 68.5 83.5 68.5 81V58H75.5V81C75.5 83.5 77 85 79.5 85C82 85 84 83.5 84 81V52C85 52 87 51 87 48V30C87 28.5 85.5 27 84 27H60ZM72 27L74 38L72 40L70 38L72 27Z"
                fill="#00624A"
              />
            </svg>
          </div>

          <span className="font-heading font-extrabold text-2xl tracking-tight text-[#1E242B]">
            Job<span className="text-[#008264]">Vista</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-3">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/explore_jobs">Explore Jobs</NavLink></li>
          <li><NavLink href="/companies"> Companies</NavLink></li>
          <li><NavLink href="/resources">Resources</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end">
      <NavbarRight session={session} userInfo={userInfo}/>
      </div>

    </div>
  );
}
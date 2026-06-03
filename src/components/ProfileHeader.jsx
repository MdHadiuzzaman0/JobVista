

export default function ProfileHeader({ user, profileData }) {
  const userName = profileData?.name || user?.name || "User";

  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
      <div className="flex flex-col gap-1">
        {/* নাম সেকশন */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
          Hello <span className='animate-pulse'>👋</span> <span className="text-workable-text-dark">{userName}</span>
        </h1>
        
        {/* স্ট্যাটিক লাস্ট আপডেট ডেট সেকশন */}
        <p className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">
          Last update date: <span className="text-gray-500">18 Apr 2026</span>
        </p>
      </div>
    </div>
  );
}
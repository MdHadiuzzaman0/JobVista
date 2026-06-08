export default function ProfileHeader({ userFullName, userInfo }) {
  
  const getFormattedDate = (id) => {
    try {
      if (!id) return "Not Available";
      const timestampHex = id.toString().slice(0, 8);
      const dateMilliseconds = parseInt(timestampHex, 16) * 1000;
      const dateObj = new Date(dateMilliseconds);
      return dateObj.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
      });
    } catch (error) {
      return "error"
    }
  };

  const lastUpdateDate = getFormattedDate(userInfo?._id);

  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
      <div className="flex flex-col gap-1">
        {/* নাম সেকশন */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
          Hello <span className="animate-pulse">👋</span> <span className="text-blue-500">{userFullName}</span>
        </h1>
        
        {/* ডাইনামিক লাস্ট আপডেট ডেট সেকশন */}
        <p className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">
          Last update: <span className="text-gray-500">{lastUpdateDate}</span>
        </p>
      </div>
    </div>
  );
}
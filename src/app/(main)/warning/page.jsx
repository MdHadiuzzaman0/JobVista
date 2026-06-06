import { Link } from '@heroui/react'

const WarningForGuest = () => {
    return (
                <div className="w-full flex flex-col items-center justify-center pt-26 mb-8 px-4 gap-2">
                    <p className="text-gray-500 text-xs font-medium">
                        You haven't selected your role yet!
                    </p>
                    <Link href="/create_profile" className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:from-pink-700 hover:to-red-600 transition-all duration-300 select-none animate-pulse">
                        Create Your Profile Now
                    </Link>
                </div>
            );
};

export default WarningForGuest;
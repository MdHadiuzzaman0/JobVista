'use client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

const GoBackBtnInDetailPage = () => {
    const router = useRouter()
    return (
        <div>
            <Button
                onPress={() => router.back()}
                variant="light" // HeroUI-এর ব্যাকগ্রাউন্ড রিসেট করার জন্য
                disableAnimation
                className="flex items-center gap-2 bg-white hover:bg-workable-dark-green border border-purple-100 shadow-sm hover:shadow-md hover:bg-purple-100 text-workable-text-muted hover:text-white font-heading font-bold text-xs px-4 py-2 rounded-full transition-all duration-200 cursor-pointer h-auto min-w-0"
            >
                <FiArrowLeft size={14} className="shrink-0" />
                <span className="tracking-wide">Go back</span>
            </Button>
        </div>
    );
};

export default GoBackBtnInDetailPage;
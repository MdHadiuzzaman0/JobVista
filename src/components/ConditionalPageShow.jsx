'use client';
import { usePathname } from "next/navigation";
import ProcessFlow from "@/components/ProcessFlow";
import RatingAndReview from "@/components/RatingAndReview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";

const ConditionalPageShow = () => {
    const pathName = usePathname();
    if (pathName !== '/') return null
    return (
        <>
           <ProcessFlow />
           <RatingAndReview />
           <WhyChooseUs />
           <CallToAction />
           <FAQ />
        </>
    );
};

export default ConditionalPageShow;
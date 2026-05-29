import Image from 'next/image';

export default function ProcessSection() {
    const steps = [
    {
        id: 1,
        category: "Step 01",
        title: "Create & Publish Jobs",
        desc: "Design your job post with specific requirements and publish it instantly across the platform. Reach a vast pool of talented candidates waiting for the right opportunity.",
        imgSrc: "/step1.png", 
    },
    {
        id: 2,
        category: "Step 02",
        title: "Track & Screen Applicants",
        desc: "Monitor all incoming applications through a clean, centralized applicant tracking dashboard. Filter and shortlist the best profiles effortlessly based on skills and match score.",
        imgSrc: "/step2.png",
    },
    {
        id: 3,
        category: "Step 03",
        title: "Schedule & Interview",
        desc: "Set up interview slots and connect directly with short-listed candidates through our integrated workspace. Manage feedback and collaborate with your team to make decisions faster.",
        imgSrc: "/step3.png",
    },
    {
        id: 4,
        category: "Step 04",
        title: "Offer & Confirm Hire",
        desc: "Send customized job offers and handle digital confirmations directly within the system. Smoothly transition the selected talent into your official team onboard structure.",
        imgSrc: "/step4.png",
    },
];

    return (
        <section className="bg-white py-16 md:py-24 px-6 md:px-12 font-body border-t border-workable-bg">
            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-workable-text-dark tracking-tight">
                        Manage your entire hiring process
                    </h2>
                    <p className="text-base text-workable-text-muted font-medium w-8/12 mx-auto">
                        From sourcing to onboarding, connect every step of your hiring journey into one seamless, collaborative workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-12">
                    {steps.map(step => (
                        <div key={step.id} className="flex flex-col p-6 bg-[#F8F9FB] border border-[#E5E4EA] rounded-3xl group shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-workable-primary/20 transition-all duration-300">

                            <div className="w-full h-[320px] md:h-[400px] bg-white rounded-2xl overflow-hidden border border-[#E5E4EA] relative shadow-sm">
                                <Image
                                    src={step.imgSrc}
                                    alt={step.title}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-2 mt-6 px-1">
                                <span className="font-heading font-extrabold text-xs uppercase tracking-widest text-workable-primary">
                                    {step.category}
                                </span>
                                <h3 className="font-heading font-bold text-xl md:text-2xl text-workable-text-dark group-hover:text-workable-dark-green transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-workable-text-muted font-medium leading-relaxed line-clamp-3 text-justify">
                                    {step.desc}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
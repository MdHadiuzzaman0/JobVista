import { FiLayers, FiShield, FiCpu, FiHeadphones } from 'react-icons/fi';

export default function WhyChooseUs() {
    const features = [
        {
            id: 1,
            icon: <FiLayers className="w-6 h-6 text-workable-primary" />,
            title: "All-in-One Workspace",
            desc: "Manage jobs, track applicants, and collaborate with your hiring team from a single, intuitive dashboard."
        },
        {
            id: 2,
            icon: <FiCpu className="w-6 h-6 text-workable-primary" />,
            title: "Smart Automations",
            desc: "Save hours of manual effort with automated email sequencing, interview scheduling, and instant status updates."
        },
        {
            id: 3,
            icon: <FiShield className="w-6 h-6 text-workable-primary" />,
            title: "Enterprise-Grade Security",
            desc: "Your data privacy is our priority. Every candidate profile and resume resume is safe with secure encryption."
        },
        {
            id: 4,
            icon: <FiHeadphones className="w-6 h-6 text-workable-primary" />,
            title: "Dedicated Human Support",
            desc: "Get real solutions when you need them. Our support team is available via chat to help you streamline your hiring."
        }
    ];

    return (

        <section className="w-full bg-white text-workable-text-dark py-16 px-6 md:px-12 font-body">
            <div className="max-w-6xl mx-auto space-y-12">

                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-workable-text-dark tracking-tight">
                        Built for Smarter & Faster Recruitment
                    </h2>
                    <p className="text-sm text-workable-text-muted leading-relaxed">
                        Everything you need to discover elite professionals and scale your engineering or business teams effortlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex flex-col items-center text-center space-y-3 p-2 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-workable-bg flex items-center justify-center border border-[#E5E4EA] group-hover:border-workable-primary/40 group-hover:bg-workable-primary/5 transition-all duration-300">
                                {feature.icon}
                            </div>

                            <div className="space-y-1.5">
                                <h3 className="font-heading font-bold text-base text-workable-text-dark tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="text-xs md:text-sm text-workable-text-muted leading-relaxed max-w-md">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
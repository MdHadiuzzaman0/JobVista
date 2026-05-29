import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';

export default function CTASection() {
    return (

        <section className="w-full bg-[#FAFAFA] text-workable-text-dark py-12 md:py-20 px-6 md:px-12 font-body overflow-hidden border-t border-[#E5E4EA]/50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                <div className="lg:col-span-7 text-center lg:text-left space-y-5 md:space-y-6 order-2 lg:order-1">
                    <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#1E242B] tracking-tight leading-[1.15]">
                        Let's grow your <br />
                        <span className="text-[#008264]">business & team</span> together
                    </h2>

                    <p className="text-sm md:text-base text-workable-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Explore our streamlined workspace designed to post jobs, manage applicants, and hire elite professionals. Start optimizing your pipeline today—no friction, just growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                        <button className="group btn font-body font-bold bg-[#008264] hover:bg-[#00624A] text-white border-none rounded-full px-8 py-2 flex items-center justify-center transition-all shadow-md active:scale-95 w-full sm:w-auto">
                            <span>Try it for free <FaAngleRight className="inline"/></span>
                        </button>

                        <span className="text-xs text-workable-text-muted font-semibold tracking-wide uppercase opacity-80 sm:border-l sm:border-[#E5E4EA] sm:pl-4 py-1">
                            • 15-day free trial <br className="hidden sm:block" />• No credit card required
                        </span>
                    </div>
                </div>

                <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] transition-transform duration-500 hover:scale-102">
                        <Image
                            src="/Team-work-bro.png"
                            alt="Team Work Collaboration"
                            fill
                            priority 
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
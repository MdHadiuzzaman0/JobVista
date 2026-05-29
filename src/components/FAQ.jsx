import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQSection() {
    const [openId, setOpenId] = useState(0);
    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "How do I get started with JobVista?",
            answer: "Getting started is simple! Just click on the 'Sign Up' button, create your employer or candidate profile, and you can immediately start posting jobs or applying to active openings."
        },
        {
            id: 2,
            question: "Is there a limit on the number of job posts?",
            answer: "With our 15-day free trial, you can post up to 3 active job listings simultaneously. For unlimited job postings and advanced candidate filtering, you can upgrade to our growth plans anytime."
        },
        {
            id: 3,
            question: "Can I customize the application process for candidates?",
            answer: "Yes, absolutely! From your company dashboard, you can add custom screening questions, select required assessment criteria, and automate stage-by-stage pipeline responses."
        },
        {
            id: 4,
            question: "What level of support do you provide?",
            answer: "We offer 24/7 dedicated chat and email support for all users. Our growth tier customers also receive personalized priority assistance and onboarding guidance from a dedicated account manager."
        },
        {
            id: 5,
            question: "Are there any hidden charges or contract tracking?",
            answer: "No hidden fees at all. JobVista works on a transparent pay-as-you-go monthly subscription. There are no long-term contracts, and you can upgrade, downgrade, or cancel your account at any moment."
        }
    ];

    return (

        <section className="w-full bg-white text-workable-text-dark py-16 md:py-24 px-6 md:px-12 font-body border-b border-[#E5E4EA]/50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px]">
                        <Image
                            src="/Questions-bro.png"
                            alt="Frequently Asked Questions Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1E242B] tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-workable-text-muted">
                            Have questions? We're here to help you understand how JobVista works.
                        </p>
                    </div>

                    <div className="space-y-3 pt-2">
                        {faqs.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
                                            ? 'border-[#008264] bg-[#008264]/5 shadow-[0_4px_12px_rgba(0,130,100,0.03)]'
                                            : 'border-[#E5E4EA] hover:border-gray-400 bg-white'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full flex items-center justify-between p-5 text-left gap-4 font-heading font-bold text-sm md:text-base text-[#1E242B] transition-colors"
                                    >
                                        <span className={isOpen ? 'text-[#008264]' : 'text-[#1E242B]'}>
                                            {faq.question}
                                        </span>

                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#008264] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            {isOpen ? <FiMinus className="w-3.5 h-3.5" /> : <FiPlus className="w-3.5 h-3.5" />}
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-50 border-t border-dashed border-[#E5E4EA]' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="p-5 text-xs md:text-sm text-workable-text-muted leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-center lg:text-left text-xs font-semibold text-workable-text-muted pt-2">
                        Still have questions? <span className="text-[#008264] cursor-pointer hover:underline">Chat with our support team.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
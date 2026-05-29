"use client";
import React from 'react';
import Link from 'next/link';
import { Button, Modal, Form, TextField, Label, Input, TextArea, FieldError } from "@heroui/react";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiShield, FiFileText, FiActivity, FiSend } from 'react-icons/fi';

export default function Footer() {

    const policies = [
        {
            title: "Privacy Policy",
            Icon: FiShield,
            content: "At JobVista, your privacy is our priority. We collect data such as resumes and profile details strictly to facilitate the recruitment process. All data is encrypted with industry-standard protocols."
        },
        {
            title: "Terms of Service",
            Icon: FiFileText,
            content: "By using JobVista, you agree to post authentic job listings and provide accurate professional information. Fraudulent accounts or spam postings will be terminated immediately without notice."
        },
        {
            title: "Cookie Policy",
            Icon: FiActivity,
            content: "We use essential cookies to maintain your session security. Performance cookies help us understand how you use JobVista so we can constantly improve our matching algorithms."
        }
    ];

    return (

        <footer className="w-full bg-[#031d16] text-white/70 pt-16 pb-8 px-8 font-body relative border-t border-workable-primary/20">

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(var(--color-workable-primary)_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="max-w-7xl mx-auto relative z-10 space-y-12">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5 text-left">

                    <div className="md:col-span-4 space-y-4">
                        <span className="font-heading font-extrabold text-2xl tracking-tight text-white block">
                            Job<span className="text-workable-primary">Vista</span>
                        </span>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            The smartest workspace to find elite engineering talent or land your next 10x developer role.
                        </p>
                        <div className="flex gap-2.5 pt-2">
                            {[FaLinkedin, FaGithub, FaTwitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-2.5 rounded-xl bg-white/[0.03] text-gray-400 hover:bg-workable-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-workable-primary/30">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-4 grid grid-cols-3 gap-4">
                        <div className="space-y-3.5">
                            <div className="flex items-center gap-1.5 text-workable-primary font-semibold">

                                <h4 className="text-xs uppercase tracking-widest text-white/90">Job Seeker</h4>
                            </div>
                            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                                <li><Link href="/jobs" className="hover:text-workable-primary transition-colors block">Explore Jobs</Link></li>
                                <li><Link href="/dashboard" className="hover:text-workable-primary transition-colors block">Upload Resume</Link></li>
                                <li><Link href="/profile" className="hover:text-workable-primary transition-colors block">Seeker Profile</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-3.5">
                            <div className="flex items-center gap-1.5 text-workable-primary font-semibold">
                                <h4 className="text-xs uppercase tracking-widest text-white/90">Recruiter</h4>
                            </div>
                            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                                <li><Link href="/post-job" className="hover:text-workable-primary transition-colors block">Post New Job</Link></li>
                                <li><Link href="/ats" className="hover:text-workable-primary transition-colors block">Talent Pipeline</Link></li>
                                <li><Link href="/pricing" className="hover:text-workable-primary transition-colors block">Premium Plans</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-3.5">
                            <div className="flex items-center gap-1.5 text-workable-primary font-semibold">
                                <h4 className="text-xs uppercase tracking-widest text-white/90">Admin</h4>
                            </div>
                            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                                <li><Link href="/post-job" className="hover:text-workable-primary transition-colors block">Console</Link></li>
                                <li><Link href="/ats" className="hover:text-workable-primary transition-colors block">Manage</Link></li>
                            </ul>
                        </div>
                       
                    </div>

                    <div className="md:col-span-4 space-y-4">
                        <div className="space-y-1">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-workable-primary">Get in Touch</h4>
                            <p className="text-xs text-gray-400">Have questions? Send us a message.</p>
                        </div>

                        <Form onSubmit={(e) => e.preventDefault()} className="space-y-4">

                            <TextField name="email" type="email" isRequired className="w-full">

                                <Input
                                    placeholder="name@example.com"
                                    className="w-full bg-white/[0.03] text-white placeholder-gray-600 text-sm border border-emerald-700 focus:border-workable-primary rounded-xl px-4 py-2.5 outline-none transition-colors duration-200"
                                />
                                <FieldError className="text-rose-500 text-[10px] mt-1 block" />
                            </TextField>

                            <TextField name="message" isRequired className="w-full">

                                <div className="relative w-full">
                                    <TextArea
                                        placeholder="Type your message here..."
                                        rows={4}
                                        className="w-full bg-white/[0.03] text-white placeholder-gray-600 text-sm border border-emerald-700 focus:border-workable-primary rounded-xl pl-4 pr-12 py-2.5 outline-none transition-colors duration-200 min-h-[100px] resize-none block"
                                    />

                                    <button
                                        type="submit"
                                        className="absolute right-3 bottom-3 p-2 rounded-lg bg-workable-primary/10 border border-emerald-700 hover:bg-workable-primary text-workable-primary hover:text-white transition-all duration-200 group active:scale-95 cursor-pointer z-20"
                                    >
                                        <FiSend className="w-4 h-4 transform transition-transform duration-200" />
                                    </button>
                                </div>

                                <FieldError className="text-rose-500 text-[10px] mt-1 block" />
                            </TextField>


                        </Form>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-medium text-gray-400 text-center sm:text-left">

                    <p className="opacity-50">© {new Date().getFullYear()} JobVista Inc. All rights reserved.</p>

                    <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
                        {policies.map((policy, index) => (
                            <Modal key={index}>
                                <Button
                                    variant="light"
                                    className="hover:text-workable-primary transition-colors text-xs font-medium text-gray-400 p-0 h-auto min-w-0 bg-transparent data-[hover=true]:bg-transparent"
                                >
                                    {policy.title}
                                </Button>

                                <Modal.Backdrop>
                                    <Modal.Container>
                                        <Modal.Dialog className="sm:max-w-[380px] font-body text-workable-text-dark bg-white rounded-2xl shadow-xl">
                                            <Modal.CloseTrigger />
                                            <Modal.Header className="flex items-center gap-2.5 pb-2 border-b border-gray-100">
                                                <div className="p-2 rounded-lg bg-workable-primary/10 text-workable-primary">
                                                    <policy.Icon className="size-4" />
                                                </div>
                                                <Modal.Heading className="text-base font-bold font-heading">{policy.title}</Modal.Heading>
                                            </Modal.Header>
                                            <Modal.Body className="pt-4">
                                                <p className="text-sm text-workable-text-muted leading-relaxed font-normal">
                                                    {policy.content}
                                                </p>
                                            </Modal.Body>
                                            <Modal.Footer className="pt-2">
                                                <Button className="w-full bg-workable-primary hover:bg-workable-dark-green text-white font-bold rounded-xl h-10 transition-colors" slot="close">
                                                    Got it, Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal.Dialog>
                                    </Modal.Container>
                                </Modal.Backdrop>
                            </Modal>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
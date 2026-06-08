import { useState } from "react";
import { Modal, Button, Dropdown, Label } from "@heroui/react";
import { FiGlobe, FiLock, FiShield, FiChevronDown } from "react-icons/fi";
import { updateProfileInfo } from "@/lib/action"; // 👈 তোমার সার্ভার অ্যাকশন ইম্পোর্ট মেক শিওর করো
import { toast } from "react-toastify";

export default function ProfileVisibilityModal({ user, visibility }) {
    const [selectedVisibility, setSelectedVisibility] = useState(visibility || "public");
    const visibilityOptions = {
        public: {
            label: "Public",
            icon: <FiGlobe className="text-workable-dark-green" size={16} />,
            desc: "Maximum exposure! All recruiters and search engines can view your profile and resume."
        },
        limited: {
            label: "Limited",
            icon: <FiShield className="text-ocean-slate-light" size={16} />,
            desc: "Only verified premium companies can see you. Safe from spam, high response rate."
        },
        private: {
            label: "Private",
            icon: <FiLock className="text-workable-text-muted" size={16} />,
            desc: "Hidden from search. Only employers of jobs you explicitly apply to can view your data."
        }
    };

    async function handleSave() {
        const result = await updateProfileInfo({ updatedData: { visibility : selectedVisibility }, email: user?.email });
        if (result?.success) {
            toast.success("Visibility updated successfully!");
        } else {
            toast.error("Failed to update visibility.");
        }
    }

    return (
        <Modal>
            {/* 🎯 Trigger Button - যা ড্যাশবোর্ডের টপ সেকশনে বসবে */}
            <div className="flex items-center gap-2">
                {/* ১. বামপাশের স্ট্যাটিক টেক্সট (এটি ক্লিকবল নয়) */}
                <span className="font-body text-workable-text-muted text-xs">
                    Profile Visibility Status:
                </span>

                {/* ২. শুধুমাত্র আইকন ও লেবেল অংশটুকু ক্লিকবল বাটন (যা মডাল ওপেন করবে) */}
                <Button
                    variant="secondary"
                    className={`flex items-center gap-1.5 px-2 py-1 rounded-xl font-bold text-[10px] border font-body cursor-pointer transition-all active:scale-95 min-w-0 h-auto ${selectedVisibility === "public" ? "bg-workable-dark-green/10 text-workable-dark-green border-workable-dark-green/30" :
                        selectedVisibility === "limited" ? "bg-workable-primary/20 text-ocean-slate-light border-workable-slate" :
                            "bg-workable-slate/40 text-workable-text-muted border-workable-slate/20"
                        }`}
                >
                    {/* আইকন এবং টেক্সট পাশাপাশি সুন্দরভাবে বসে যাবে */}
                    {visibilityOptions[selectedVisibility].icon}
                    <span>{visibilityOptions[selectedVisibility].label}</span>
                </Button>
            </div>

            <Modal.Backdrop>
                <Modal.Container>
                    {/* মডালের মূল বডিকে তোমার workable-bg এর সাথে ম্যাচ করানো হয়েছে */}
                    <Modal.Dialog className="sm:max-w-[360px] border border-workable-slate/50 rounded-2xl shadow-[0_12px_40px_rgba(4,32,43,0.4)] bg-workable-bg">
                        <Modal.CloseTrigger className="text-workable-text-muted hover:text-ocean-slate-light" />

                        <Modal.Header className="flex items-center gap-2.5 pb-3 border-b border-workable-slate/40">
                            {/* আইকন কন্টেইনারে গ্লোয়িং টিল (Glowing Teal Accent) */}
                            <Modal.Icon className="bg-workable-primary/20 text-workable-dark-green rounded-xl p-2 border border-workable-slate/30">
                                <FiGlobe size={18} />
                            </Modal.Icon>
                            <Modal.Heading className="text-base font-black text-ocean-slate-light font-heading tracking-wide">
                                Profile Visibility
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="overflow-visible pt-4">
                            <p className="text-xs text-workable-text-muted mb-4 font-body leading-relaxed">
                                Select how you want your profile to appear to employers.
                            </p>

                            {/* HeroUI Dropdown Component */}
                            <Dropdown>
                                <Button
                                    aria-label="Menu"
                                    variant="secondary"
                                    className="w-full justify-between flex items-center border border-workable-slate/60 bg-workable-bg hover:bg-workable-slate/20 rounded-xl px-3 py-2.5 text-ocean-slate-light transition-colors"
                                >
                                    <span className="flex items-center gap-2 font-body">
                                        {visibilityOptions[selectedVisibility].icon}
                                        <span className="font-bold text-ocean-slate-light text-xs">{visibilityOptions[selectedVisibility].label}</span>
                                    </span>
                                    <FiChevronDown size={14} className="text-workable-text-muted" />
                                </Button>

                                {/* ড্রপডাউন পপওভার লিস্ট */}
                                <Dropdown.Popover className="w-[320px] bg-workable-bg border border-workable-slate/80 shadow-2xl rounded-2xl p-1.5">
                                    <Dropdown.Menu
                                        onAction={(key) => setSelectedVisibility(key)}
                                        className="space-y-1"
                                    >
                                        {/* Option 1: Public */}
                                        <Dropdown.Item id="public" textValue="Public" className="p-2.5 rounded-xl hover:bg-workable-slate/30 cursor-pointer transition-colors block text-left">
                                            <div className="flex items-center gap-2">
                                                <FiGlobe className="text-workable-dark-green shrink-0" size={14} />
                                                <Label className="font-bold text-ocean-slate-light text-xs font-body cursor-pointer">Fully Public</Label>
                                            </div>
                                            <p className="text-[11px] text-workable-text-muted mt-1 pl-5 font-body leading-normal">
                                                {visibilityOptions.public.desc}
                                            </p>
                                        </Dropdown.Item>

                                        {/* Option 2: Limited (Recommended) */}
                                        <Dropdown.Item id="limited" textValue="Limited" className="p-2.5 rounded-xl hover:bg-workable-slate/30 border-t border-workable-slate/20 cursor-pointer transition-colors block text-left pt-2.5">
                                            <div className="flex items-center gap-2">
                                                <FiShield className="text-workable-dark-green shrink-0" size={14} />
                                                <Label className="font-bold text-ocean-slate-light text-xs font-body cursor-pointer">Limited (Recommended)</Label>
                                            </div>
                                            <p className="text-[11px] text-workable-text-muted mt-1 pl-5 font-body leading-normal">
                                                {visibilityOptions.limited.desc}
                                            </p>
                                        </Dropdown.Item>

                                        {/* Option 3: Private */}
                                        <Dropdown.Item id="private" textValue="Private" className="p-2.5 rounded-xl hover:bg-workable-slate/30 border-t border-workable-slate/20 cursor-pointer transition-colors block text-left pt-2.5">
                                            <div className="flex items-center gap-2">
                                                <FiLock className="text-workable-text-muted shrink-0" size={14} />
                                                <Label className="font-bold text-ocean-slate-light text-xs font-body cursor-pointer">Private Mode</Label>
                                            </div>
                                            <p className="text-[11px] text-workable-text-muted mt-1 pl-5 font-body leading-normal">
                                                {visibilityOptions.private.desc}
                                            </p>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        </Modal.Body>

                        <Modal.Footer className="mt-5 pt-3 border-t border-workable-slate/40">
                            {/* Glowing Teal (`bg-workable-dark-green`) অ্যাকশন বাটন */}
                            <Button onPress={() => handleSave()}
                                className="w-full bg-workable-dark-green hover:bg-workable-dark-green/80 text-workable-bg text-xs font-black font-body rounded-xl py-2.5 transition-colors shadow-lg shadow-workable-dark-green/10 cursor-pointer"
                                slot="close"
                            >
                                Save & Close
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
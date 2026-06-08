"use client";
import { useState } from "react";
import { Modal, Button, Dropdown, Label } from "@heroui/react";
import { FiBriefcase, FiChevronDown } from "react-icons/fi";
import { updateProfileInfo } from "@/lib/action";
import { toast } from "react-toastify";

export default function ProfileAvailabilityModal({ user, availability }) {
    const [selectedAvailability, setSelectedAvailability] = useState(availability || "Yes");

    async function handleSave() {
        const result = await updateProfileInfo({ updatedData: { availability : selectedAvailability }, email: user?.email });
        if (result?.success) {
            toast.success("Availability status updated!");
        } else {
            toast.error("Failed to update status.");
        }
    }

    return (
        <Modal>
            <div className="flex items-center gap-2 border border-gray-200 bg-gray-50/50 px-3 py-1.5 rounded-xl text-xs font-medium text-gray-600 cursor-pointer hover:bg-gray-100/70 active:scale-98 transition-all w-fit">
                <FiBriefcase className="text-gray-400" size={14} />
                <span>Immediately Available</span>
                <Button variant="secondary" className={`px-2 py-0.5 rounded-lg font-bold text-[10px] border ${selectedAvailability === "Yes"
                    ? "bg-green-50 text-green-600 border-green-200"
                    : "bg-gray-100 text-gray-500 border-gray-300"
                    }`}>
                    {selectedAvailability}
                </Button>
            </div>

            {/* 🔒 ২. মডাল পপআপ */}
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[340px] border border-workable-slate/50 rounded-2xl bg-workable-bg p-4">
                        <Modal.CloseTrigger className="text-workable-text-muted hover:text-ocean-slate-light" />

                        <Modal.Header className="pb-3 border-b border-workable-slate/40">
                            <Modal.Heading className="text-sm font-bold text-ocean-slate-light font-heading">
                                Change Availability
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="overflow-visible pt-4 space-y-3">
                            <Label className="text-xs text-workable-text-muted">Are you available to join immediately?</Label>

                            {/* জাস্ট Yes অথবা No ড্রপডাউন */}
                            <Dropdown>
                                <Button
                                    variant="secondary"
                                    className="w-full justify-between flex items-center border border-workable-slate/60 bg-workable-bg rounded-xl px-3 py-2 text-ocean-slate-light text-xs"
                                >
                                    <span>{selectedAvailability}</span>
                                    <FiChevronDown size={14} className="text-workable-text-muted" />
                                </Button>

                                <Dropdown.Popover className="w-[306px] bg-workable-bg border border-workable-slate/80 rounded-xl p-1">
                                    <Dropdown.Menu
                                        onAction={(key) => setSelectedAvailability(key)}
                                        className="space-y-0.5"
                                    >
                                        <Dropdown.Item id="Yes" textValue="Yes" className="p-2 rounded-lg hover:bg-workable-slate/30 cursor-pointer text-xs block text-left font-medium text-ocean-slate-light">
                                            Yes
                                        </Dropdown.Item>
                                        <Dropdown.Item id="No" textValue="No" className="p-2 rounded-lg hover:bg-workable-slate/30 cursor-pointer text-xs block text-left font-medium text-ocean-slate-light">
                                            No
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        </Modal.Body>

                        <Modal.Footer className="mt-4 pt-3 border-t border-workable-slate/40">
                            <Button
                                onPress={() => handleSave()}
                                className="w-full bg-workable-dark-green text-workable-bg text-xs font-bold rounded-xl py-2 cursor-pointer"
                            >
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
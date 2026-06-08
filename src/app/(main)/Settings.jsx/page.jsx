"use client";
import React, { useState } from "react";
import { Card, Tabs, Switch, Button, Input } from "@heroui/react";
import { FiLock, FiBell, FiShieldAlert, FiSave, FiTrash2, FiCpu } from "react-icons/fi";

export default function SettingsPage() {
    const [isEmailNotify, setIsEmailNotify] = useState(true);
    const [isPushNotify, setIsPushNotify] = useState(false);

    return (
        <div className="w-full max-w-[1200px] mx-auto p-4 md:p-6 space-y-6">
            {/* 🚧 Under Construction Tag */}
            <div className="w-full bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-2 text-amber-800 text-xs md:text-sm font-medium mb-4">
                <span><FiCpu /></span>
                <span>This page is currently <strong>under construction</strong>. Features will be fully functional soon!</span>
            </div>

            {/* 📋 Page Header */}
            <div className="flex flex-col gap-1 border-b border-gray-100 pb-4">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-xs md:text-sm text-gray-500">
                    Manage your security preferences, notifications, and account controls.
                </p>
            </div>

            {/* 🔄 HeroUI Compound Tabs Layout */}
            <Tabs>
                <Tabs.ListContainer className="border-b border-gray-200">
                    <Tabs.List aria-label="Settings Options" className="gap-6">

                        {/* Security Tab Trigger */}
                        <Tabs.Tab className="flex items-center gap-2 py-3 font-semibold text-sm cursor-pointer">
                            <FiLock size={16} />
                            <span>Security</span>
                            <Tabs.Indicator className="bg-blue-600 h-[2px] bottom-0 left-0 right-0" />
                        </Tabs.Tab>

                        {/* Notifications Tab Trigger */}
                        <Tabs.Tab className="flex items-center gap-2 py-3 font-semibold text-sm cursor-pointer">
                            <FiBell size={16} />
                            <span>Notifications</span>
                            <Tabs.Indicator className="bg-blue-600 h-[2px] bottom-0 left-0 right-0" />
                        </Tabs.Tab>

                        {/* Account Control Tab Trigger */}
                        <Tabs.Tab className="flex items-center gap-2 py-3 font-semibold text-sm cursor-pointer">
                            <FiShieldAlert size={16} />
                            <span>Account Control</span>
                            <Tabs.Indicator className="bg-blue-600 h-[2px] bottom-0 left-0 right-0" />
                        </Tabs.Tab>

                    </Tabs.List>
                </Tabs.ListContainer>

                {/* 🔐 PANEL 1: Security */}
                <Tabs.Panel className="mt-4">
                    <Card className="shadow-sm border border-gray-100 rounded-2xl">
                        <Card.Header className="p-6 pb-0 flex flex-col items-start">
                            <Card.Title className="text-base font-bold text-gray-900">Change Password</Card.Title>
                            <Card.Description className="text-xs text-gray-500">
                                Ensure your account is using a secure password.
                            </Card.Description>
                        </Card.Header>
                        <Card.Content className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px]">
                                <Input type="password" label="Current Password" placeholder="Enter current password" variant="bordered" radius="xl" />
                                <div className="hidden md:block"></div>
                                <Input type="password" label="New Password" placeholder="Enter new password" variant="bordered" radius="xl" />
                                <Input type="password" label="Confirm New Password" placeholder="Confirm new password" variant="bordered" radius="xl" />
                            </div>
                        </Card.Content>
                        <Card.Footer className="p-6 pt-0">
                            <Button color="primary" radius="xl" className="font-semibold px-6 bg-blue-600" startContent={<FiSave size={16} />}>
                                Update Password
                            </Button>
                        </Card.Footer>
                    </Card>
                </Tabs.Panel>

                {/* 🔔 PANEL 2: Notifications */}
                <Tabs.Panel className="mt-4">
                    <Card className="shadow-sm border border-gray-100 rounded-2xl">
                        <Card.Header className="p-6 pb-0 flex flex-col items-start">
                            <Card.Title className="text-base font-bold text-gray-900">Notification Preferences</Card.Title>
                            <Card.Description className="text-xs text-gray-500">
                                Choose how you want to receive updates and alerts.
                            </Card.Description>
                        </Card.Header>
                        <Card.Content className="p-6 space-y-4 max-w-[500px]">
                            <div className="flex items-center justify-between p-3 border border-gray-50 rounded-xl hover:bg-gray-50/50 transition-all">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-semibold text-gray-800">Email Alerts</span>
                                    <span className="text-xs text-gray-400">Receive job updates via email.</span>
                                </div>
                                <Switch isSelected={isEmailNotify} onValueChange={setIsEmailNotify} color="primary" />
                            </div>
                            <div className="flex items-center justify-between p-3 border border-gray-50 rounded-xl hover:bg-gray-50/50 transition-all">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-semibold text-gray-800">Push Notifications</span>
                                    <span className="text-xs text-gray-400">Get real-time browser alerts.</span>
                                </div>
                                <Switch isSelected={isPushNotify} onValueChange={setIsPushNotify} color="primary" />
                            </div>
                        </Card.Content>
                    </Card>
                </Tabs.Panel>

                {/* 💼 PANEL 3: Account Control */}
                <Tabs.Panel className="mt-4">
                    <Card className="shadow-sm border border-red-100 bg-red-50/10 rounded-2xl">
                        <Card.Header className="p-6 pb-0 flex flex-col items-start">
                            <Card.Title className="text-base font-bold text-red-600">Danger Zone</Card.Title>
                            <Card.Description className="text-xs text-gray-500">
                                Permanently delete your account and data.
                            </Card.Description>
                        </Card.Header>
                        <Card.Content className="p-6">
                            <div className="p-4 border border-red-200/40 bg-red-50/30 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-[700px]">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-bold text-gray-800">Delete This Account</span>
                                    <span className="text-xs text-gray-500">Once deleted, your profile history cannot be recovered.</span>
                                </div>
                                <Button color="danger" variant="flat" radius="xl" className="font-bold text-red-600 border border-red-200" startContent={<FiTrash2 size={16} />}>
                                    Delete Account
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Tabs.Panel>
            </Tabs>

        </div>
    );
}
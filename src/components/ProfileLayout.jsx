'use client';
import ProfileHeader from '@/components/ProfileHeader';
import Subscription from '@/components/Subscription';
import ProfileProgressWidget from '@/components/ProfileProgressWidget';
import PromotionalSection from '@/components/PromotionalSection';
import ProfileHeader2 from "@/components/profileHeader2";
import { useState } from 'react';
import PersonalInfo from '@/components/PersonalInfo';
import EducationInfo from '@/components/EducationInfo';
import EmploymentInfo from '@/components/EmploymentInfo';
import SkillsAndLinksInfo from '@/components/SkillsAndLinksInfo';
import MyPoints from '@/components/MyPoints';
import SMS from '@/components/SMS';
import { authClient } from "@/lib/auth-client";
import { Link } from '@heroui/react';
import { useRouter } from "next/navigation";

export default function ProfileLayout({ user, savedCount, userInfo, visibility, availability }) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [globalPercentage, setGlobalPercentage] = useState(0);

  const userFullName = userInfo?.firstName
    ? `${userInfo.firstName} ${userInfo.lastName || ""}`.trim()
    : "User";

  const logout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased p-4 md:p-6">
      <div className="max-w-[1600px] mx-auto flex gap-6">

        {/* LEFT SIDEBAR */}
        <div className="w-64 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm shrink-0 hidden md:block">
          <div className="flex flex-col items-center text-center pb-6 border-b border-gray-100 mb-4">
            <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full p-1 mb-2">
              <div className="w-full h-full bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">{globalPercentage}%</div>
            </div>

            {/* 🎯 এখানে ডাইনামিক ফুল নেম শো করবে */}
            <h3 className="font-bold text-gray-950 text-sm tracking-tight">{userFullName}</h3>
            <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1 font-medium">Get JobVista Pro</span>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setIsEditing(false)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${!isEditing ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              📊 Dashboard
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isEditing ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              👤 Manage Profile
            </button>
            <div className="text-gray-400 text-[11px] font-bold px-4 pt-4 pb-1 uppercase tracking-wider">System</div>
            <Link href="/settings" className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50">⚙️ Settings</Link>
            <button onClick={() => logout()} className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50">🚪 Sign Out</button>
          </nav>
        </div>

        {/* RIGHT DYNAMIC CONTENT AREA */}
        <div className="flex-1">

          {/* COMBO 1 VIEW (DASHBOARD) */}
          {!isEditing && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              <div className="lg:col-span-2 space-y-6">
                <ProfileHeader userFullName={userFullName} userInfo={userInfo} />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Subscription userInfo={userInfo} savedCount={savedCount} />
                  <MyPoints />
                  <SMS />
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm min-h-[300px] flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-sm text-gray-900">Explore Your JobVista Stat</h3>
                    <button onClick={() => setIsEditing(true)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-xs font-semibold rounded-lg transition-colors text-pink-600">⚡ Edit Profile</button>
                  </div>
                  <div className="flex-1 flex items-center justify-center border border-dashed border-gray-200 rounded-xl mt-4 bg-gray-50/50">
                    <p className="text-xs text-gray-400">📊 Chart Mockup (Click Edit Profile to check Combo 2)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm h-32 flex items-center justify-center text-xs text-gray-400">Profile View Analytics</div>
                  
                </div>
              </div>

              <div className="space-y-6">
                <ProfileProgressWidget setIsEditing={setIsEditing} userInfo={userInfo} setGlobalPercentage={setGlobalPercentage} />
                <PromotionalSection />
              </div>

            </div>
          )}

          {/* COMBO 2 VIEW (EDIT MODE) */}
          {isEditing && (
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 space-y-6">

                <ProfileHeader2 user={user} setIsEditing={setIsEditing} visibility={visibility} availability={availability} globalPercentage={globalPercentage} />

                {/* TAB CONTROLS */}
                <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px">
                  {[
                    { id: 'personal', label: '👤 Personal Information' },
                    { id: 'education', label: '🎓 Education/Training' },
                    { id: 'employment', label: '💼 Employment' },
                    { id: 'skills', label: '🛠️ Other Information' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2.5 font-semibold text-xs rounded-t-xl transition-all border-b-2 -mb-px ${activeTab === tab.id ? 'border-pink-600 text-pink-600 bg-pink-50/50' : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* DYNAMIC TAB CONTENT AREA */}
                <div className="border border-blue-200 rounded-xl p-6 bg-white space-y-6">

                  {activeTab === 'personal' && (
                    <PersonalInfo user={user} userInfo={userInfo} />
                  )}

                  {activeTab === 'education' && (
                    <EducationInfo user={user} userInfo={userInfo} />
                  )}

                  {activeTab === 'employment' && (
                    <EmploymentInfo user={user} userInfo={userInfo} />
                  )}

                  {activeTab === 'skills' && (
                    <SkillsAndLinksInfo user={user} userInfo={userInfo} />
                  )}

                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
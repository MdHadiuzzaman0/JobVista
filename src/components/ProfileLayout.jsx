'use client'; // 👈 এটি ক্লায়েন্টেই থাকবে স্টেটের জন্য

import ProfileHeader from '@/components/ProfileHeader';
import Subscription from '@/components/Subscription';
import ProfileProgressWidget from '@/components/ProfileProgressWidget';
import PromotionalSection from '@/components/PromotionalSection';
import ProfileHeader2 from "@/components/profileHeader2";
import { useState } from 'react';

// সার্ভার থেকে আসা user ডেটা প্রপ্স হিসেবে রিসিভ করছি
export default function ProfileLayout({ user, savedCount }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased p-4 md:p-6">
      <div className="max-w-[1600px] mx-auto flex gap-6">
        
        {/* LEFT SIDEBAR */}
        <div className="w-64 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm shrink-0 hidden md:block">
          <div className="flex flex-col items-center text-center pb-6 border-b border-gray-100 mb-4">
            <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full p-1 mb-2">
              <div className="w-full h-full bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">75%</div>
            </div>
            {/* 🎯 সার্ভার থেকে আসা ডাইনামিক নাম ব্যবহার করতে পারিস */}
            <h3 className="font-bold text-gray-950 text-sm">{user?.name || "Md. Hadiuzzaman"}</h3>
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
            <button className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50">⚙️ Settings</button>
            <button className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50">🚪 Sign Out</button>
          </nav>
        </div>

        {/* RIGHT DYNAMIC CONTENT AREA */}
        <div className="flex-1">
          
          {/* COMBO 1 VIEW */}
          {!isEditing && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 space-y-6">
                <ProfileHeader />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* 🎯 সাবস্ক্রিপশন উইজেটে ইউজার ডেটা পাস করা হলো */}
                  <Subscription user={user} savedCount={savedCount}/>

                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <span className="text-xs text-gray-400 font-medium block">My Points</span>
                    <span className="text-sm font-bold text-purple-600 mt-1 block">82 Points</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <span className="text-xs text-gray-400 font-medium block">SMS Job Alert</span>
                    <span className="text-sm font-bold text-blue-600 mt-1 block">Active</span>
                  </div>
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
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm h-32 flex items-center justify-center text-xs text-gray-400">Total Invitations (0)</div>
                </div>
              </div>

              <div className="space-y-6">
                <ProfileProgressWidget setIsEditing={setIsEditing}/>
                <PromotionalSection />
              </div>

            </div>
          )}

          {/* COMBO 2 VIEW (EDIT MODE) */}
          {isEditing && (
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 space-y-6">
                
                <ProfileHeader2 />

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

                <div className="border border-blue-200 rounded-xl p-6 bg-white space-y-6">
                  
                  {activeTab === 'personal' && (
                    <div className="space-y-4">
                      <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/30">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                          <h4 className="font-bold text-sm text-gray-900">Personal Details</h4>
                          <button className="text-xs font-bold text-pink-600 hover:underline">📝 Edit Section</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div><span className="text-gray-400 block">First Name</span> <span className="font-medium text-gray-800">{user?.name || "Md. Hadiuzzaman"}</span></div>
                          <div><span className="text-gray-400 block">Primary Mobile</span> <span className="font-medium text-gray-800">01794093742</span></div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
                          <button className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">Cancel</button>
                          <button className="px-3 py-1.5 bg-pink-600 text-white text-xs font-semibold rounded-lg shadow-sm">Save Details</button>
                        </div>
                      </div>

                      <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/30">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                          <h4 className="font-bold text-sm text-gray-900">Address Details</h4>
                          <button className="text-xs font-bold text-pink-600 hover:underline">📝 Edit Section</button>
                        </div>
                        <p className="text-xs text-gray-400 italic">No address details added yet.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'education' && (
                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/30">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                        <h4 className="font-bold text-sm text-gray-900">Academic Degrees</h4>
                        <button className="text-xs font-bold text-pink-600 hover:underline">➕ Add Education</button>
                      </div>
                      <div className="text-xs space-y-2">
                        <p className="font-semibold text-gray-800">B.Sc. in Textile Engineering</p>
                        <p className="text-gray-500">Khulna University of Engineering & Technology (KUET) | CGPA: 3.53</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'employment' && (
                    <div className="text-center py-8 text-xs text-gray-400">
                      💼 Employment / Industrial Attachment History Section.
                    </div>
                  )}

                  {activeTab === 'skills' && (
                    <div className="text-center py-8 text-xs text-gray-400">
                      🛠️ Skills, Portfolio Links and Languages Section.
                    </div>
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
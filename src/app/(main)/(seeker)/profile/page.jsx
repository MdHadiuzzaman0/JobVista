"use client";
// import ProfileHeader from "@/components/ProfileHeader";
import Subscription from "@/components/Subscription";

export default function ProfileDashboardPage({ user, profileData }) {
  return (
    <div className="min-h-screen bg-gray-50/50 text-workable-text-dark font-sans antialiased p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        
        {/* 0. Top Common Component: Reusing your premium profile header */}
        {/* <ProfileHeader user={user} profileData={profileData} /> */}

        {/* Outer Layout Grid: Sidebar vs Content panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
          
          {/* =========================================================================
              LEFT COLUMN: SIDEBAR NAVIGATION (Width: 3/12 cols on desktop)
             ========================================================================= */}
          <aside className="lg:col-span-3 bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-6">
            <div className="border-b border-gray-100 pb-4 text-center lg:text-left">
              <span className="text-xs uppercase font-heading font-black tracking-wider text-workable-text-muted">Navigation Menu</span>
            </div>
            
            <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 p-4">
              <span className="text-xs font-semibold font-heading uppercase tracking-widest text-gray-400">
                [Sidebar Links Placeholder]
              </span>
            </div>
          </aside>

          {/* =========================================================================
              CENTER COLUMN: MAIN STATS & CHARTS AREA (Width: 6/12 cols on desktop)
             ========================================================================= */}
          <main className="lg:col-span-6 space-y-6">
            
            {/* Row 1: Top Core Info Grid (Current Plan, My Points, Job Alert Toggles) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
               <Subscription />
              
              <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] min-h-[140px] flex flex-col justify-between border-t-4 border-t-blue-500">
                <span className="text-[10px] uppercase font-heading font-black tracking-wider text-workable-text-muted">My Points Tracker</span>
                <p className="text-xs text-gray-400 mt-2 font-medium">[Points count & earnings link placeholder]</p>
              </div>

              <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] min-h-[140px] flex flex-col justify-between border-t-4 border-t-amber-500">
                <span className="text-[10px] uppercase font-heading font-black tracking-wider text-workable-text-muted">SMS Job Alert Panel</span>
                <p className="text-xs text-gray-400 mt-2 font-medium">[SMS activation trigger placeholder]</p>
              </div>
            </div>

            {/* Row 2: General Stat Tabs & Metric Blocks */}
            <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] min-h-[120px]">
              <div className="border-b border-gray-100 pb-3 mb-3">
                <span className="text-[10px] uppercase font-heading font-black tracking-wider text-workable-text-muted">Quick Counters (Saved Filters / Jobs / Employers)</span>
              </div>
              <div className="w-full h-12 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50 flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">[Metric Tags Block]</span>
              </div>
            </div>

            {/* Row 3: Main Analytical Data Visualizer (Explore Stat Graph Container) */}
            <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <span className="text-[11px] uppercase font-heading font-black tracking-wider text-workable-text-dark">Explore Application Activity Stats</span>
                <div className="h-6 w-20 bg-gray-100 rounded-lg animate-pulse" /> {/* Mocking dropdown filters */}
              </div>
              <div className="min-h-[280px] w-full border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 flex flex-col items-center justify-center p-4">
                <span className="text-xs font-semibold font-heading uppercase tracking-widest text-gray-400">[Analytical Charts & Graphs Canvas Placeholder]</span>
                <p className="text-[10px] text-gray-400 mt-1">Integrate chart configs matching date range arrays here.</p>
              </div>
            </div>

            {/* Row 4: Secondary Performance Overview Grids (Views vs Invitations) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] min-h-[180px]">
                <span className="text-[10px] uppercase font-heading font-black tracking-wider text-workable-text-muted">Profile Views Split Chart</span>
                <div className="mt-4 h-24 border border-dashed border-gray-200 rounded-xl bg-gray-50/30 flex items-center justify-center text-[10px] text-gray-400 uppercase font-bold">[Pie Chart Placeholder]</div>
              </div>
              <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] min-h-[180px]">
                <span className="text-[10px] uppercase font-heading font-black tracking-wider text-workable-text-muted">Total Invitations Breakdown</span>
                <div className="mt-4 h-24 border border-dashed border-gray-200 rounded-xl bg-gray-50/30 flex items-center justify-center text-[10px] text-gray-400 uppercase font-bold">[Invitations Counter Placeholder]</div>
              </div>
            </div>

          </main>

          {/* =========================================================================
              RIGHT COLUMN: PROFILE PROGRESS & PROMOTIONS (Width: 3/12 cols on desktop)
             ========================================================================= */}
          <aside className="lg:col-span-3 space-y-6">
            
            {/* Block 1: Profile Completeness Checklist Container */}
            <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col">
              <div className="border-b border-gray-100 pb-3 mb-4">
                <span className="text-[11px] uppercase font-heading font-black tracking-wider text-workable-text-dark">Your Profile Progress</span>
              </div>
              <div className="min-h-[350px] w-full border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-xs font-semibold font-heading uppercase tracking-widest text-gray-400">[Completeness Progress Gauge & Checklists]</span>
                <p className="text-[10px] text-gray-400 mt-2 max-w-[200px]">Radial progress circle indicating data completion logs goes here.</p>
              </div>
            </div>

            {/* Block 2: Promotional Premium Banner Widget */}
            <div className="bg-gradient-to-br from-emerald-600 to-workable-dark-green rounded-2xl p-5 text-white shadow-md relative overflow-hidden min-h-[160px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-8 -translate-y-8" />
              <span className="text-[10px] uppercase font-heading font-black tracking-wider text-emerald-100">PROMO AD CONTAINER</span>
              <p className="text-xs font-medium text-emerald-50/80 mt-4">[Premium ecosystem upgrade CTA layout placeholder]</p>
            </div>

            {/* Block 3: App Download Appended Section (QR Codes Wrapper) */}
            <div className="bg-white border border-workable-text-muted/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] min-h-[130px]">
              <span className="text-[10px] uppercase font-heading font-black tracking-wider text-workable-text-muted">App Mobile Linkage Block</span>
              <div className="mt-3 h-16 border border-dashed border-gray-200 rounded-xl bg-gray-50/50 flex items-center justify-center text-[10px] text-gray-400 uppercase font-bold">[QR Codes Grid Placeholder]</div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
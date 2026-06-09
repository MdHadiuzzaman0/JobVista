"use client"; // ক্লায়েন্ট কম্পোনেন্ট

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// 🚀 ডাটা ফেচিং ও প্রিপারেশন ফাংশন (এখানে ইমেইল প্যারামিটার হিসেবে আসবে)
async function fetchAndPrepareData(email) {
    if (!email) return [];

    try {
        // তোমার লোকালহোস্ট এক্সপ্রেস সার্ভার থেকে ওই ইমেইলের ডাটা আনা হচ্ছে
        const res = await fetch(`http://localhost:8000/applied_jobs/${email}`, { cache: "no-store" });
        if (!res.ok) return [];
        
        const appliedCollection = await res.json();
        console.log(appliedCollection)
        if (!appliedCollection || !Array.isArray(appliedCollection)) return [];

        // লাস্ট ৭ দিনের খালি তালিকা তৈরি
        const last7DaysMap = {};
        for (let i = 6; i >= 0; i--) {
            const dateObj = new Date();
            dateObj.setDate(dateObj.getDate() - i);
            last7DaysMap[dateObj.toLocaleDateString('en-US')] = 0;
        }

        // কালেকশন থেকে লুপ ঘুরিয়ে কাউন্ট বাড়ানো
        appliedCollection.forEach((job) => {
            if (!job._id) return;
            
            // মঙ্গোডিবি আইডি স্ট্রিং থেকে টাইমস্ট্যাম্প বের করা
            const timestampHex = job._id.toString().substring(0, 8);
            const timestamp = parseInt(timestampHex, 16) * 1000;
            const jobDate = new Date(timestamp).toLocaleDateString('en-US');

            if (last7DaysMap[jobDate] !== undefined) {
                last7DaysMap[jobDate] += 1;
            }
        });

        // Recharts এর জন্য ফরম্যাট করা
        return Object.keys(last7DaysMap).map((date) => ({
            date: date,
            count: last7DaysMap[date]
        }));
    } catch (error) {
        console.error("Error preparing chart data:", error);
        return [];
    }
}

// 🎯 মেইন চার্ট কন্টেইনার কম্পোনেন্ট
export default function StatChartContainer() {
    // BetterAuth-এর বিল্ট-ইন ক্লায়েন্ট হুক দিয়ে সরাসরি সেশন এবং ইউজার বের করা
    const { data: session, isPending } = authClient.useSession();
    const userEmail = session?.user?.email;
    console.log(userEmail)

    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // যখনই সেশনের লোডিং শেষ হবে এবং ইমেইল পাওয়া যাবে, তখন ডাটা ফেচ হবে
        if (!isPending && userEmail) {
            fetchAndPrepareData(userEmail).then((data) => {
                setChartData(data);
                setLoading(false);
            });
        } else if (!isPending && !userEmail) {
            setLoading(false); // সেশন না থাকলে লোডিং ফলস করে দেবে
        }
    }, [userEmail, isPending]);

    // লোডিং বা এরর স্টেট হ্যান্ডেলিং
    if (isPending || loading) return <div className="text-xs text-gray-400 animate-pulse">Loading stats...</div>;
    if (!userEmail) return <div className="text-xs text-gray-400">Please login to see stats.</div>;
    if (chartData.length === 0) return <div className="text-xs text-gray-400">No stats available for last 7 days.</div>;

    return (
        <div className="w-full h-[180px] md:h-[200px] mt-2 select-none">
            
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -30, bottom: 0 }}>
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ec4899" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis 
                        dataKey="date" 
                        tickLine={false} 
                        axisLine={false} 
                        stroke="#94a3b8" 
                        style={{ fontSize: '10px', fontWeight: '600' }} 
                    />
                    <YAxis 
                        tickLine={false} 
                        axisLine={false} 
                        stroke="#94a3b8" 
                        allowDecimals={false} 
                        style={{ fontSize: '10px', fontWeight: '600' }} 
                    />
                    <Tooltip 
                        contentStyle={{ 
                            background: '#fff', 
                            border: '1px solid #f1f5f9', 
                            borderRadius: '12px',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                            fontSize: '11px',
                            fontWeight: '700'
                        }} 
                    />
                    <Area
                        type="monotone"
                        dataKey="count"
                        stroke="#ec4899"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#chartGradient)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
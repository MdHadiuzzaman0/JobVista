// 🎯 ওপরে কোনো 'use client' নেই, এটি এখন পিওর Server Component
import { auth } from "@/lib/auth"; // 👈 BetterAuth এর বা তোর অথেনটিকেশনের সার্ভার ফাংশন (যেমন: auth(), headers() ইত্যাদি)
import { headers } from "next/headers";
import ProfileLayout from "@/components/ProfileLayout"; // ওপরে বানানো ক্লায়েন্ট লেআউটটি ইমপোর্ট কর
import { getSavedJobs, getUserInfo } from "@/lib/data";

export default async function ProfileDashboard() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;
  const savedCount = await getSavedJobs(user?.email)
  const userInfo = await getUserInfo(user?.email)
  
  return (
    <ProfileLayout user={user} savedCount={savedCount} userInfo={userInfo}/>
  );
}
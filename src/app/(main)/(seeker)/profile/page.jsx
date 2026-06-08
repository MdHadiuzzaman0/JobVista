import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import ProfileLayout from "@/components/ProfileLayout"; 
import { getSavedJobs, getUserInfo } from "@/lib/data";

export default async function ProfileDashboard() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;
  const savedJobs = await getSavedJobs(user?.email);
  const savedCount = savedJobs?.length || 0;
  const userInfo = await getUserInfo(user?.email)

  const {visibility, availability} = await getUserInfo(user?.email)
  // console.log(savedCount)
  
  return (
    <ProfileLayout user={user} savedCount={savedCount} userInfo={userInfo} visibility={visibility} availability={availability}/>
  );
}
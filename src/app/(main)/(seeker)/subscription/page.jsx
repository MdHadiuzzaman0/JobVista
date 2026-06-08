import { Table, Button } from "@heroui/react";
import { FiCheck, FiX, FiZap } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getUserInfo } from "@/lib/data";
import { updateProfileInfo } from "@/lib/action";

// ⭐ ১. সার্ভার অ্যাকশন (মেইন কম্পোনেন্টের বাইরে এবং ফাইলের টপে থাকবে)
async function updatePlanAction(formData) {
  "use server";
  const email = formData.get("email");
  const planType = formData.get("planType");

  try {
    // ডাটাবেজ আপডেট ফাংশন কল
    await updateProfileInfo({ updatedData: { subscription: planType }, email });

    // 🔄 তোমার রুট অনুযায়ী সঠিক পাথ রিভ্যালিডেট করবে যেন ইনস্ট্যান্ট চেঞ্জ দেখা যায়
    revalidatePath("/subscription");
  } catch (error) {
    console.error("Failed to update plan in database:", error);
  }
}

export default async function BillingPage() {
  // BetterAuth সেশন এবং ইউজার ডাটা গেট করা
  const session = await auth.api.getSession({
    headers: await headers()
  });
  
  const email = session?.user?.email;
  const userInfo = await getUserInfo(email);
  const currentPlan = userInfo?.subscription || "Free"; // 🛡️ ফলব্যাক সেফটি সহ
  console.log(currentPlan)

  // টেবিলের ফিচার লিস্ট এবং সুবিধা
  const tableRows = [
    { name: "Saved Jobs Limit", free: "Max 3 Jobs", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Daily Applications", free: "5 Applications", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Priority Support", free: false, pro: "Email Support", enterprise: "24/7 Dedicated" },
    { name: "Advanced Analytics", free: false, pro: true, enterprise: "Power Analytics" },
    { name: "Resume Builder Access", free: "Basic Themes", pro: "All Premium Themes", enterprise: "Custom Branded" },
    { name: "Direct Recruiter Chat", free: false, pro: true, enterprise: true },
  ];

  // ৩টি অপশনের কমন বাটন কনফিগ
  const planOptions = [
    { id: "Free", name: "Free Tier", price: "$0", color: "emerald", icon: <FiZap size={12} /> },
    { id: "Pro", name: "Pro Member", price: "$19", color: "blue", icon: <FiZap size={12} /> },
    { id: "Enterprise", name: "Enterprise", price: "$49", color: "slate", icon: <FaCrown size={12} /> },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 md:p-6 space-y-8">

      {/* 🔝 পেজের একদম টপে কারেন্ট প্ল্যান ইন্ডিকেটর */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-500 block">Current Subscription</span>
          <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
            You are currently using: <span className="text-blue-600 underline decoration-2">{currentPlan} Plan</span>
          </h2>
        </div>
        <div className="text-xs font-semibold text-gray-500 bg-white/80 border border-gray-200/60 px-4 py-2 rounded-xl backdrop-blur-sm self-start sm:self-auto">
          Logged in as: <span className="text-gray-700 font-bold">{email}</span>
        </div>
      </div>

      {/* 📊 HeroUI Compound Table */}
      <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Subscription table comparison" className="min-w-[800px]">

              {/* টেবিল হেডার */}
              <Table.Header>
                <Table.Column isRowHeader className="text-gray-900 font-bold text-sm bg-gray-50/70 h-14">Features</Table.Column>
                <Table.Column className="text-emerald-600 font-bold text-sm bg-gray-50/70 h-14">Free Tier</Table.Column>
                <Table.Column className="text-blue-600 font-bold text-sm bg-gray-50/70 h-14">Pro Member</Table.Column>
                <Table.Column className="text-slate-800 font-bold text-sm bg-gray-50/70 h-14">Enterprise</Table.Column>
              </Table.Header>

              {/* টেবিল বডি (ফিচার রেন্ডারিং ও ক্রস লজিক) */}
              <Table.Body>
                {tableRows.map((row, idx) => (
                  <Table.Row key={idx} className="border-b border-gray-50 hover:bg-gray-50/40 transition-colors">
                    
                    {/* কলাম ১: টপিক */}
                    <Table.Cell className="font-semibold text-gray-700 text-xs py-4">{row.name}</Table.Cell>

                    {/* কলাম ২: ফ্রি অপশন চেক/ক্রস */}
                    <Table.Cell className="text-xs font-medium text-gray-500">
                      {typeof row.free === "boolean" ? (
                        row.free ? <FiCheck className="text-emerald-500" size={18} /> : <FiX className="text-gray-500" size={16} />
                      ) : (
                        row.free
                      )}
                    </Table.Cell>

                    {/* কলাম ৩: প্রো অপশন চেক/ক্রস */}
                    <Table.Cell className="text-xs font-semibold text-blue-600">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? <FiCheck className="text-blue-500" size={18} /> : <FiX className="text-gray-500" size={16} />
                      ) : (
                        row.pro
                      )}
                    </Table.Cell>

                    {/* কলাম ৪: এন্টারপ্রাইজ অপশন চেক/ক্রস */}
                    <Table.Cell className="text-xs font-semibold text-slate-800">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? <FiCheck className="text-slate-800" size={18} /> : <FiX className="text-gray-500" size={16} />
                      ) : (
                        row.enterprise
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))}

                {/* 🎯 প্রতিটি অপশনের নিচে প্রাইস এবং এপ্লাই বাটন */}
                <Table.Row className="bg-gray-50/30">
                  <Table.Cell className="font-bold text-gray-500 text-xs py-5">Price & Actions</Table.Cell>

                  {planOptions.map((plan) => {
                    const isCurrent = currentPlan === plan.id;

                    return (
                      <Table.Cell key={plan.id}>
                        <div className="flex flex-col gap-2 min-w-[160px]">
                          <span className="text-xs font-black text-gray-900">{plan.price} / month</span>

                          {/* সার্ভার অ্যাকশন ফর্ম */}
                          <form action={updatePlanAction}>
                            <input type="hidden" name="email" value={email || ""} />
                            <input type="hidden" name="planType" value={plan.id} />

                            <Button
                              type="submit"
                              isDisabled={isCurrent}
                              radius="xl"
                              size="sm"
                              className={`w-full font-bold text-[11px] h-9 text-white shadow-sm transition-all ${
                                plan.id === "Free" ? "bg-emerald-600" : plan.id === "Pro" ? "bg-blue-600" : "bg-slate-900"
                              } ${isCurrent && "bg-gray-200 text-black shadow-none cursor-not-allowed"}`}
                              endContent={!isCurrent && plan.icon}
                            >
                              {isCurrent ? "Active Now" : `Apply ${plan.id}`}
                            </Button>
                          </form>
                        </div>
                      </Table.Cell>
                    );
                  })}
                </Table.Row>

              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>

    </div>
  );
}
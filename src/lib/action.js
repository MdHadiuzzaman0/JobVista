"use server";
import { revalidatePath } from "next/cache";

//insert applied jobs
export async function handleApplyJob(appliedData) {
  try {
    const response = await fetch("http://localhost:8000/applied_jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appliedData),
    });
    if (!response.ok) throw new Error("Server error");

    const result = await response.json();
    revalidatePath(`/explore_jobs/${appliedData.jobId}`);
    revalidatePath('/explore_jobs');
    return { success: true, result }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

//insert saved jobs
export async function handleSaveJob(savedData) {
  try {
    const response = await fetch("http://localhost:8000/saved_jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savedData),
    });

    if (!response.ok) throw new Error("Server error");

    const result = await response.json();
    revalidatePath(`/explore_jobs/${savedData.jobId}`);
    revalidatePath('/explore_jobs');
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

//delete applied data
export async function handleDeleteAppliedJob(id) {
  try {
    const response = await fetch(`http://localhost:8000/removeJob/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Server error");

    const result = await response.json();
    revalidatePath('/applied_jobs')
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

//delete saved data
export async function handleDeleteSavedJob(id) {
  try {
    const response = await fetch(`http://localhost:8000/removeSavedJob/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Server error");

    const result = await response.json();
    // revalidatePath('/saved_jobs')
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }}

//update personal info of manage profile section
export async function updateProfileInfo({updatedData, email}) {
  try {
    const response = await fetch(`http://localhost:8000/profile/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error("Server error");

    const result = await response.json();
    revalidatePath('/profile')
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }}

//insert personal info of create_profile section
export async function handleFormSubmit(data) {
  try {
    const response = await fetch('http://localhost:8000/user', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Server error");

    const result = await response.json();
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }}

// //Filter 
// export async function getFilteredJobs(jobType) {
//   // 🎯 লাইন চেঞ্জ: মেইন পেজ থেকে পাঠানো "Remote" লেখাটা এখানে আসলো। 
//   // তাই এখন প্যারামিটার: jobType = "Remote"
  
//   try {
//     let url = "http://localhost:8000/jobs"; // ২. এক্সপ্রেস সার্ভারের বেস লিংক।

//     if (jobType && jobType !== "All") {
//       url += `?types=${jobType}`; 
//       // 🎯 LINE CHANGE: যেহেতু jobType এর মান "Remote", তাই কন্ডিশন সত্য হলো।
//       // মেইন ইউআরএল-এর সাথে কুয়েরি জুড়ে url ভ্যারিয়েবল হয়ে গেল: http://localhost:8000/jobs?types=Remote
//     }

//     const res = await fetch(url, { cache: "no-store" });
//     // 🎯 লাইন চেঞ্জ: এই নতুন ডাইনামিক url নিয়ে fetch মেথড এক্সপ্রেস সার্ভারে রিকোয়েস্ট পাচার করে দিল।

//     if (!res.ok) {
//       throw new Error("Failed to fetch jobs from server");
//     }

//     return await res.json(); // ৩. এক্সপ্রেস থেকে আসা ফিল্টার করা জবের জেসন ডাটা মেইন পেজে ব্যাক পাঠানো হলো।
//   } catch (error) {
//     console.error("Error in getFilteredJobs action:", error);
//     return []; 
//   }
// }

//Filter
export async function getFilteredJobs({ category, type, search }) {
  try {
    let url = "http://localhost:8000/jobs";

    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    } 
    else if (type) {
      const separator = url.includes("?") ? "&" : "?";
      url += `${separator}type=${encodeURIComponent(type)}`;
    }
    else if (search) {
      const separator = url.includes("?") ? "&" : "?";
      url += `${separator}search=${encodeURIComponent(search)}`;
    }

    const res = await fetch(url, { cache: "no-store" });
    const result = await res.json();

    // মেইন পেজে অবজেক্ট আকারে ব্যাক করলাম
    return {
        jobs: result.data || [],
        count: result.count || 0
    };
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return { jobs: [], count: 0 };
  }
}
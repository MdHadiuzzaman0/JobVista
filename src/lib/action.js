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
    revalidatePath('/saved_jobs')
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }}

//delete saved data
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
"use server";

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
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

//delete
export async function handleDeleteAppliedJob(id) {
  console.log("Deleting ID:", id); // ← এটা add করো
  try {
    const response = await fetch(`http://localhost:8000/removeJob/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Server error");

    const result = await response.json();
    console.log("Delete result:", result); // ← এটাও
    return { success: true, result };

  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function handleDeleteSavedJob(id) {
  console.log("Deleting ID:", id); // ← এটা add করো
  try {
    const response = await fetch(`http://localhost:8000/removeSavedJob/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Server error");

    const result = await response.json();
    console.log("Delete result:", result); // ← এটাও
    return { success: true, result };

  } catch (error) {
    return { success: false, error: error.message };
  }}
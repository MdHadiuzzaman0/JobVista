"use server";

//applied 
export async function handleApplyJob(appliedData) {
    try {
        const response = await fetch("http://localhost:8000/appliedData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(appliedData),
        });

        if (!response.ok) throw new Error("Server error");

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error("Action Error:", error);
        return { success: false, error: error.message };
    }
}
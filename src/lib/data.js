export const getAllJobs = async () => {
    const res = await fetch('http://localhost:8000/explore_jobs')
    return res.json()
}

export const getJobById = async (id) => {
    const res = await fetch(`http://localhost:8000/explore_jobs/${id}`)
    return res.json()
}

export async function getAppliedJobs(email) {
  try {
    const res = await fetch(`http://localhost:8000/appliedData/${email}`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

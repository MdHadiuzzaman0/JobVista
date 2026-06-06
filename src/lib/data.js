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
    const res = await fetch(`http://localhost:8000/applied_jobs/${email}`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

export async function getSavedJobs(email) {
  try {
    const res = await fetch(`http://localhost:8000/saved_jobs/${email}`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

export async function getUserInfo(email) {
  console.log(email)
  try {
    const res = await fetch(`http://localhost:8000/user/${email}`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}



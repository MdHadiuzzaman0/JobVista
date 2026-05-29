export const getAllJobs = async () => {
    const res = await fetch('http://localhost:8000/explore_jobs')
    return res.json()
}
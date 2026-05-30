export const getAllJobs = async () => {
    const res = await fetch('http://localhost:8000/explore_jobs')
    return res.json()
}
export const getJobById = async (id) => {
    const res = await fetch(`http://localhost:8000/explore_jobs/${id}`)
    return res.json()
}
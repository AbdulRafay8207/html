import { useLoaderData } from "react-router"
interface job  {
    title: string
    location: string
}

const Jobs = () => {
    const jobsdata = useLoaderData()
  return (
    <div>
        {jobsdata.map((job:job) => {
            return <div>
                <h4>{job.title}</h4>
                <p>{job.location}</p>
            </div>
        })}
    </div>
  )
}

export const jobsloader = async ()=>{
    const res = await fetch("http://localhost:5500/developers")
    return res.json()
}

export default Jobs
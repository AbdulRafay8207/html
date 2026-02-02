import { useLoaderData, type LoaderFunction } from "react-router";
const JobDetails = () => {
    const jobdetail = useLoaderData()
  return (
    <div>
        <p><b>Job Details:</b>{jobdetail.title}</p>
    </div>
  )
}
export const jobdetailsloader:LoaderFunction = async ({params})=>{
    const id = params.id
    const res = await fetch('http://localhost:5500/developers/' + id)
    return res.json()
}

export default JobDetails
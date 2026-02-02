import { Outlet } from "react-router"

const JobsLayout = () => {
  return (
    <div>
        <h2>Job Opening</h2>
        <p>List of current jobs opening in our company</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout
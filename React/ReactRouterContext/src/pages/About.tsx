import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"

const About = ()=>{
    const {siteList} = useContext(SiteContext)
    return(
        <div>
            <h1>Context Length</h1>
            <span>{siteList.length}</span>
        </div>
    )
}
export default About    
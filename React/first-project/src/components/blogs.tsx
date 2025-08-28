// import { useEffect, useState } from "react"
import useApi from "../hooks/useApi"

const Blogs = ()=>{
    const {posts} = useApi()
    // const [posts, setPosts] = useState([])

    // const getData = async ()=>{
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const data = await res.json()
    //     setPosts(data)
    // }
    // console.log('post', posts);
    
    // useEffect(()=>{
    //     getData()
        
    // },[])

    return(
        <div>
            <h1>Blogs</h1>

            
                {posts.map((post)=>(
            <div key={post}> {/*post.id */}
                <h1>{post}</h1> {/*post.title */}
                <p>{post}</p> {/*post.body */}
            </div>
                ))}
                
        </div>
    )
}
export default Blogs
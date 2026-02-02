import { useState } from "react";
import Counter from "../components/Counter";


const Home = () => {
  const [state, setState] = useState(true)

   const handleToggle = ()=>{  
        return(setState(prev => !prev))
      }

  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <h1>Home</h1>
      <button onClick={handleToggle}>Toggle</button>

      {state? <Counter/>: ""}
    </div>
  )
}

export default Home
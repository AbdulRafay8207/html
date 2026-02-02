import { useEffect, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)  

    const handleIncrement = ()=>{
        return(setCount(count+1)) 
      }

      const handleDecrement = ()=>{
        return(setCount(count-1)) 
      }

      useEffect(()=>{
    console.log("component mounted");
    return function(){
      console.log("component 2nd time mounted");
      
    }
  },[])
  

  useEffect(()=>{
    console.log("component updated", count);
    return ()=>console.log("Previous count",count);

  },[count])
     

  return (
    <div>
        <h2 style={{margin:"20px"}}>{count}</h2>
        <button onClick={handleIncrement}>INC</button>
        <button onClick={handleDecrement}>DEC</button>
    </div>
  )
}

export default Counter
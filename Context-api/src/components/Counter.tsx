import { useContext } from "react"
import { CounterContext } from "../context/Counter"


const Counter = () => {
    const context = useContext(CounterContext)
  return (
    <div>
        <button onClick={()=>{context.setCount(context.count + 1)}}>Increment</button>
        <button onClick={()=>{context.setCount(context.count - 1)}}>Decrement</button>
    </div>
  )
}

export default Counter


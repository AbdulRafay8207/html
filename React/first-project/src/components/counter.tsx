// import { useState } from "react"
import useCounter from "../hooks/useCounter"

const Counter = ()=>{
    const {counter , handleDecrement, handleIncrement} = useCounter()
// const [counter, setCounter] =  useState(0)
// const handleDecrement = ()=>{
//     setCounter((prev)=> prev - 1)
// }
// const handleIncrement = ()=>{
//     setCounter(counter + 1)
// }
    return(
        <div>
        <span>{counter}</span>
        <div>
        {/* <button onClick={()=> setCounter(counter + 1)}>test</button> //also a method */}
        <button onClick={handleDecrement} disabled={!counter}>Decrement</button>
        <button onClick={handleIncrement}>increment</button>
        </div>
        </div>
    )
}

export default Counter
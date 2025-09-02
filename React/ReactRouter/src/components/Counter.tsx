import { useReducer, useState } from "react"
import {reducer} from "../reducer/CounterReducer"

const Counter = ()=>{

    const [state,dispatch] = useReducer(reducer, {count: 0})
    
    const handleNext = ()=>{
        dispatch({type:"INCREMENT"})
    }

    const handlePrevious = ()=>{
        dispatch({type:"DECREMENT"})
    }
    return(
        <div>
            <span>{state.count}</span>
            <div>
                <button onClick={handleNext}>Previous</button>
                <button onClick={handlePrevious}>Next</button>
            </div>
        </div>
    )
}
export default Counter
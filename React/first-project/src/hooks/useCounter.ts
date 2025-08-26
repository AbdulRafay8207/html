import { useState } from "react"

const useCounter = () => {
    const [counter, setCounter] = useState(0)
    const handleDecrement = () => {
        setCounter((prev) => prev - 1)
    }
    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    return{counter, handleDecrement, handleIncrement}
}
export default useCounter
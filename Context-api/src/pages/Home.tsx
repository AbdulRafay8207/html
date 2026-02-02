import { useContext } from "react"
import Counter from "../components/Counter"
import { CounterContext } from "../context/Counter"

const Home = () => {
    const context = useContext(CounterContext)
  return (
    <div className="container">
        <h1>Home page</h1>
        <h2>Counter is {context.count}</h2>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
    </div>
  )
}

export default Home
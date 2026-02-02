import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks/index.'
import { decrement, increment } from './redux/slices/counter/counter'
import Testing from './components/testing'

function App() {
  const count = useAppSelector((state) => state.counter)
  const dispatct = useAppDispatch()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>{count}</h1>
        <button onClick={()=> dispatct(increment())}>Increment</button>
        <button onClick={()=>dispatct(decrement())}>decrement\</button>
      </div>
      <Testing/>
    </>
  )
}

export default App

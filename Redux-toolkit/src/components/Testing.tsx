import { useAppSelector } from "../redux/hooks/index."

const Testing = () => {
    const count = useAppSelector(s => s.counter)
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Testing
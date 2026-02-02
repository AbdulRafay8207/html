import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router"
import Home from "./pages/Home"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route index element={<Home/>}/>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Product from "./pages/Product"

const App = () => {
  const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <div>404 not found</div>
  },
  {
    path:'/products',
    element: <Product/>
  }
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
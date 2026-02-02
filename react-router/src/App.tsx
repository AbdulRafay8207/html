
import Home from "./pages/Home"
import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router"
import Products from "./pages/Products"
import About from "./pages/About"
import RootLayout from "./layouts/RootLayout"
import ContactInfo from "./components/ContactInfo"
import ContactForm from "./components/ContactForm"
import ContactLayout from "./layouts/ContactLayout"
import JobsLayout from "./layouts/JobsLayout"
import Jobs, { jobsloader } from "./pages/Jobs"
import JobDetails, { jobdetailsloader } from "./components/JobDetails"


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout/>}>
                {/* Main Layout */}
                <Route index element={<Home/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="about" element={<About/>}/>
                {/* Contact Layout */}
                <Route path="contact" element={<ContactLayout/>}>
                    <Route path="info" element={<ContactInfo/>}/>
                    <Route path="form" element={<ContactForm/>}/>
                </Route>
                {/* Job Layout */}
                <Route path="jobs" element={<JobsLayout/>}>
                    <Route index element={<Jobs/>} loader={jobsloader}/>
                    <Route path=':id' element={<JobDetails/>} loader={jobdetailsloader}/>
                </Route>

            </Route>
        )
    )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
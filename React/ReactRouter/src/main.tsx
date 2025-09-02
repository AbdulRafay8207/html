import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import './index.css'
import "./App.css"
import router from './router/routes.tsx';

//Declarative Mode:

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<AppLayout />}>
  //     <Route path="/" element={<Home />} />
  //     <Route path="contact" element={<Contact />} />
  //     <Route path="about" element={<About />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
//   </StrictMode>,
// )


//Data mode, routes.tsx for data
createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)

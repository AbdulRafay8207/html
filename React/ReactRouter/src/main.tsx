import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import './index.css'
import "./App.css"
import router from './router/routes.tsx';
import AppLayout from './components/AppLayout.tsx';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';

//Declarative Mode:

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)


//Data mode, routes.tsx for data
// createRoot(document.getElementById('root')!).render(

//   <StrictMode>
//     <RouterProvider router={router} />,
//   </StrictMode>,
// )

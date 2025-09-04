import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './Components/Layout'
import Home from './pages/home'
import AddNewSite from './pages/addNewSite'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new-site" element={<AddNewSite />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
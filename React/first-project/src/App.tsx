import './App.css'
// import Greeting from './components/Greeting'
// import Welcome from './components/Welcome'
import Bio from './components/Bio'
function App() {
  return(
  <> 
  <Bio name="Abdul" email="abdul@gmail.com" occupation="Programmer">
    <h3>My Hobbies are:</h3>
    <ul>
      <li>Swimming</li>
      <li>Cricket</li>
    </ul>
  </Bio>
  </>
  )
}

export default App

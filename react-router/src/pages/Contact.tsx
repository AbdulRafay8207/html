import { useNavigate } from "react-router"
const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>This is Contact Page</h1>
      <div className="contact-button">
        <button onClick={()=>navigate('info')}>Info</button>
        <button onClick={()=>navigate('form')}>Form</button>
      </div>
    </div>
  )
}

export default Contact
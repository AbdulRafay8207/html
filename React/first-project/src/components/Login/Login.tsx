import { useState, type ChangeEvent, type FormEvent } from "react"
import "../Newsletter/Newsletter.css"
import Input from "./Input"
const Login = ()=>{
    const [user,setUser] = useState({email:"", password:""})

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setUser((prevData)=>({...prevData,[name]:value}))
    }

    const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log("user", user);
        
    }

    return(
        <section className="newsletter-section">
        <h1 className="newsletter-heading">Login</h1>

        <form className="newsletter-form" onSubmit={onSubmit}>
        {/* Input for Email */}
        <Input
        label="email" 
        type="email" 
        name="email"  
        value={user.email} 
        onChange={handleInputChange}
        placeholder="Type your Email" />
        {/* Input for Password */}
        <label htmlFor="">Password</ label>
        <input type="password"
        name="password"
        value={user.password}
        onChange={handleInputChange}
        placeholder="Type your password" />
        <button 
        type="submit">Submit</button>
        </form>
        </section>
    )
}
export default Login
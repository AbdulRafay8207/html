import { useState, type ChangeEvent, type FormEvent } from "react"
import "./Newsletter.css"
const Newsletter = ()=>{
const [email,setEmail] = useState('')

const handleEmailChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
    // console.log("event",e);   
}
const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log('user email',email);
    
}
console.log("email",email);

    return(
        <section className="newsletter-section">
        <h1 className="newsletter-heading">NewsLetter</h1>
        <form className="newsletter-form" onSubmit={onSubmit}>
        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Type your Email" />
        <button type="submit">Submit</button>
        </form>
        </section>
    )
}
export default Newsletter
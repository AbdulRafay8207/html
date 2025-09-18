import { useActionState } from "react"

const handleSubmit = (prevState:FormState,formData:FormData) => {
    const name = formData.get("name")
    const password = formData.get("password")    

    console.log('form data', name,password);

    if(!name){
        return{
            error: 'name can not be empty'
        }
    }
    
}

const LoginForm = ()=>{
    const [state, formAction, ispending] = useActionState(handleSubmit,{name:"",passoword:""})
    return(
        <form action={formAction}>
            <input type="text" name="name" placeholder="Your name"/>
            <input type="password" name="password" placeholder="Your Password"/>
            <button>Submit</button>
        </form>
    )
}
export default LoginForm
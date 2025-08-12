interface GreetingProps {
    city: String
}
const Greeting = (props:GreetingProps)=>{
    // const academy = 'tech-park' For Dynamic
    console.log("prop",props);
    
    return(
        <div>
            <h1 className="message" style={{backgroundColor: 'lightblue'}}>Welcome to {props.city}</h1>
        </div>
    )
}

export default Greeting
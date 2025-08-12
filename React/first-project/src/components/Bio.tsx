interface BioProps {
    name: String
    email: String
    occupation?: String
    children: React.ReactNode
}
const Bio = (props:BioProps)=>{
    return(
        <div>
            <h1 style={{color: 'red'}}>My name is {props.name}</h1>
            <h1>My email is {props.email}</h1>
            {/* {props.occupation && <h1>My occupation is {props.occupation}</h1>} */}
            {props.occupation? <h1>My occupation is {props.occupation}</h1> : <h1>No Occupation</h1>}
            
            <div>{props.children}</div>
        </div>
    )
}

export default Bio
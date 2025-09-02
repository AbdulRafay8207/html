import { /*Link,*/ NavLink } from "react-router"

const Navbar = ()=>{
    return(
        <nav>
            <NavLink to="/" className={({isActive,isPending})=>
                isPending? "pending": isActive? "active":""
                }>Home</NavLink>

            <NavLink to="/about" className={({isActive,isPending})=>
                isPending? "pending": isActive? "active":""}
                >About</NavLink>

            <NavLink to="/contact" className={({isActive,isPending})=>
                isPending? "pending": isActive? "active":""}
                >Contact</NavLink>
        </nav>
    )
}
export default Navbar
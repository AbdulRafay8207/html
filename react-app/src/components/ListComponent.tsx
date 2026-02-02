import { useState } from "react"
interface Props{
    items: string[];
    heading: string;
    SelectedItem: (item: string) => void;
}

function ListComponent({items, heading, SelectedItem}: Props) {
    
    const [selectedIndex, setselectedIndex] = useState(-1)
    
    return(
        <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items</p>}
        <ul className="list-group">
        {items.map((item, index) => <li className={selectedIndex === index? "list-group-item active" : "list-group-item"} onClick={()=>{
            setselectedIndex(index)
            SelectedItem(item)
        }} key={item}>{item}</li>)}
        </ul>
    </>
    )
}
export default ListComponent
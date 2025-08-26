const CategoryList = ()=>{
    const list = ["apple","mango", "banana", "orange"]
    return(
        <div>
            <ul>
                {list.map((item, index)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList
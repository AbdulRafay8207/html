import type { ChangeEvent, FC } from "react"
interface InputProps{
    name: string
    label: string
    type: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}
const Input:FC<InputProps> = ({name, label, type, value, onChange, placeholder})=>{
    return(
        <div>
        <label htmlFor={name}>{label}</label>
        <input type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
        </div>
    )
}

export default Input
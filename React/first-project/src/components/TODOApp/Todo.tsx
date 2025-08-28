import { useState, type ChangeEvent, type FormEvent } from 'react'
import './Todo.css'

const Todo = () => {
    const [todos, setTodos] = useState(["Go to gym","Buy a new laptop","Finish the React App"])
    const [task, setTask] = useState('')
    const [error, setError] = useState('')

    const onChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setTask(event.target.value)
    }

    const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!task.trim()){
            setError("Please add some task")
            return
        }
        setTodos([...todos,task])
        setTask("")
        setError('')
    }
    const onDeleteTask = (text:string)=>{
        const deleteTodo = todos.filter((todo)=> todo !== text)
        setTodos(deleteTodo)
    }
  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={onSubmit}>
        <label htmlFor="task">Add a New Task</label>
        <input type="text" id="task" value={task} onChange={onChange} placeholder="What do you want to do" />
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>

      {todos.length > 0? (<ul className="todo-list">
        {todos.map((todo)=>(
            <li>{todo}
            <button onClick={()=>onDeleteTask(todo)}>Delete</button>
            <button>Edit</button>
            </li>
        ))}
      </ul>
      )     : (
        <p>Please Add some task</p>
      )}
    </div>
  )
}

export default Todo
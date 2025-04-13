import { useState } from "react"

const TodoCreate = ({createTodo}) =>{
    const [title, setTitle] = useState('')

    const handleSubmitAddTodo=(e)=>{
        e.preventDefault()
        if(!title.trim()){
            return  setTitle('')
        }
        createTodo(title)
        setTitle('')

    }

    return (
        <form onSubmit={handleSubmitAddTodo} className=" flex bg-white rounded-md overflow-hidden gap-6 items-center py-4 px-4 dark:bg-gray-800">
          <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-400"></span>
          <input
            type='text'
            placeholder=" Create a new todo.."
            className="w-full text-gray-500 outline-none dark:text-gray-100" 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
        />
        </form>
    )
}

export default TodoCreate
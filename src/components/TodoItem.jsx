import CrossIcon from "./icons/CrossIcon"
import IconCheck from "./icons/IconCheck"

const TodoItem = ({ todo, removeTodo, updateTodo}) => {
  const { title, id, completed } = todo
  return (
    <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">

      <button 
        onClick={()=>updateTodo(id)}
        className={`h-5 w-5 flex-none rounded-full border-2 border-gray-400 ${completed ? 
        "flex bg-gradient-to-r from-sky-100 to-fuchsia-300 justify-center items-center" :
        "inline-block"}`} >
        <IconCheck />
      </button>
      <p className={`grow text-gray-600 ${completed && "line-through"}`}> {title}</p>
      <button onClick={()=>removeTodo(id)} className="flex-none">
        <CrossIcon />
      </button>
    </article>
  )
}
export default TodoItem


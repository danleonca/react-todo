const TodoCompute=({computedItemsLeft, clearCompleted})=>{
    return (
        <section className="px-4 py-4 flex justify-between bg-white rounded-b-md  dark:bg-gray-800">
        <span className="text-gray-400">{computedItemsLeft} items left</span>
        <button onClick={()=>clearCompleted()} className="text-gray-400">Clear Completed</button>
      </section>
    )
}

export default TodoCompute
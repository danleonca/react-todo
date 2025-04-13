import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"
import Header from "./components/Header"
import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"
import TodoCompute from "./components/TodoCompute"
import TodoFilter from "./components/TodoFilter"
import { useEffect, useState } from "react"

// const initialState = [
//   { id: 1, title: "complete online JavaScript bluuweb curse", completed: true },
//   { id: 2, title: "go to the gym", completed: false },
//   { id: 3, title: "pick up groceries", completed: false },
//   { id: 4, title: "complete todo app on fronted mentor", completed: false },
// ]

const initialState= JSON.parse(localStorage.getItem("todos")) || []
const App = () => {

  const [todos, setTodos] = useState(initialState)

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } :
      todo
    ))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const [filter, setFilter]= useState('all')

  const filteredTodos=()=>{
    switch (filter){
      case 'all':
        return todos
      case 'active':
        return todos.filter((todo)=>!todo.completed)
      case 'completed':
        return todos.filter((todo)=> todo.completed)
    }
  }

  const chageFilter=(filter)=> setFilter(filter)

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen 
     dark:bg-gray-900
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
    dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]
    ">

      <Header></Header>

      <main className="container  mx-auto px-4 mt-8 md:max-w-xl">

        <TodoCreate createTodo={createTodo}></TodoCreate>

        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} ></TodoList>

        <TodoCompute computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}></TodoCompute>

        <TodoFilter chageFilter={chageFilter} filter={filter} ></TodoFilter>

      </main>

      <footer className="mt-8 text-center dark:text-gray-400">
        Drag and drop to reaorder
      </footer>

    </div>

  )
}

export default App
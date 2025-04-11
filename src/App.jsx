import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"
const App = () =>{
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-aunto px-4 pt-8">
        <div className="flex justify-between">
            <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
            <button>
              <MoonIcon className="fill-red-400"></MoonIcon>
            </button>
        </div>
        <form className=" flex bg-white rounded-md overflow-hidden gap-6 items-center py-4 px-4 mt-8">
            <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
            <input  
            type='text' 
            placeholder=" Create a new todo.."
            className="w-full text-gray-500 outline-none"/>
        </form>
      </header>

      <main className="container mx-aunto px-4 mt-8">
        <div className="bg-white rounded-md ">
          <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="text-gray-500 grow"> Complete online java script curse</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>

          <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="text-gray-500 grow"> Complete online java script curse</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>

          <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="text-gray-500 grow"> Complete online java script curse</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          
          <section className="px-4 py-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
        

      </main>
      <section className="container mx-aunto mt-8 px-4" >
        <div className="flex bg-white p-4 rounded-md justify-center gap-4">
          <button className="text-blue-600">all</button>
          <button className="hover:text-blue-600">active</button>
          <button className="hover:text-blue-600">complete</button>
        </div>
      </section>

      <p className="text-center">Drag and drop to reaorder</p>
    </div>
    
  )
}

export default App
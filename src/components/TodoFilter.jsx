const TodoFilter = ({chageFilter, filter}) => {
    return (
        <section className="container mx-aunto mt-8" >
        <div className="flex bg-white p-4 rounded-md justify-center gap-4">
          <button className={`${filter==='all'? 'text-blue-500 hover:text-gray-500' : 'text-gray-500 hover:text-blue-500'}`} 
                  onClick={()=>chageFilter('all')}
                  >
                    all
          </button>
          <button 
                  className={`${filter==='active'? 'text-blue-500 hover:text-gray-500' : 'text-gray-500 hover:text-blue-500'}`} 
                  onClick={()=>chageFilter('active')}
                  >
                    active
          </button>
          <button 
                  className={`${filter==='completed'? 'text-blue-500 hover:text-gray-500': 'text-gray-500 hover:text-blue-500'}`} 
                  onClick={()=>chageFilter('completed')}
                  >
                    complete
                    
          </button>
        </div>
      </section>
    )
}

export default TodoFilter
import TodoItem from "./TodoItem"

const TodoList = ({ todos, removeTodo, updateTodo}) => {

  return (
    <div className="bg-white rounded-t-md mt-8">
      {todos.map((todo )=>(
           
           <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}></TodoItem>
          ))}
    </div>
  );
};

export  default TodoList
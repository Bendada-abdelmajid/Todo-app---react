import Todo from "./Todo";
function Todos({ todos, setTodos, filtertodos }) {
  function deleteTodo(e) {
    setTodos(todos.filter((el) => el.id !== parseFloat(e.target.dataset.id)));
 
  }
  function completTodo(e) {
  
    setTodos(
      todos.map((el) => {
        if (el.id === parseFloat(e.target.dataset.id)) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
   
  }
  return (
    <ul className="todoList">
      {filtertodos.map((item) => (
        <Todo
          todo={item}
          key={item.id}
          deleteTodo={deleteTodo}
          completTodo={completTodo}
        />
      ))}
    </ul>
  );
}

export default Todos;

import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
 
  const [todos, setTodos] = useState(getitemsLacalstorege());
  const [filterState, setFilterState] = useState("");
  const [filtertodos, setFilterTodos] = useState([]);
  // save into lacalstorege
 
  useEffect(() => {
    todoFilter();
    saveitemsLacalstorege()
  }, [todos, filterState]);
 
  function changeFilter(e) {
    setFilterState(e.target.value);
  }
  function todoFilter() {
    switch (filterState) {
      case "completed":
        
        setFilterTodos(todos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((el) => el.completed === false));
        break;

      default:
        setFilterTodos(todos);
        break;
    }
   
  }
  function clearAll() {
    setTodos([]);
  }
  
   function saveitemsLacalstorege() {
    localStorage.setItem("todos", JSON.stringify(todos));
   }
  function getitemsLacalstorege() {
   
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
      return []
    } else {
      let todoslocal = JSON.parse(localStorage.getItem("todos"));
      return todoslocal
    }
    
    
  }
  return (
    <div className="App container">
      <div className="wrapper">
        <header>Todo App</header>
        <Form todos={todos} setTodos={setTodos} changeFilter={changeFilter} />
        <Todos todos={todos} filtertodos={filtertodos} setTodos={setTodos} />
        <div className="footer">
          <span>
            You have <span className="pendingTasks">{todos.length}</span>{" "}
            pending tasks
          </span>
          <button onClick={clearAll}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;

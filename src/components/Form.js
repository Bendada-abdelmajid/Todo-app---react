import { useRef } from "react";

function Form({ todos, setTodos, changeFilter }) {
  const inputRef = useRef();
  const BtnRef = useRef();
  function showBtn(e) {
   
    if(e.target.value.length > 0) {
      BtnRef.current.classList.add('active')
    } else {
      BtnRef.current.classList.remove('active')
    }
  }
  function addTodo(e) {
    e.preventDefault();
    
    const todotext = inputRef.current.value;
    
    if(todotext.length > 0){
      setTodos((prvtodo) => {
      
        return [
          ...prvtodo,
          { text: todotext, completed: false, id: Math.random() * 10000 },
        ];
      });
      
      inputRef.current.value = "";
      BtnRef.current.classList.remove('active')
    }
    
  }

  return (
    <div className="head center">
      <form className="inputField" onSubmit={addTodo}>
        <input type="text" ref={inputRef} placeholder="Add your new todo" required  onChange={showBtn}/>
        <button type="submit" ref={BtnRef} className="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 15">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
        </button>
      </form>

      <div className="center inputField selectField">
        <select id="select" onChange={changeFilter}>
          <option value="All"> All</option>
          <option value="completed"> completed</option>
          <option value="uncompleted"> uncompleted</option>
        </select>
        <label htmlFor="select" className="btn center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
        </label>
      </div>
    </div>
  );
}

export default Form;

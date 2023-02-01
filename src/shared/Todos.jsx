
import { useEffect, useState } from "react";
import "./Todos.css"
function Todos() {
    const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    });
    const [todo, setTodo] = useState("");
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    function handleInputChange(e) {
      setTodo(e.target.value);
    }
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      if (todo !== "") {
        setTodos([
          ...todos,
          {
            id: todos.length + 1,
            text: todo.trim()
          }
        ]);
      }
  
      setTodo("");
    }
  
    function handleDeleteClick(id) {
      const removeItem = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(removeItem);
    }
  
    return (
      <div className="container">
        <form 
        className="form1"
        onSubmit={handleFormSubmit}>
          <input className="inp"
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={todo}
            onChange={handleInputChange}
          />
        </form>
  
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} <button className="btn btn-danger" onClick={() => handleDeleteClick(todo.id)}> x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default Todos
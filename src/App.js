import React, { useState } from "react";
import Todo from "./shared/Todo";
import '../src/shared/App.css'
import Header from "./shared/Header";
import Form from "./shared/Form";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  return (
    <div className="container">
      <div className="appwrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div>
          <Todo
            todos={todos} 
            setTodos={setTodos}
            setEdit={setEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
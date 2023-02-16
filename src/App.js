// import React, { useState } from "react";
// import TodosList from "./shared/TodosList";
// import Header from "./shared/Header";
// import Form from "./shared/Form";

import Example from "./Example"
// import Demo from "./Demo";
function App() {
  // const [input, setInput] = useState("");
  // const [todos, setTodos] = useState([]);
  // const [edit, setEdit] = useState(null);
  return (
    // <div className="container">
    //   <div className="appwrapper">
    //     <div>
    //       <Header />
    //     </div>
    //     <div>
    //       <Form
    //         input={input}
    //         setInput={setInput}
    //         todos={todos}
    //         setTodos={setTodos}
    //         edit={edit}
    //         setEdit={setEdit}
    //       />
    //     </div>
    //     <div>
    //       <TodosList
    //         todos={todos} 
    //         setTodos={setTodos}
    //         setEdit={setEdit}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div>
{/* <Demo/> */}
      <Example/>

    </div>

  );
}

export default App;

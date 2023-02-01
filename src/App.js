import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = () => { 
    setTodos([...todos, {
      id: todos.length + 1 ,
      title: input,
      isCompleted: false,
    }])
  }

  const removeItem = (id) => {
    let newtodsCopy = todos 
    const filteredData = newtodsCopy.filter(item => item.id != id)
    setTodos(filteredData)
  }

  const updateStatus = (id, status) => {
    let newtodsCopy = todos 
    const filterdArray = newtodsCopy.map(item => {
      let newItem = item
      if(newItem.id === id) {
        newItem.isCompleted = status
        item = newItem
      }
      return item
    })
    setTodos(filterdArray)
  }

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input onChange={e => setInput(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={() => addTodo()}>Add</button>
          </div>
        </div>
        <div>
          {todos.length > 0 ? todos.map((item, i) => {
            return (
              <div key={i+1} className="flex mb-4 items-center">
                <p className={`w-full text-grey-darkest ${item.isCompleted ? "line-through" : ""}`}>{item.title}</p>
                <button onClick={() => updateStatus(item.id, !item.isCompleted)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button onClick={() => removeItem(item.id)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
              </div>
            )
          }) : "No Todo Found"}
        </div>
      </div>
    </div>
  );
}

export default App;

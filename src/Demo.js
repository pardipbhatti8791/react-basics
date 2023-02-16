import React, { useState } from 'react'

const Demo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    const addTodo = () => {
        setTodos([...todos, {
            id: todos.length + 1,
            title: input,
            isCompleted: false,
        }])
    }

    const cancelItem = (id) => {
        let todoscopy = todos;
        const filterData = todoscopy.filter(item => item.id != id)
        setTodos(filterData)
    }
    const DeleteItem = (id, status) => {
        let newTodos = todos
        const filterArray = newTodos.map(item => {
            let newItem = item
            if (newItem.id === id) {
                newItem.isCompleted = status
                item = newItem
            }
            return item
        })
        setTodos(filterArray)
    }
   const setUpdate=()=>{
    setTodos([...input, {
        id: input.length+0,
        title:input,
        isCompleted: false,

    }])
   }

    return (
        <div>
            <h1>to-do list</h1>
            <div>
                <input onChange={e => setInput(e.target.value)} type="text" />
                <button onClick={() => addTodo()}>Add</button>
            </div>
            <div>
                {todos.map((item, i) => {
                    return (
                        <div key={i + 1}>
                            <p>{item.title}</p>
                            <div>
                                <button onClick={() => cancelItem(item.id)}>delete</button>
                            </div>
                            <p className={`w-full text-grey-darkest ${item.isCompleted ? "line-through" : ""}`}>{item.title}</p>
                            <div>
                                <button onClick={() => DeleteItem(item.id, !item.isCompleted)}>done</button>
                            </div>
                            <div>
                                <input onChange={e=>setInput(e.target.value)}/>
                                <button onClick={() => setUpdate()}>Update</button>
                            </div>

                        </div>
                    )
                })
                }

            </div>


        </div>
    )
}

export default Demo
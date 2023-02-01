import React from 'react'

const Todo = ({ todos, setTodos,setEdit}) => {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    };
    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id === id);
        setEdit(findTodo)
    }
     
    return (
        <div>
            {
                todos.map((todo) => (

                    <ol>

                    <li className='todo-list' key={todo.id}>
                        <input type="text"
                            value={todo.title}
                            className="list"
                            onChange={(event) => event.preventDefault()}
                        />
                        <div className='form-control'>

<button className=' btn btn-primary'onClick={()=>handleEdit(todo)}>Edit</button>


<button className='delete btn btn-danger' onClick={()=>handleDelete(todo)}>Delete</button>
                        </div>
                    </li>
                    </ol>

                ))
            }

        </div>
    )
}

export default Todo
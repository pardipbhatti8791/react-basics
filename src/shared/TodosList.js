import React from 'react'

const TodosList = ({ todos, setTodos,setEdit}) => {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    };
    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id === id);
        setEdit(findTodo)
    }
    const handleCheck=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id ===todo.id){
                    return{...item,completed:!item.completed}
                }
                return item;
            })
        )
    }
    return (
        <div>
            {
                todos.map((todo) => (
                    <li className='todo-list' key={todo.id}>
                        <input type="text"
                            value={todo.title}
                            className="list"
                            onChange={(event) => event.preventDefault()}
                        />
                        <div>
<button className='button' onClick={()=>handleCheck(todo)}>
    <input type="checkbox"/>
</button>
<button className='button'onClick={()=>handleEdit(todo)}>Edit</button>
<button className='button' onClick={()=>handleDelete(todo)}>delete</button>
                        </div>
                    </li>

                ))
            }

        </div>
    )
}

export default TodosList
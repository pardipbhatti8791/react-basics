import React,{useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos,edit,setEdit }) => {

    const updateTodo=(title,id,completed)=>{
        const newTodo=todos.map((todo)=>
            todo.id === id ? {title,id,completed}:todo
         ); 
         setTodos(newTodo);
         setEdit("");
    }
    useEffect(()=>{
        if(edit){
            setInput(edit.title);
        } else {setInput("")
        }
        
    },[setInput,edit]);
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!edit){
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("")
        }else{
            updateTodo(input,edit.id,edit.completed)
        }
     

    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a todo ...." className="task-input"
                value={input}
                required
                onChange={onInputChange}

            />

            {/* <hr/> */}
            <button className='button-add' type="submit">Add</button>
        </form>
    )
}

export default Form
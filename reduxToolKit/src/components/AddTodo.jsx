import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'
 
 
const AddTodo = () => {
    const [input, setInput] = useState('');

    // add todo in store
    const dispatch = useDispatch()
    const addTodoHandler = (e) =>{
     e.preventDefault();
     dispatch(addTodo(input))
     setInput("")
    }

  return (
  
    <div className="mainDivclear
    ">
      <div className="loginDiv">
        <h1 className="loginH1">Add Your Todos</h1>
        <form onSubmit={addTodoHandler} className="loginForm">
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter Your Todo" className="formInput" required/>
          <button type="submit" className="lsBtn">Add Todo</button>
        </form>
       
      </div>
      
    </div>
  )
}

export default AddTodo
 
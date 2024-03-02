import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo } from '../feature/todo/todoSlice'
 


const Todos = () => {

 

   const todos =  useSelector(state=>state.todos)
   const dispatch = useDispatch()
   const edithandler = ()=>{

   }
  return (
    <div>
      <div>Todos</div>
      {
        todos.map((todo)=>{
return <li key={todo.id}>{todo.text} <button onClick={()=>dispatch(removeTodo(todo.id))} className=' cursor-pointer' >X</button> </li>
        })
      }
    </div>
  )
}

export default Todos

import React, { useEffect } from 'react'
import { deletetodo, patchdata } from './api'
import { wodo } from './TodoInput'
interface ludu extends wodo{
    setcount:React.Dispatch<React.SetStateAction<boolean>>
}
const TodoItem = ({title,status,position,id,setcount}:ludu) => {
      const handletoggle=()=>{
patchdata(id,status)
setcount((prev)=>(!prev))
  }
const handledelete=()=>{
    deletetodo(id)
    setcount((prev)=>(!prev))
}
  return (
    <div>
      <h3> {id}--{title}--{position}--{status?"Completed":"Pending"}</h3>
      <button onClick={handletoggle}>Toggle</button>
      <button onClick={handledelete}>Delete</button>
    </div>
  )
}

export default TodoItem

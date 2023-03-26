import React, { useEffect, useState } from 'react'
import { getdata } from './api'
import TodoInput, { wodo } from './TodoInput'
import TodoItem from './TodoItem'

const Todo = () => {
const [data,setdata]=useState<wodo[]>([])
const [count,setcount]=useState<boolean>(false)
    useEffect( ()=>{
       getdata().then((res)=>{
setdata(res)

       })
      
    },[count])


console.log(data)

  return (
    <div>
      <TodoInput setcount={setcount}/>

      {data.map((item,index)=>(
        
 <TodoItem  setcount={setcount} key={index} {...item} />
      ))}
      
    </div>
  )
}

export default Todo

import axios from 'axios'
import React, { useState } from 'react'
import { postdata } from './api'

export interface wodo{
    title:string,
    position:string,
    status?:boolean,
id?:number
}
export interface fn{
  setcount:React.Dispatch<React.SetStateAction<boolean>>
}

const TodoInput = ({setcount}:fn) => {

const [add,setadd]=useState<wodo>({
    title:"",
    position:"",
    status:false
   

})


const handleChange=(e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>)=>{
   
const {name,value}=e.target
setadd({...add,[name]:value})
}


const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(add)
    
  postdata(add)
  setcount((prev)=>!prev)
}


  return (
    <div>
        <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" value={add.title} onChange={handleChange} />
        <select name="position" value={add.position} onChange={handleChange}>
            <option value="" >Select Position</option>
            <option value="Fullstack" >Full Stack</option>
            <option value="FrontEnd" >FrontEnd</option>
            <option value="BackEnd" >Backend</option>
        </select>
        <button  type="submit">Add</button>
      </form>
    </div>
  )
}

export default TodoInput


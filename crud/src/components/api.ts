import axios,{AxiosResponse} from 'axios'
import { wodo } from './TodoInput'

export const postdata= async(ob:wodo)=>{
  let res:AxiosResponse= await axios.post(`http://localhost:70/Todos`,ob)
  return res.data
}

export const getdata=async()=>{
    let res:AxiosResponse= await axios.get(`http://localhost:70/Todos`)
    return res.data
}

export const patchdata=async(id?:number,status?:boolean)=>{
  let ob={
    status:!status
  }
  let res:AxiosResponse= await axios.patch(`http://localhost:70/Todos/${id}`,ob)
  return res.data
}


export const deletetodo=async(id?:number)=>{
  let res:AxiosResponse= await axios.delete(`http://localhost:70/Todos/${id}`)
  return res.data
}
import axios from "axios"
import {  config } from "../config"
export const createUser = async (data:object) => {
    try{
    const res = await axios.post(`${config}/Users/addUser`,data)    
    return res
}
    catch(e){
        console.log(e)

    }
}


export const getUserName = async (userName:string) => {
    try{
    const res = await axios.get(`${config}/Users/getUserByUserName/${userName}`)    
    return res
}
    catch { 
            throw Error("error")     
        }
}

export const getUsers = async () => {
    try{
    const res = await axios.get(`${config}/Users/getUsers`)
    return res
}
   catch { 
            throw Error("error")     
        }
}

export const addNewAdmin = async (data:object) => {
    try{
    const res = await axios.post(`${config}/Users/addUser`,data)    
    return res
}
    catch { 
            throw Error("error")     
        }
}
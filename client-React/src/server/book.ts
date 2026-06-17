import axios from "axios"
import {  config } from "../config"


export const getBooks = async () => {
    try{
    const res = await axios.get(`${config}/Book/getBooks`)
    return res
}
    catch { 
            throw Error("error")     
        }
}

export const getCommentById = async (id:number) => {
    try{
    const res = await axios.get(`${config}/Comment/getCommentsbyBookId/${id}`)    
    return res
    }
    catch { 
            throw Error("error")     
        }
}

export const getLendById = async (id:number) => {
    try{
    const res = await axios.get(`${config}/Lend/getLendById/${id}`)    
    return res
    }
    catch { 
            throw Error("error")     
        }
}

export const addNewBook = async (data:object) => {
    try{
    const res = await axios.post(`${config}/Book/addBook`,data)    
    return res
    }
    catch { 
            throw Error("error")     
        }
}
export const deleteBook = async (id:number) => {
    try{
     await axios.delete(`${config}/Book/delete/${id}`)    
    
    }
    catch { 
            throw Error("error")     
        }
}


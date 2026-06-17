import axios from "axios"
import { config } from "../config"

export const addLend = async (data:object) => {
    try{
    const res = await axios.post(`${config}/Lend/addLend`,data)    
    return res
    }
    catch { 
            throw Error("error")     
        }
}

export const getLendByUserId = async (id:number) => {
    try{
    const res = await axios.get(`${config}/Lend/getlendByUserId/${id}`)    
    return res
    }
    catch { 
            throw Error("error")     
        }
}
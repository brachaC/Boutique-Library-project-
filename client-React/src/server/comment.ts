import axios from "axios"
import { config } from "../config"

export const addComment = async (data:object) => {
    try{
    const res = await axios.get(`${config}/Comment/AddComment`)
    return res
}
    catch { 
            throw Error("error")     
        }
}
import { useContext, useEffect, useState } from "react"
import { type Book } from "../models/Book";

import {  getBooks, getCommentById } from "../server/book";
import { useLocation } from "react-router-dom";
import {type Lend } from "../models/Lend";
import { type Comment } from "../models/Comment";
import { UserContext } from "../contexts/userContext";
import { Box,  Stack } from "@mui/material";
import { addLend } from "../server/lend";
import SingleBook from "./SingleBook";


const BooksDisplay = () => {
    const {user}=useContext (UserContext)
    const {  } = useLocation();
    const {  } = useLocation();
    const [books, setBooks] = useState<Book[]>([])
    const [comments, setComments] = useState<Comment[]>([])
    const [lends,setLends]= useState<Lend[]>([])

        const getBooksFunc = async () => {
            const result =await getBooks()
            setBooks(result?.data)

        }

     useEffect(() => {  
         getBooksFunc()
    }, [])

    const getComments = async (id: number) => {
        try{
        const result = await getCommentById(id)
        setComments(result?.data)
        }
        catch{
            console.log("error");
            
        }
    }

    

    return (<>
   
        <h2>The books:</h2>
         <Box sx={{
       
    backgroundColor:"rgb(19, 154, 163)",
     flexDirection:'column',
       }
       }>
   
        {books.map(x => <Stack key={x.id} sx={{display:'inline-grid'}}>
        <SingleBook book={x}/>  
        </Stack>
    )}
{comments.map(x=><div key={x.id}>
<div>{x.content}</div>

</div>)}
     </Box> 
    </>)
}
export default BooksDisplay;

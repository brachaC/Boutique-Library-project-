import { useForm } from "react-hook-form";

import  * as yup from "yup";
import { addComment } from "../server/comment";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues{
    content:String;
    date:Date ; 
}

     const AddCommentform= yup.object({
content:yup.string().matches(/[A-z]/).required(),
date:yup.date().required(),  
}).required(); 

const AddComment:React.FC = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm ({
  resolver:yupResolver(AddCommentform),});



 const onSubmit =(data:FormValues) =>{
   
        addComment(data)
      



console.log("the data sended",data)
 }
        
    



  return (
    <div>
   <form onSubmit={handleSubmit(onSubmit)}>
            
<label>content</label>
            <input {...register("content",{required:"enter content"})}
            placeholder="enter content"
             />
{errors.content&& <p>{errors.content.message}</p>}

<label>date</label>
            <input {...register("date",{required:"enter date"})}
            placeholder="enter date"
             />
{errors.date && <p>{errors.date.message}</p>}


 
    
    <button type="submit">submit</button>
           
        </form> 
    
        </div>
  )
  
};

export default AddComment

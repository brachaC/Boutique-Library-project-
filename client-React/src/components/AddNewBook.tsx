import { useForm } from "react-hook-form";
import { addNewBook } from "../server/book";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Stack, TextField } from "@mui/material";

const formAddBook = yup.object({
  title: yup.string().matches(/[A-z]+/, 'Is not in correct format').required(),
  auther: yup.string().matches(/[A-z]+/, 'Is not in correct format').required(),
  image: yup.string().matches(/[A-z]+/, 'Is not in correct format').required(),
  summery: yup.string().matches(/[A-z]+/, 'Is not in correct format').required(),
  pageCount: yup.string().matches(/[0-9]/).required(),
  // category: yup.string().required(),
  categoryId: yup.string().matches(/[0-9]/).required(),
  status: yup.string().required(),
}).required();

const AddNewBook:React.FC = () => {
  
  const { register, handleSubmit, formState: { errors } }
  = useForm ({resolver: yupResolver(formAddBook),})

 const onSubmit =(data:object) =>{
   console.log("the data sended",data)
         addNewBook(data)
 }
  return (
   <>
   
        <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2} id="inputSignUp">

        <TextField id="outlined-basic" label="title" variant="outlined" {...register("title", { required: "enter title" })}
          placeholder='firstName' />
        {errors.title && <p >{errors.title.message}</p>}



        <TextField id="outlined-basic" label="auther" variant="outlined" {...register("auther", { required: "enter auther" })}
          placeholder='auther' />
        {errors.auther && <p >{errors.auther.message}</p>}




        <TextField id="outlined-basic" label="image" variant="outlined" {...register("image", { required: "enter image" })}
          placeholder='image' />
        {errors.image && <p >{errors.image.message}</p>}



        <TextField id="outlined-basic" label="summery" variant="outlined" {...register("summery", { required: "enter summery" })}
          placeholder='summery' />
        {errors.summery && <p >{errors.summery.message}</p>}



        <TextField id="outlined-basic" label="pageCount" variant="outlined" {...register("pageCount", { required: "enter pageCount" })}
          placeholder='pageCount' />
        {errors.pageCount && <p >{errors.pageCount.message}</p>}




        <TextField id="outlined-basic" label="categoryId" variant="outlined" {...register("categoryId", { required: "enter categoryId" })}
          placeholder='categoryId' />
        {errors.categoryId && <p >{errors.categoryId.message}</p>}



        <TextField id="outlined-basic" label="status" variant="outlined" {...register("status", { required: "enter status" })}
          placeholder='status' />
        {errors.status && <p >{errors.status.message}</p>}



        <Button type="submit" variant="contained">send</Button>

      </Stack>

      </form>
   </>
  )
}

export default AddNewBook
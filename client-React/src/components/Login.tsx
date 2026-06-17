import { useForm } from "react-hook-form";
import * as yup from "yup";
import {  Link, useNavigate } from "react-router-dom";
import { getUserName } from "../server/users";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, TextField } from "@mui/material";

interface FormValues {
    userName: string;
    mail: string;

}

const formLogin = yup.object({
    userName: yup.string().required(),
    mail: yup.string().matches(/[A-z]/).required(),
}).required();

const Login: React.FC = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formLogin),
    });

    const onSubmit = async (data: FormValues) => {

        const res = await getUserName(data.userName)
        setUser(res?.data)

        { res?.data?.userName != data.userName ? alert("the user is not esist") : navigate("/Home") }
        
        console.log("the data sended", data)
    }



    return (
     <>
        <Link to="/SignUp" >  new user </Link>

        <form onSubmit={handleSubmit(onSubmit)}id="formLogin">
            <label>userName</label>
            

<Stack gap={5} id="inputLogin">

      <TextField id="outlined-basic" label="userName" variant="outlined" {...register("userName",{required:"enter userName"})}
         placeholder='userName'/>
        {errors.userName&&<p >{errors.userName.message}</p>}

      <TextField id="outlined-basic" label="mail" variant="outlined" {...register("mail",{required:"enter password"})}
         placeholder='mail'/>
       {errors.mail&&<p >{errors.mail.message}</p>}

      <Button type="submit"
          
          variant="contained"     
        >
          Login
      </Button>

      </Stack>

        </form>
    </>
    )
}

export default Login
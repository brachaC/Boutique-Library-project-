import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {  useNavigate } from "react-router-dom";
import { createUser } from "../server/users";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const formSignUp = yup.object({
  userName: yup.string().required(),
  password: yup.string().max(6).matches(/[0-9]/).required(),
  tz: yup.string().matches(/[0-9]/).required(),
  firstName: yup.string().matches(/[A-z]+/, 'Is not in correct format').required(),
  lastName: yup.string().matches(/[A-z]+/, 'Is not in correct format').required(),
  phoneNumber: yup.string().max(14).matches(/[0-9]/).required(),
  mail: yup.string().email().required(),

}).required();

const SignUp: React.FC = () => {
  const { setUser} = useContext(UserContext)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSignUp),
  });



  const onSubmit = async (data: Object) => {
    
    const res = await createUser(data)
    setUser(res?.data)
    { res && navigate("/Home") }

  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2} id="inputSignUp">

        <TextField id="outlined-basic" label="firstName" variant="outlined" {...register("firstName", { required: "enter firstName" })}
          placeholder='firstName' />
        {errors.firstName && <p >{errors.firstName.message}</p>}



        <TextField id="outlined-basic" label="lastName" variant="outlined" {...register("lastName", { required: "enter lastName" })}
          placeholder='lastName' />
        {errors.lastName && <p >{errors.lastName.message}</p>}




        <TextField id="outlined-basic" label="password" variant="outlined" {...register("password", { required: "enter password" })}
          placeholder='password' />
        {errors.password && <p >{errors.password.message}</p>}



        <TextField id="outlined-basic" label="userName" variant="outlined" {...register("userName", { required: "enter userName" })}
          placeholder='userName' />
        {errors.userName && <p >{errors.userName.message}</p>}



        <TextField id="outlined-basic" label="tz" variant="outlined" {...register("tz", { required: "enter tz" })}
          placeholder='tz' />
        {errors.tz && <p >{errors.tz.message}</p>}




        <TextField id="outlined-basic" label="phoneNumber" variant="outlined" {...register("phoneNumber", { required: "enter phoneNumber" })}
          placeholder='phoneNumber' />
        {errors.phoneNumber && <p >{errors.phoneNumber.message}</p>}



        <TextField id="outlined-basic" label="mail" variant="outlined" {...register("mail", { required: "enter mail" })}
          placeholder='mail' />
        {errors.mail && <p >{errors.mail.message}</p>}



        <Button type="submit" variant="contained">send</Button>

      </Stack>

      </form>

    </>
  )

};

export default SignUp

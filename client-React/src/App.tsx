
import { useContext } from 'react'
import './App.css'
import Header from './components/Header'
import { Box } from '@mui/material'
import { UserContext } from './contexts/userContext'
import { Outlet, useLocation } from 'react-router-dom'
import Enter from './components/Enter'


const App=()=> {
const {user}=useContext(UserContext)
    const {pathname}=useLocation()
  return (
    
    <>
<Box sx={{ 

backgroundColor:"rgb(19, 154, 163)" ,
backgroundRepeat:'no-repeat',
backgroundSize:'cover',
color:"rgb(255, 255, 255)",
height:"100vh",
width:"100vw"
} }> 
    <h1>WELCOME TO BOUTIQUE LIBRARY</h1>
     <Header/>
     <Outlet></Outlet>
     {!user&&pathname=='/'&&<Enter/>}
     </Box>
    </>
  )
}

export default App

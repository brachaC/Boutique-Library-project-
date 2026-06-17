import { useContext } from "react"
import { UserContext } from "../contexts/userContext"
import { Box } from "@mui/material"
import  image from "../image/2library-singapore.png";
const Home = () => {

  const {user}=useContext(UserContext)

  return (
   <Box
     sx={{
      marginTop:"-40px",
      backgroundImage:`url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "700px"
     }}
   >

 <h1 id="hello" >hello to {user?.firstName+" "+user?.lastName}</h1>
 <h2>we happy that you came again!</h2>
   </Box>
  )    
}
export default Home


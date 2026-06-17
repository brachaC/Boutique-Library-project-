import { Box } from "@mui/material";
import  image from "../image/2library-singapore.png";
const Enter=()=>{
  
    return (
        
       <Box sx={{
marginTop:"-px",
              backgroundImage:`url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "700px",
              opacity: 0.9,
              backgroundColor:"rgb(19, 154, 163)"
       }}>
       
        </Box> 
  
    )
}
export default Enter;
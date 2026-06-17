import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb"
import MenuIcon from '@mui/icons-material/Menu'
import React from "react";

const Header=()=>{
  const {user}=React.useContext(UserContext)
   const navigate =useNavigate()

   const [setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
   
    return (
    
 <AppBar position="static"  sx={{width:"2000px",
                                    height:"80px",
                                    textAlign:"center",
                                    backgroundColor:"rgb(255, 255, 255)"}}>
      <Container 
      // maxWidth="xl"
      >
        <Toolbar disableGutters>
          <AdbIcon 
          // sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
           />
          <Typography
          variant="h4" 
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'rgb(19, 154, 163)',
              textDecoration: 'none'
            }}
          >
            Boutique Library
          </Typography>
          <Box sx={{ flexGrow: 1, display: {  xs: 'none', md: 'flex' } }}>

      <Button  sx={{ my: 2, color: 'white', display: 'block' }}> {!user && <Link to={"SignUp"}> SignUp</Link>}</Button>
       <Button  sx={{ my: 2, color: 'white', display: 'block' }}>{!user&&<Link to={"Login"}> Login </Link>}</Button>
       <Button  sx={{ my: 2, color: 'white', display: 'block' }}>{user && <Link to={"BooksDisplay"}> books display </Link>}</Button>
       <Button  sx={{ my: 2, color: 'white', display: 'block' }}>{!(user?.status )&&user && <Link to={"ShowMyLends"}> my lend </Link>}</Button>
       <Button  sx={{ my: 2, color: 'white', display: 'block' }}>{user?.status&&  <Link to={"Admin"}>  menager menu  </Link>}</Button>

{/* {user?.status&&<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MenuIcon/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem  onClick={(event: React.MouseEvent<HTMLElement>)=>{navigate("/AddBook");setAnchorElNav(event.currentTarget)}}>
                  <Typography sx={{ textAlign: 'center' }}>new book</Typography>
                </MenuItem>
            
            </Menu>
          </Box>} */}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      
    )
}
export default Header;
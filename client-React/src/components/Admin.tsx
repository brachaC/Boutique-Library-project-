import { Link, Outlet } from "react-router-dom"

const Admin=()=> {
   
  
  return (
   <>
   <h2>HELLO TO ADMIN</h2>
    <>
    <Link to={"AddNewBook"} >  AddNewBook  </Link>
   <Link to={"AddNewAdmin"} >  AddNewAdmin  </Link>
   <Link to={"UsersDisplay"} >  UsersDisplay </Link>
   {/* <Link to={"ReturnBook"} >  ReturnBook  </Link> */}
   <Outlet></Outlet>
   </>
   </>
  )
}

export default Admin
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer";
import SignUp from "./components/SignUp";
import BooksDisplay from "./components/BooksDisplay";
import Login from "./components/Login";
import UserProvider, { UserContext } from "./contexts/userContext";
import AddNewBook from "./components/AddNewBook";
import Admin from "./components/Admin";
import AddNewAdmin from "./components/AddNewAdmin";
import AddComment from "./components/AddComment";
import UsersDisplay from "./components/UsersDisplay";
import ShowMyLends from "./components/ShowMyLends";
import { useContext, type ReactNode } from "react";
import Home from "./components/Home";

const RouteRoles = ({ roles, children }: { roles: boolean[], children: ReactNode }) => {
    const { user } = useContext(UserContext)
    
    if (!user)
        return <Navigate to="" />
        
    if (!roles.includes(user.status))
        return <Navigate to="" />

    return <>{children}</>

}
const routes = createBrowserRouter([

    {
        

        path: "",
        element: <UserProvider> <App /></UserProvider>,
        children: [
            {
                path: "Login",
                element: <Login />
            },
            {
            path: "Home",
           element: <Home />
        },
            {
                path: "BooksDisplay",
                element: <RouteRoles roles={[true,false]}><BooksDisplay/></RouteRoles>,
                children: [
                    {
                        path: "AddComment",
                        element: <AddComment />
                    },]


            },
            {
                        path: "ShowMyLends",
                        element: <RouteRoles roles={[true,false]}><ShowMyLends/></RouteRoles>
                    },
            {
                path: "Admin",
                element: <Admin />,
                children: [
                    {
                        path: "AddNewBook",
                        element: <AddNewBook />
                    },
                    {
                        path: "UsersDisplay",
                        element: <UsersDisplay />
                    },
                    // {
                    //     path: "ReturnBook",
                    //     element: <ReturnBook />
                    // },

                    {
                        path: "AddNewAdmin",
                        element: <AddNewAdmin />
                    }
                ]
            },
            // {
            //     path: "UpdateUser",
            //     element: < UpdateUser />
            // },

        ]
    },

    {
        path: "SignUp",
        element: <SignUp />
    },



    {
        path: "Footer",
        element: <Footer />
    }


])
export default routes;



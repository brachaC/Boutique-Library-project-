import { useEffect, useState } from "react"
import {  useLocation } from "react-router-dom";
import { getUsers } from "../server/users";
import type { User } from "../models/Users";




const UsersDisplay=()=> {
    
    const {  } = useLocation();
    const {  } = useLocation();
    const [users, setUsers] = useState<User[]>([])
 
    
    useEffect(() => {

        const myFunc = async () => {
            const result =await getUsers()
            setUsers(result?.data)

        }
        myFunc()

    }, [])

    
    
    return (<>
    
        <h2>The users:</h2>
        {users.map(x => <div key={x.id}>
          <div>{x.firstName}  {x.lastName} </div>
     

        </div>
    )}


</>)
}

export default UsersDisplay
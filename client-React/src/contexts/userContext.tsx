import { createContext,  useState, type ReactNode } from 'react'
import type { User } from '../models/Users';
 

interface userContextType{
  user: null | User, setUser: (u: User) => void
}
export const UserContext = createContext<userContextType>({user:null,setUser:(u:User)=>{}})

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User|null>(null);


    

    return (<UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>)

}

export default UserProvider
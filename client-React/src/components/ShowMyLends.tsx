import { useContext, useEffect, useState } from "react"
import type { Lend } from "../models/Lend"
import { UserContext } from "../contexts/userContext"
import { getLendByUserId } from "../server/lend"

const ShowMyLends =()=>{

const [myLends,setMyLends]= useState<Lend[]>([]) 
const {user}=useContext (UserContext)


 useEffect(() => {
const myLendFunc =async (userid:number) => {
const resLend =await getLendByUserId(userid)
setMyLends(resLend?.data)

}
       const id =user?user.id:-1 
        myLendFunc(id)

    }, [])


 return (<>
    <h2>My Lends:</h2>
{myLends.map(x => 
<div key={x.id}>
<div>{x.bookName}</div>
</div>)

}
    </>)
}
export default ShowMyLends;

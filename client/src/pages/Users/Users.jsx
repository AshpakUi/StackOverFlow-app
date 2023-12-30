import React from "react";
import {useLocation} from "react-router-dom"
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UserList from "./UserList"

 const Users=()=>{
    const location=useLocation()
    console.log(location.pathname,"this is location");
    return(
        <div className="home-container-1">
           <LeftSidebar/>
           <div className="home-container-2">
            <h1>Users</h1>
            {
              location.pathname==="/Users"?
              <UserList/>:<></>
            }
            </div>
        </div>
    )
}

export default Users;
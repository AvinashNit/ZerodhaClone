import NavBar from "./NavBar";
import { createContext, useEffect, useState,useContext } from "react";
import LeftSection from "./LeftSection";
import { AuthContext } from "./AuthContext";
import { Link,Outlet,Routes,Route} from "react-router-dom";
function Home() {
    const {user,logout}=useContext(AuthContext)
    return ( 
       
        <>
        
        <NavBar logout={logout} ></NavBar>
       
        <div className="flex justify-center">
            <div className=" flex basis-1/3 h-screen border-r-2 border-r-gray-200">
                <LeftSection></LeftSection>
            </div>
            <div  className="basis-2/3 ">
            <div className="ms-2 bg-gray-100 h-screen ps-5 p-10">
            <h4 className="text-lg font-semibold text-gray-500 mb-5">
               {
                `HI, ${user.username}`
               }
            </h4>
            <Outlet></Outlet>
            </div>
            </div>
        </div>
        
        </>
     );
}
export default Home;


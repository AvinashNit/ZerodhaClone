import { createContext } from "react";

const MyContext=createContext({
    showWindow:()=>{},
    cancelWindow:()=>{},
    setStock:()=>{}
})
export {MyContext}
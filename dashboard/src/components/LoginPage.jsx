import { useContext, useRef, useState,useCallback } from "react";
// import "./loginpage.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContext";
function LoginPage() {
    const userRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();
    const {login} =useContext(AuthContext);
    const [error,setError]=useState(null);
    const handlerror=useCallback(()=>{
        setError(null)
    },[]);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const loginData={
            username:userRef.current.value,
            password:passwordRef.current.value
        }
        try{
            const res=await login(loginData);
            if(res) {
                    navigate("/home", { replace: true });
                }
            else{
                setError("Invalid username or password")
                userRef.current.value="";
                passwordRef.current.value="";
            }
                 
        }catch(err){ 
            setError("Invalid username or password")
            userRef.current.value="";
            passwordRef.current.value="";
        }
    }
    return (  
       
        <div className="bg-slate-600 w-screen h-screen flex justify-center items-center">
            <div className="border-2 rounded-2xl border-fuchsia-400 p-20 outline-1 outline-offset-2 shadow-2xl w-1/2 md:w-1/3 flex justify-center  ">
            <form onSubmit={(e)=>{handleSubmit(e)}} >
               <h1 className="text-2xl text-fuchsia-500 text-center shadow-2xl">Login</h1>
               {
                error && <p className="text-red-400 text-center mt-4 font-light">{error}</p>
               }
               <div className="input-box">
                <label>
                    <input onFocus={handlerror} type="text" required placeholder="username" name="username"  ref={userRef} className=" text-sky-200 mt-10  border-2 
                    p-6 placeholder:italic  py-2 rounded-3xl focus:border-fuchsia-400 focus:outline-0 " />
                </label>
               </div>
               <div className="input-box">
                <label>
                    <input onFocus={handlerror} type="password" required placeholder="password" name="password" className="text-sky-200 mt-10  border-2 
                    p-6 w-60 focus:border-fuchsia-400
                    placeholder:italic  py-2 rounded-3xl focus:outline-0 "  ref={passwordRef}/>
                </label>
               </div>
               <div className="remember-forget flex justify-between w-60">
                     <div className="flex my-4">
                        <input type="checkbox" name="rem" className="accent-fuchsia-400"/>
                        <label htmlFor="rem" className="text-sm text-fuchsia-400">Remember me</label>
                     </div>
                <a href="#" className="inline-block text-end mt-4 text-sm hover:text-fuchsia-500">Forgot password?</a>
               </div>
               <button type="submit" className="inline-block ms-15 text-lg border-2 py-1 px-4 w-30 rounded-3xl text-sky-200 bordercursor-pointer hover:scale-110 my-2 hover:bg-fuchsia-400" >login </button>
               <div>
                <p className="text-center mt-4 text-fuchsia-400">
                    Don't have an account? <Link to={"/signup"} className="text-black hover:text-fuchsia-400 ms-2">Sign up</Link>
                </p>
               </div>
               
            </form>
            </div>
        </div>

    );
}

export default LoginPage;
import { useRef, useState ,useContext} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
function SignUp() {
    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();
    const navigate = useNavigate(); // Add navigation hook

    
    const {signup}=useContext(AuthContext)

       const handleSubmit = async (e) => {
        e.preventDefault();
        const username = userRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmpassword = confirmRef.current.value;

        if (password !== confirmpassword) {
            return;
        }

        const newUser = {
            username,
            email,
            password,
            
        };

        try {
            const res =await signup(newUser);
            if (res) {
                navigate("/home", { replace: true });
            }
        } catch (err) {
           console.log(err)
            // No need to navigate to signup as we're already here
        }
    };

    return (
        <div className="h-screen w-screen bg-slate-500 flex justify-center text-center items-center">
        <div className="md:w-2/7 w-1/2 border-2 border-fuchsia-400 p-10  rounded-2xl h-120 text-sky-300 text-center">
        <h1 className="text-xl text-fuchsia-400 shadow-2xl shadow-blue-400 my-4">Signup</h1>
        
            <form onSubmit={handleSubmit} className="flex justify-center">
            <div>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    required 
                    ref={userRef}
                    placeholder="name"
                    className="border-b-2 h-10 focus:outline-0 placeholder:text-sky-300 focus:border-b-fuchsia-400 block w-full my-8 "
                    
                />
                
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="email"
                    ref={emailRef}
                    className="border-b-2 block ps-2 placeholder:text-sky-300 my-8 focus:outline-0 focus:border-b-fuchsia-400 w-full "
                />
                
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="password"
                    required 
                    ref={passwordRef}
                    className="border-b-2 block ps-2 placeholder:text-sky-300 my-8 pb-1 focus:outline-0 focus:border-b-fuchsia-400 w-full "
                />
                
                <input 
                    type="password" 
                    id="confirm" 
                    name="confirmpassword" 
                    placeholder="confirm password"
                    required 
                    ref={confirmRef}
                    className="border-b-2 block ps-2 placeholder:text-sky-300 my-8 pb-1 focus:outline-0 focus:border-b-fuchsia-400 w-full"
                />
                <button type="submit" className="text-sky-600 w-50 h-10 ms-4 block border-2 border-slate-300 rounded-full mb-4 bg-fuchsia-400 cursor-pointer hover:scale-105">Sign Up</button>
                <p>Already have an account? <Link to="/login" className="hover:text-fuchsia-400 ms-4">Log in</Link></p>
                </div>
            </form>
           
            </div>
            
            <div>
            </div>
        </div>
    );
}

export default SignUp;
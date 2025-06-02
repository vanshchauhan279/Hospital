import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const navigate= useNavigate()
    const [name,setName] = useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [check,setCheck] = useState(false)
     

     const handleSignUp = ()=>{
        if (email.trim() === "" || password.trim() === "" || name.trim()==="" || confirmPassword.trim()==="") {
            alert("Please fill all details.");
            return;
        }
        if(check===false){
            alert("Please agree with terms and conditions")
            return;
        }
        console.log("Name: ",name)
        console.log("Email:", email)
        console.log("password: ", password)
        console.log("confirmPassword:", confirmPassword)
     }
  return (
    <div className="md:h-screen md:bg-slate-200">
      <div className="flex justify-center items-center  h-auto pb-20 mt-12">
        <div className="card  w-96 shadow-xl flex items-center justify-center  h-auto pb-10 pt-8 bg-white">
          <h2 className="text-3xl mb-3 mt-2 font-bold">Create an account</h2>

          <div>
            <div className="mt-2">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full max-w-xs mt-1"
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="email">Password</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your mail"
                className="input input-bordered w-full max-w-xs mt-1"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs mt-1"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
             <div className="mt-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full max-w-xs mt-1"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <p className="mt-3">
                <input type="checkbox" className="pt-3 mr-1" onChange={()=>setCheck((prev)=>!prev)}/>
               I agree to the  <span className="font-bold">All Terms and Conditions</span>
            </p>
            <div className=" max-w-xs mt-3 pt-2 pb-2">
              <button className="btn border-none w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 text-white transition-all duration-500 ease-in-out  hover:bg-gradient-to-r hover:from-purple-500 hover:via-yellow-500 hover:to-pink-500" onClick={handleSignUp}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center items-center mt-10">
        Already have an account? 
        <span className="text-pink-500 font-bold" onClick={()=>navigate("/login")}> Login Here</span>{" "}
      </p>
    </div>
  );
};

export default SignUp;
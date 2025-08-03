import React, { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Registration = () => {
  const [isLogin, setisLogin] = useState(true);
  const handleLoginClick = () => setisLogin(false);
  const handleSignupClick = () => setisLogin(true);

  return (
    <div className=" overflow-hidden h-[80vh] flex justify-center items-center bg-zinc-300">
      <div className="relative flex gap-10 shadow-2xl rounded-2xl bg-white">
        <div
          className={`absolute bg-blue-400 h-[100%] w-[50%] ${
            isLogin ? true : "translate-x-[100%]"
          } transition duration-300 rounded-2xl`}
        >
            {
                isLogin ? (
                    <div className="flex justify-center items-center h-full relative rounded-4xl">
                        <img src="https://images.pexels.com/photos/17483811/pexels-photo-17483811.png" alt="" className="absolute h-full w-full bg-contain"/>
                        <h1 className="text-6xl text-red-400 z-10 text-shadow-2xs text-shadow-green-900 font-bold">Welcome Back</h1>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-full relative rounded-4xl">
                        <img src="https://images.pexels.com/photos/17483811/pexels-photo-17483811.png" alt="" className="absolute h-full w-full bg-contain rounded-4xl"/>
                        <h1 className="text-6xl text-red-400 z-10 text-shadow-2xs text-shadow-green-900 font-bold">Create an account</h1>
                    </div>
                )
            }
        </div>
        <Login onSignupClick={handleSignupClick} />
        <Signup onLoginClick={handleLoginClick} />
      </div>
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

const Login = () => {
  const [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const copylogininfo = { ...logininfo };
    copylogininfo[name] = value;
    setlogininfo(copylogininfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    const { email, password } = logininfo;
    if ( !email || !password) {
      return handleError("Email and Password are required");
    }
    // api call
    try{
      const url = "http://localhost:8000/auth/login";
      const response = await fetch(url,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(logininfo),
      });

      // handle error and success case
      const result = await response.json();
      const { success , message, jwtTOKEN , name , error } = result;
      if(success){
        handleSuccess(message);
        localStorage.setItem("Token",jwtTOKEN);
        localStorage.setItem("LoggedIn user ", name);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }else if(error){
        const detail = error?.details[0].message;
        handleError(detail);
      }
      else if(!success){
        handleError(message);
      }
      console.log(result);
    }catch(err){
      handleError(err);
    }

  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
            <input
            type="email"
            name="email"
            placeholder="Email"
            value={logininfo.email}
            onChange={handleChange}
            // required
            className="auth-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={logininfo.password}
            onChange={handleChange}
            // required
            className="auth-input"
          />
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/signup">Signup</Link>
        </p>
      <ToastContainer autoClose={3000} />
    </div>
  );
};


export default Login;
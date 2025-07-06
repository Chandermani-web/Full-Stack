import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

const Signup = () => {
  const [signupinfo, setsignupinfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const copysignupinfo = { ...signupinfo };
    copysignupinfo[name] = value;
    setsignupinfo(copysignupinfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    const { name, email, password } = signupinfo;
    if (!name || !email || !password) {
      return handleError("Name,Email and Password are required");
    }
    // api call
    try{
      const url = "http://localhost:8000/auth/signup";
      const response = await fetch(url,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(signupinfo)
      });

      // handle error and success case
      const result = await response.json();
      const { success , message, error } = result;
      if(success){
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
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
      <h2 className="auth-title">Create Account</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={signupinfo.name}
            onChange={handleChange}
            // required
            className="auth-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupinfo.email}
            onChange={handleChange}
            // required
            className="auth-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupinfo.password}
            onChange={handleChange}
            // required
            className="auth-input"
          />
          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Signup;

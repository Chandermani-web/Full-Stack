import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "remixicon/fonts/remixicon.css";

const Login = ({ onSignupClick }) => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formdata;

    if (email && password) {
      console.log(`User Login Detail\n\nEmail: ${email}\nPassword: ${password}`);
      toast.success("✅ Login Successfully", {
        position: "top-left",
        autoClose: 2000,
      });

      setformdata({
        email: "",
        password: "",
      });
    } else {
      toast.error("❌ Please fill all the details", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="p-10 px-40 text-center flex flex-col items-center justify-center gap-10">
      <form className="flex flex-col text-left gap-4" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="group flex flex-col gap-1 focus-within:text-blue-600 group-focus-within:font-bold">
          <label
            htmlFor="Email"
            className="flex items-center gap-2 text-gray-700 transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"
          >
            <i className="ri-mail-fill transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"></i>{" "}
            Email
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="Email"
            value={formdata.email}
            onChange={(e) =>
              setformdata({ ...formdata, email: e.target.value })
            }
            className="p-3 bg-zinc-100 rounded-2xl placeholder:text-red-300 outline-0 focus:bg-green-100"
          />
        </div>

        {/* Password */}
        <div className="group flex flex-col gap-1 focus-within:text-blue-600 group-focus-within:font-bold">
          <label
            htmlFor="password"
            className="flex items-center gap-2 text-gray-700 transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"
          >
            <i className="ri-lock-line transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"></i>{" "}
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formdata.password}
            onChange={(e) =>
              setformdata({ ...formdata, password: e.target.value })
            }
            className="p-3 bg-zinc-100 rounded-2xl placeholder:text-red-300 outline-0 focus:bg-green-100"
          />
        </div>

        <button className="bg-violet-500 text-white py-2 rounded-3xl hover:-translate-y-2 hover:bg-green-500 transition duration-200 mt-6">
          Login
        </button>
        <p className="text-center text-sm">
          If you don't have any account then,{" "}
          <span
            onClick={onSignupClick}
            className="text-violet-500 font-medium cursor-pointer"
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

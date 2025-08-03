import { toast } from "react-toastify";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import SignupSchema from "../../../Schema/SignupSchema.jsx";

const Signup = ({ onLoginClick }) => {
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState("");

  const { Schema } = SignupSchema();

  const handleSubmit = (e) => {
    e.preventDefault();

    const Schema = SignupSchema(); // ✅ Call and get Schema properly
    const result = Schema.safeParse(formdata);

    if (result.success) {
      const { username, email, password } = formdata;
      console.log(
        `User Signup Detail\n\nUsername: ${username} \nEmail: ${email}\nPassword: ${password}`
      );
      toast.success("✅ Signup Successfully", {
        position: "top-right",
        autoClose: 2000,
      });

      setformdata({
        username: "",
        email: "",
        password: "",
      });
      seterror("");
    } else {
      const err = result.error.format();
      seterror(err);
      toast.error("❌ Please fix the form errors", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="p-10 px-40 text-center flex flex-col items-center justify-center gap-10">
      <form className="flex flex-col text-left gap-4" onSubmit={handleSubmit}>
        {/* Username */}
        <div className="group flex flex-col gap-1 focus-within:text-blue-600 group-focus-within:font-bold">
          <label
            htmlFor="Username"
            className="flex items-center gap-2 text-gray-700 transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"
          >
            <i className="ri-user-fill transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"></i>{" "}
            Username
          </label>
          <input
            type="text"
            name="username"
            id="Username"
            placeholder="Username"
            value={formdata.username}
            onChange={(e) =>
              setformdata({ ...formdata, username: e.target.value })
            }
            className="p-3 bg-zinc-100 rounded-2xl placeholder:text-red-300 outline-0 focus:bg-green-100"
          />
        </div>

        {/* Email */}
        <div className="group flex flex-col gap-1 focus-within:text-blue-600 group-focus-within:font-bold">
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-gray-700 transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"
          >
            <i className="ri-mail-fill transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"></i>{" "}
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
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
            htmlFor="Password"
            className="flex items-center gap-2 text-gray-700 transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"
          >
            <i className="ri-lock-line transition-all group-focus-within:text-blue-600 group-focus-within:font-bold"></i>{" "}
            Password
          </label>
          <input
            type="password"
            name="password"
            id="Password"
            placeholder="Password"
            value={formdata.password}
            onChange={(e) =>
              setformdata({ ...formdata, password: e.target.value })
            }
            className="p-3 bg-zinc-100 rounded-2xl placeholder:text-red-300 outline-0 focus:bg-green-100"
          />
        </div>

        <button
          type="submit"
          className="bg-violet-500 text-white py-2 rounded-3xl hover:-translate-y-2 hover:bg-green-500 transition duration-200 mt-6"
        >
          Signup
        </button>
        <p className="text-center text-sm">
          If you already have an account then,{" "}
          <span
            onClick={onLoginClick}
            className="text-violet-500 font-medium cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;

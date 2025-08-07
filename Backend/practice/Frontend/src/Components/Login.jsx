import { toast, ToastContainer } from "react-toastify";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [isloading, setisloading] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!formdata.username) {
      toast.error("Please fill the username or email address");
    }

    if (!formdata.password) {
      toast.error("Please fill the password");
    }

    setisloading(true);
    try {
      const url = "http://localhost:8000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const result = await response.json();
      const { success, error, message } = result;
      if (success) {
        toast.success("🎉 Welcome in Longolive ", {
          autoClose: 2000,
          onClose: () => {
            navigate("/home",{
              state:{
                email: formdata.email,
                password: formdata.password
              }
            });
          },
        });
      } else if (error) {
        toast.error(`${error?.details[0].message}`);
      } else if (!success) {
        toast.error(`${message}`);
      }
    } catch (error) {
      toast.error(`${error}`);
    }
    setisloading(false);
    setformdata({
      email: "",
      password: "",
    });
  };
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <form
        className="w-100 flex flex-col items-center gap-6 py-5 shadow-2xl rounded-sm"
        onSubmit={handlesubmit}
      >
        <h1 className="text-4xl font-bold text-blue-600">Welcome</h1>
        <div className="w-full text-center">
          <input
            type="email"
            placeholder="email"
            value={formdata.email}
            onChange={(e) =>
              setformdata({ ...formdata, email: e.target.value })
            }
            className="w-100 bg-gray-200 placeholder:text-gray-600 px-3 py-1 rounded-sm outline-0 border-0"
          />
        </div>
        <div className="w-full text-center">
          <input
            type="password"
            placeholder="password"
            value={formdata.password}
            onChange={(e) =>
              setformdata({ ...formdata, password: e.target.value })
            }
            className="w-100 bg-gray-200 placeholder:text-gray-600 px-3 py-1 rounded-sm outline-0 border-0"
          />
        </div>
        {isloading ? (
          <button
            type="submit"
            className="bg-red-600 w-100 text-white py-1 rounded-sm hover:bg-green-600 transition duration-300"
          >
            Login...
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-400 w-100 text-white py-1 rounded-sm hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        )}
        <p className="text-gray-700 tracking-tighter font-semibold">
          If you haven't any account, then{" "}
          <Link to="/" className="text-red-600">
            Signup
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

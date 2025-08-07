import { toast, ToastContainer } from "react-toastify";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setformdata({
      username: "",
      email: "",
      password: "",
    });
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!formdata.username) {
      toast.error("Please fill the username");
    }

    if (!formdata.email) {
      toast.error("Please fill the email address");
    }

    if (!formdata.password) {
      toast.error("Please fill the password");
    }

    setisloading(true);
    try {
      const url = "http://localhost:8000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        toast.success("🎉 Successfully Account Created ", {
          autoClose: 2000,
          onClose: () => {
            navigate("/login");
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
      username: "",
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
        <h1 className="text-4xl font-bold text-blue-700">Create an account</h1>
        <div className="w-full text-center">
          <input
            type="text"
            placeholder="username"
            value={formdata.username}
            onChange={(e) =>
              setformdata({ ...formdata, username: e.target.value })
            }
            className="w-100 bg-gray-200 placeholder:text-gray-600 px-3 py-1 rounded-sm outline-0 border-0"
          />
        </div>
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
            Sign up...
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-400 w-100 text-white py-1 rounded-sm hover:bg-green-600 transition duration-300"
          >
            Sign up
          </button>
        )}
        <p className="text-gray-800 tracking-tighter font-semibold">
          If you have already an account then,{" "}
          <Link to="/login" className="text-red-600">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;

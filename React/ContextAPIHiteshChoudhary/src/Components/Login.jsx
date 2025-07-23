import React, { useContext, useState } from "react";
import UserContext from "../Contexts/UserContext.js";
const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
      e.preventDefault();
      setUser({ username: Username, password: Password }); // also changed to lowercase keys for consistency
    };
  return (
    <div className="bg-gray-900 p-3 flex flex-col justify-center items-center w-[600px] gap-2 mt-10 rounded-r-full">
      <h2 className="text-blue-400 font-bold text-3xl">Login</h2>
      <input
        type="text"
        placeholder="username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-none bg-cyan-200 text-black placeholder:text-gray-700 outline-0 w-[80%] p-2 rounded-2xl"
      />
      <input
        type="password"
        placeholder="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-none bg-cyan-200 text-black placeholder:text-gray-700 outline-0 w-[80%] p-2 rounded-2xl"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-600 w-[80%] p-1 rounded-3xl hover:-translate-y-2 hover:bg-blue-700 hover:text-bold transition-all duration-500"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;

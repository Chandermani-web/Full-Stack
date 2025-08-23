import React, { useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
import "remixicon/fonts/remixicon.css";
import { useMemo } from "react";

const App = () => {
  const socket = useMemo(() => io("http://localhost:8000"), []);
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`✅ Socket Connected Successfully\nUser Id: ${socket.id}`);
    });
    socket.on("Welcome", (s) => {
      console.log(s);
    });
    socket.on("receive-message", (data) => {
      setmessages((prev) => [...prev, data]);
    });
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("message", input);
    setinput("");
  };

  return (
    <div className="bg-black h-screen w-screen text-white flex justify-center p-2">
      <div className="flex flex-col gap-7 items-center justify-between w-full">
        <h1 className="text-blue-500 text-4xl tracking-[5px] font-bold">
          WebSocket
        </h1>
        <div>
          {messages.map((message, index) => (
            <h3 key={index} className="bg-gray-800 p-2 rounded-lg w-full">{message}</h3>
          ))}
        </div>
        <form
          onSubmit={handleSend}
          className="w-[60%] flex border-2 rounded-2xl mb-1 pl-5 group focus-within:border-blue-600"
        >
          <input
            type="text"
            placeholder="write any message.."
            className="rounded-2xl w-[90%] outline-0 text-2xl group-focus-within:border-blue-700 placeholder:capitalize"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 w-[10%] h-full rounded-r-2xl group-focus-within:bg-green-500"
          >
            <i className="ri-send-plane-2-fill text-white group-focus-within:text-black text-xl"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

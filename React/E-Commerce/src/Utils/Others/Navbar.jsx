import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <nav className="px-4 py-5 flex justify-between items-center align-center">
        <h1>Chandermani.E-Commerce</h1>
        <ul className="flex gap-10 items-center">
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/order"}>Order</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          
          <li className="relative group cursor-pointer mr-5">
            <span className="hover:text-blue-400 transition-colors">Menu</span>
            <ul className="absolute top-full -right-0.5 bg-zinc-600 shadow-lg text-white p-3 rounded-2xl hidden w-44 group-hover:block">
              <li className="px-3 py-2 hover:bg-zinc-700 rounded">
                <Link to={"/menu/account"}>Account</Link>
              </li>
              <li className="px-3 py-2 hover:bg-zinc-700 rounded">
                <Link to={"/menu/theme"}>Theme</Link>
              </li>
              <li className="px-3 py-2 hover:bg-zinc-700 rounded">
                <Link to={"/menu/service"}>Service</Link>
              </li>
              <li className="px-3 py-2 hover:bg-zinc-700 rounded">
                <Link to={"/menu/history"}>History</Link>
              </li>
              <li className="px-3 py-2 hover:bg-zinc-700 rounded">
                <Link to={"/menu/setting"}>Setting</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

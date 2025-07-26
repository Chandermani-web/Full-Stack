import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const orderItems = useSelector((store) => store.order.orderItems);

  return (
    <header className="bg-black text-white z-10">
      <nav className="px-4 py-5 flex justify-between items-center align-center">
        <h1 className="text-xl font-semibold text-orange-300">🛍️CEC</h1>
        <ul className="flex gap-10 items-center">
          <li>
            <Link
              to={""}
              className="hover:text-blue-400 transition-all duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/shop/products"}
              className="hover:text-orange-400 transition-all duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to={"/order"}
              className="hover:text-green-500 transition-all duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-green-500 after:transition-all after:duration-300"
            >
              Order-<span className="text-green-600">{orderItems.length}</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/cart"}
              className="hover:text-orange-500 transition-all duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300"
            >
              Cart-<span className="text-orange-500">{cartItems.length}</span>
            </Link>
          </li>

          <li className="relative group cursor-pointer mr-5">
            <span className="hover:text-blue-400 transition-colors duration-300">
              Menu
            </span>
            <ul className="absolute top-full -right-0.5 bg-zinc-600 shadow-lg text-white p-3 rounded-2xl hidden w-44 group-hover:block z-10">
              {["account", "theme", "service", "history", "setting"].map((item) => (
                <li
                  key={item}
                  className="px-3 py-2 hover:bg-zinc-700 rounded transition-all"
                >
                  <Link
                    to={`/menu/${item}`}
                    className="block w-full hover:text-blue-300 transition-all"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

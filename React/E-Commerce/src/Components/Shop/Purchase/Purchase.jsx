import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { addItems } from "../../../Store/CartSlice.js";
import { addOrder } from "../../../Store/OrderSlice.js";
import { useDispatch } from "react-redux";
import { addHistory } from "../../../Store/HistorySlice.js";

const Purchase = () => {
  const [Product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1); // Initial quantity
  const [open, setopen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.in/api/products/${id}`
        );
        const data = await response.json();
        const product = data.product;
        setProduct(product);
      } catch (err) {
        console.log(`Error Occurred: ${err}`);
      }
    };
    fetchproduct();
  }, [id]);

  const handleNavigate = () => {
    navigate("/shop/products");
  };

  const handleCartItems = () => {
    dispatch(addItems(Product));
    toast.success("🎉 Add Item Successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    dispatch(addHistory({
      product: Product,
      type: "Cart"
    }));
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (Product.price * quantity).toFixed(2);

  const Confirmorder = () => {

    const handleOrder = () => {
      dispatch(addOrder({ ...Product, quantity }));
      toast.success("🎉 Order Placed Successfully", {
        position: "top-center",
        autoClose: 2000,
      });
      dispatch(addHistory({
        product: Product,
        type: "Order"
      }))
      setopen(false); // close the modal
    };

    return (
      <div className="bg-zinc-700 fixed inset-0 z-50 flex flex-col justify-center text-left items-center gap-3 p-5">
        <button
          className="absolute top-3 right-3 text-3xl text-white hover:text-red-500 transition duration-300 ri-close-circle-line"
          onClick={() => setopen(false)}
        />
        <img
          src={Product.image}
          alt={Product.title}
          className="h-50 w-50 object-contain rounded-2xl bg-white p-1"
        />
        <h1 className="text-base md:text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
          Title: {Product.title}
        </h1>
        <div className="flex flex-col gap-3 text-white">
          <p className="text-sm text-red-500">
            Brand: <span>{Product.brand}</span>
          </p>
          <p className="text-sm text-red-500">
            Category: <span>{Product.category}</span>
          </p>
          <p className="text-sm text-green-300">
            Total Amount: <span>${totalPrice}</span>
          </p>
        </div>
        <button
          className="bg-green-500 text-black p-2 rounded-xl hover:bg-green-800 hover:text-white transition duration-500"
          onClick={handleOrder}
        >
          Confirm Order
        </button>
      </div>
    );
  };

  return (
    <div className="relative flex justify-between xl:h-[90vh] gap-10 items-center p-20">
      <button
        className="absolute top-5 left-5 bg-black text-white p-2 rounded-2xl ri-arrow-left-line"
        onClick={handleNavigate}
      >
        Back to Shop
      </button>

      <div className="flex-1 relative">
        {Product.popular && (
          <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-4xl text-xl">
            🔥 Trending
          </span>
        )}
        <img
          src={Product.image}
          alt={Product.title}
          className="h-100 w-full object-contain p-2 bg-white rounded-2xl"
          style={{ boxShadow: "0 0 10px aqua" }}
        />
      </div>

      <div className="flex-1">
        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
          {Product.title}
        </h2>
        <p className="text-sm text-gray-500">
          Brand: <span className="text-black">{Product.brand}</span>
        </p>
        <p className="text-sm text-gray-500">
          Category: <span className="text-black">{Product.category}</span>
        </p>
        <p className="text-sm text-gray-500">
          Color: <span className="text-black">{Product.color}</span>
        </p>
        <p className="text-sm text-gray-500">
          Model: <span className="text-black">{Product.model}</span>
        </p>
        <p className="text-sm text-gray-500">
          Description: <span className="text-black">{Product.description}</span>
        </p>

        {/* Quantity Controls */}
        <div className="mt-4 flex items-center gap-4">
          <span className="text-sm text-gray-700 font-semibold">Quantity:</span>
          <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
            <button
              onClick={decrement}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-black"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increment}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-black"
            >
              +
            </button>
          </div>
        </div>

        {/* Price and Buttons */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-green-600">
              ${totalPrice}
            </span>
            {Product.discount && (
              <span className="text-sm text-red-500 ml-2">
                -{Product.discount}%
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="text-sm px-3 py-1 rounded-md text-white bg-zinc-500 hover:bg-black transition"
              onClick={() => setopen((prev) => !prev)}
            >
              Buy Now
            </button>
            <button
              className="text-sm px-3 py-1 rounded-md text-white bg-amber-500 hover:bg-green-600 transition"
              onClick={handleCartItems}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {open && <Confirmorder />}
    </div>
  );
};

export default Purchase;

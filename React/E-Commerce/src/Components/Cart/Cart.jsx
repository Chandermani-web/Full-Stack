import { toast } from "react-toastify";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemById,
  incrementItem,
  decrementItem,
  clearItems,
} from "../../Store/CartSlice.js";
import { clearHistory } from "../../Store/HistorySlice.js";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="max-w-6xl relative mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Your Cart
      </h1>
      <button
        className="absolute bg-black text-white p-2 right-0 top-3 rounded-xl ri-refresh-line"
        onClick={() => {
          dispatch(clearItems());
          toast.success("✅ Clear Cart Successfully", {
            position: "top-center",
            autoClose: 2000,
          });
        }}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch(decrementItem(item.id))}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementItem(item.id))}>
                +
              </button>
              <button
                className="text-red-500 ml-4"
                onClick={() => dispatch(removeItemById(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeOrderById,
  incrementOrder,
  decrementOrder,
  clearOrders,
} from '../../Store/OrderSlice';

const Order = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.order.orderItems);

  return (
    <div className="max-w-6xl relative mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">My Orders</h2>
      <button 
      className='absolute bg-black text-white p-2 right-0 top-3 rounded-xl ri-refresh-line'
      onClick={()=>dispatch(clearOrders())}
      >Clear Order</button>
      {orderItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">You have not placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orderItems.map((item, index) => {
            const quantity = item.quantity || 1;
            const price = Number(item.price) || 0;
            const total = (price * quantity).toFixed(2);

            return (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain rounded-lg border"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>Brand: <span className="text-black">{item.brand}</span></p>
                    <p>Model: <span className="text-black">{item.model}</span></p>
                    <p>Color: <span className="text-black">{item.color}</span></p>
                    <p>Category: <span className="text-black">{item.category}</span></p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      onClick={() => dispatch(decrementOrder(item.id))}
                    >
                      -
                    </button>
                    <span className="font-semibold">{quantity}</span>
                    <button
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      onClick={() => dispatch(incrementOrder(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-green-600 font-bold text-lg">${total}</p>
                  <button
                    className="text-sm mt-2 text-red-500 hover:underline"
                    onClick={() => dispatch(removeOrderById(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Order;

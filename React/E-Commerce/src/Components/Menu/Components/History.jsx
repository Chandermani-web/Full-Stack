import {toast} from 'react-toastify';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../../Store/HistorySlice.js"; // adjust path as needed

const History = () => {
  const dispatch = useDispatch();
  const historyData = useSelector((state) => state.history.history);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClearHistory = () => {
    dispatch(clearHistory());
    toast.success("✅ Clear History Successfully", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Browsing History</h2>
        {historyData.length > 0 && (
          <button
            onClick={handleClearHistory}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Clear All
          </button>
        )}
      </div>

      {historyData.length === 0 ? (
        <p className="text-gray-600">No history available.</p>
      ) : (
        <ul className="space-y-4">
          {historyData.map((item, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer "
              onClick={() => toggleExpand(index)}
            >
              <div className="flex gap-10 items-baseline">
                <div className="mt-2 text-gray-700 flex gap-3">
                  <p>
                    <strong>Date:</strong> {item.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {item.time}
                  </p>
                </div>
                {/* Header */}
                <div className="flex justify-between items-center gap-10">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded ${
                      item.type === "view"
                        ? "bg-blue-100 text-blue-600"
                        : item.type === "cart"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.type}
                  </span>
                  <h3 className="text-xl font-semibold text-blue-600">
                    {item.title || item.name || "Unnamed Product"}
                  </h3>
                </div>
              </div>

              {/* Expanded details */}
              {expandedIndex === index && (
                <div className="mt-4 border-t pt-4 flex p-2 gap-10 items-center">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title || "product"}
                      className="w-40 h-40 object-contain mb-4 rounded"
                    />
                  )}
                  <div>
                    {item.description && (
                      <p className="text-gray-800 mb-2">
                        <strong>Description:</strong> {item.description}
                      </p>
                    )}
                    {item.category && (
                      <p className="text-gray-600 mb-1">
                        <strong>Category:</strong> {item.category}
                      </p>
                    )}
                    {item.price && (
                      <p className="text-green-600 font-medium">
                        <strong>Price:</strong> ₹{item.price}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;

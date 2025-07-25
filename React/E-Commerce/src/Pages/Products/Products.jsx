import React, { useState } from "react";
import UseGetData from "../../Hooks/UseGetData.jsx";
import { useNavigate } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton.jsx";

// Individual Product Card Component
const ShowProducts = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative bg-white shadow-md hover:shadow-2xl rounded-xl overflow-hidden transition-shadow duration-500 cursor-pointer flex flex-col"
    >
      {/* Trending Badge */}
      {product.popular === true && (
        <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-md text-xs z-10">
          🔥 Trending
        </span>
      )}

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain p-2 bg-white"
      />

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between px-4 py-2">
        <div>
          <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500">Brand: <span className="text-black">{product.brand}</span></p>
          <p className="text-sm text-gray-500">Category: <span className="text-black">{product.category}</span></p>
          <p className="text-sm text-gray-500">Color: <span className="text-black">{product.color}</span></p>
          <p className="text-sm text-gray-500">Model: <span className="text-black">{product.model}</span></p>
        </div>

        {/* Price and Buttons */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-green-600">${product.price}</span>
            {product.discount && (
              <span className="text-sm text-red-500 ml-2">-{product.discount}%</span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="text-sm px-3 py-1 rounded-md text-white bg-zinc-500 hover:bg-black transition">
              Buy Now
            </button>
            <button className="text-sm px-3 py-1 rounded-md text-white bg-amber-500 hover:bg-green-600 transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Products Component
const Products = () => {
  const { Data, setId } = UseGetData();
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/shop/purchase/${id}`);
  };

  const showmore = () => {
    setId((prev) => (prev === 149 ? 149 : prev + 20));
  };

  return (
    <div>
      {Data.length === 0 ? (
        <Skeleton />
      ) : (
        <div className="text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-5 sm:p-10 text-left">
            {Data.map((product) => (
              <ShowProducts
                key={product.id}
                product={product}
                onClick={() => handleNavigate(product.id)}
              />
            ))}
          </div>

          <button
            className="bg-blue-700 text-white px-6 py-2 rounded-xl hover:-translate-y-1 hover:bg-blue-900 transition-all duration-300 mb-12"
            onClick={showmore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;

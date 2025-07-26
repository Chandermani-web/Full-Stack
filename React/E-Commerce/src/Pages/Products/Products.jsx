import React, { useState } from "react";
import UseGetData from "../../Hooks/UseGetData.jsx";
import { useNavigate } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton.jsx";
import FilterSidebar from "../Filter/FilterSidebar.jsx";
import { useDispatch } from "react-redux";
import { addHistory } from "../../Store/HistorySlice.js";

// ✅ Individual Product Card Component
const ShowProducts = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative bg-white shadow-md hover:shadow-2xl rounded-xl overflow-hidden transition-shadow duration-500 cursor-pointer flex flex-col"
    >
      {product.popular && (
        <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-md text-xs z-10">
          🔥 Trending
        </span>
      )}

      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain p-2 bg-white"
      />

      <div className="flex-1 flex flex-col justify-between px-4 py-2">
        <div>
          <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500">
            Brand: <span className="text-black">{product.brand}</span>
          </p>
          <p className="text-sm text-gray-500">
            Category: <span className="text-black">{product.category}</span>
          </p>
          <p className="text-sm text-gray-500">
            Color: <span className="text-black">{product.color}</span>
          </p>
          <p className="text-sm text-gray-500">
            Model: <span className="text-black">{product.model}</span>
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-green-600">
              ₹{product.price}
            </span>
            {product.discount && (
              <span className="text-sm text-red-500 ml-2">
                -{product.discount}%
              </span>
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

// ✅ Main Component
const Products = () => {
  const { Data, setId } = UseGetData(); // Custom hook to fetch product data
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
  });

  // ✅ Navigate and track browsing history
  const handleCardClick = (product) => {
    dispatch(addHistory({
      product: product,
      type: "view",
    }));
    navigate(`/shop/purchase/${product.id}`);
  };

  // ✅ Filtering logic
  const filteredProducts = Data.filter((product) => {
    const matchCategory = filters.category
      ? product.category?.toLowerCase().includes(filters.category.toLowerCase())
      : true;

    const matchBrand = filters.brand
      ? product.brand?.toLowerCase().includes(filters.brand.toLowerCase())
      : true;

    const matchMinPrice = filters.minPrice
      ? product.price >= parseFloat(filters.minPrice)
      : true;

    const matchMaxPrice = filters.maxPrice
      ? product.price <= parseFloat(filters.maxPrice)
      : true;

    return matchCategory && matchBrand && matchMinPrice && matchMaxPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar Filter */}
      <div className="lg:w-1/4 border-r">
        <div className="fixed">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
      </div>

      {/* Product Grid */}
      <div className="lg:w-3/4">
        {Data.length === 0 ? (
          <Skeleton />
        ) : (
          <div className="text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 p-5 sm:p-10 text-left">
              {filteredProducts.map((product) => (
                <ShowProducts
                  key={product.id}
                  product={product}
                  onClick={() => handleCardClick(product)}
                />
              ))}
            </div>

            {/* No product matched */}
            {filteredProducts.length === 0 && (
              <div className="h-100 flex justify-center items-center">
                <h1>Sorry, this item is not available in the store.</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

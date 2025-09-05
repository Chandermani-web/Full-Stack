import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHistory } from "../../Store/HistorySlice.js";
import UseGetData from "../../Hooks/UseGetData.jsx";
import FilterSidebar from "../Filter/FilterSidebar.jsx";
import ProductSkeleton from "../Skeleton/Skeleton.jsx";

// ✅ Enhanced Product Card Component
const ProductCard = ({ product, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col border border-gray-100 transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        {product.popular && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs z-10 shadow-md">
            🔥 Trending
          </span>
        )}
        
        {product.discount && (
          <span className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2.5 py-1.5 rounded-full text-xs z-10 shadow-md">
            -{product.discount}%
          </span>
        )}
        
        <div className="h-60 w-full flex items-center justify-center bg-gray-50 relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>
          )}
          <img
            src={product.image}
            alt={product.title}
            className={`h-48 w-full object-contain transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Quick action buttons */}
        <div className={`absolute bottom-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-amber-50 hover:text-amber-600 transition-colors"
            title="Add to cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Quick view logic here
            }}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
            title="Quick view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between p-5">
        <div>
          <h2 className="font-semibold text-gray-800 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
            {product.title}
          </h2>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              {product.brand || "Generic"}
            </span>
            
            <span className="inline-flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {product.category || "Uncategorized"}
            </span>
          </div>
          
          {product.color && (
            <div className="flex items-center mb-2">
              <span className="text-xs text-gray-500 mr-2">Color:</span>
              <span 
                className="w-4 h-4 rounded-full border border-gray-200 mr-1"
                style={{ backgroundColor: product.color.toLowerCase() }}
              ></span>
              <span className="text-sm text-gray-700 capitalize">{product.color}</span>
            </div>
          )}
          
          {product.model && (
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-500 mr-2">Model:</span>
              <span className="text-sm text-gray-700">{product.model}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                // Buy now logic here
              }}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Component
const Products = () => {
  const { Data, loading, error } = UseGetData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "featured", // New filter option
    rating: "", // New filter option
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // ✅ Navigate and track browsing history
  const handleCardClick = (product) => {
    dispatch(addHistory({
      product: product,
      type: "view",
      timestamp: new Date().toISOString(),
    }));
    navigate(`/shop/purchase/${product.id}`);
  };

  // ✅ Filtering and sorting logic
  const filteredAndSortedProducts = Data
    .filter((product) => {
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

      const matchRating = filters.rating
        ? product.rating >= parseFloat(filters.rating)
        : true;

      return matchCategory && matchBrand && matchMinPrice && matchMaxPrice && matchRating;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "newest":
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        default:
          return (a.popular ? -1 : 1);
      }
    });

  // Products count by category for filter badges
  const categoryCounts = Data.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-2xl max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Failed to load products</h2>
          <p className="text-gray-600 mb-4">We're having trouble loading the products. Please try again later.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with title and controls */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Our Products</h1>
              <p className="text-gray-600 mt-1">Discover our amazing collection</p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {/* Mobile filter toggle */}
              <button 
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
              
              {/* Sort dropdown */}
              <div className="relative">
                <select 
                  value={filters.sortBy}
                  onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                  className="pl-4 pr-10 py-2 appearance-none bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Active filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {Object.entries(filters).map(([key, value]) => {
              if (value && key !== 'sortBy') {
                return (
                  <span 
                    key={key} 
                    className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {key}: {value}
                    <button 
                      onClick={() => setFilters({...filters, [key]: ""})}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter - Desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-24">
              <FilterSidebar 
                filters={filters} 
                setFilters={setFilters} 
                categoryCounts={categoryCounts}
              />
            </div>
          </div>

          {/* Mobile Filter Overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div 
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setMobileFiltersOpen(false)}
              ></div>
              <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button 
                      onClick={() => setMobileFiltersOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <FilterSidebar 
                    filters={filters} 
                    setFilters={setFilters} 
                    categoryCounts={categoryCounts}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">
                    Showing <span className="font-semibold">{filteredAndSortedProducts.length}</span> products
                  </p>
                </div>
                
                {filteredAndSortedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSortedProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => handleCardClick(product)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-gray-400 text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
                    <button 
                      onClick={() => setFilters({
                        category: "",
                        brand: "",
                        minPrice: "",
                        maxPrice: "",
                        sortBy: "featured",
                        rating: "",
                      })}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [showImage, setShowImage] = useState(null);
  const [indexImage, setIndexImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(5);

  // Debounced search function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  };

  // Auto-rotate product & hero images with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 4 >= 145 ? 1 : prev + 4));
      setEnd((prev) => (prev + 4 >= 149 ? 5 : prev + 4));
      setIndexImage((prev) => (prev + 1 >= allImages.length ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [allImages]);

  // Fetch all products with loading state
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://fakestoreapi.in/api/products?limit=149"
        );
        const data = await res.json();
        setAllProducts(data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Slice for top products
  useEffect(() => {
    const sliced = allProducts.slice(start, end);
    setProducts(sliced);
  }, [start, end, allProducts]);

  // Fetch TV category for hero image
  useEffect(() => {
    const fetchTV = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.in/api/products/category?type=tv"
        );
        const data = await res.json();
        setAllImages(data.products || []);
      } catch (err) {
        console.error("Failed to fetch TV category:", err);
      }
    };
    fetchTV();
  }, []);

  // Update hero image on index change
  useEffect(() => {
    if (allImages.length > 0) {
      setShowImage(allImages[indexImage]);
    }
  }, [indexImage, allImages]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigate = () => {
    navigate(`/shop/products`);
  };

  // Optimized search handler with debouncing
  const handleSearchChange = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 300),
    []
  );

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section with improved animations */}
      <section className="h-screen overflow-hidden text-white flex items-center justify-center text-center px-4 relative">
        {/* Blurred Background with fade transition */}
        {showImage && (
          <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
            <img
              src={showImage.image}
              alt={showImage.title}
              className="w-full h-full object-cover blur-md brightness-50 scale-105"
            />
          </div>
        )}

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>

        {/* Hero Content with animations */}
        <div className="z-10 max-w-4xl transform transition-all duration-700">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Chandermani
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-delayed">
            Discover exclusive collections and unbeatable deals
          </p>
          <Link
            to="/shop/products"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl opacity-0 animate-fade-in-more-delayed"
          >
            Shop Now
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section with hover effects */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Why Shop With Us?</h2>
          <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
            We're committed to providing an exceptional shopping experience with
            benefits that put you first
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                description:
                  "Get free shipping on orders over ₹999. Delivered fast, safe, and hassle-free.",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description:
                  "Our dedicated team is always available to help you with your questions or issues.",
              },
              {
                icon: "🔒",
                title: "Secure Payments",
                description:
                  "All transactions are secured with top-grade encryption and trusted gateways.",
              },
              {
                icon: "🔁",
                title: "Easy Returns",
                description:
                  "Not happy with your purchase? Return it within 7 days, no questions asked.",
              },
              {
                icon: "🏷️",
                title: "Best Price",
                description:
                  "We ensure you always get the best value for your money with unmatched prices.",
              },
              {
                icon: "🛍️",
                title: "Exclusive Deals",
                description:
                  "Get access to members-only offers and limited-time discounts every week.",
              },
              {
                icon: "🌍",
                title: "Nationwide Delivery",
                description:
                  "We deliver to every corner of India – no city or village left behind.",
              },
              {
                icon: "🧾",
                title: "Transparent Billing",
                description:
                  "No hidden charges. You always see the complete breakdown of your order.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section with skeleton loading */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured Products
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Discover our most popular items that everyone is talking about
          </p>

          <div className="relative max-w-md mx-auto mb-16">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm animate-pulse"
                >
                  <div className="bg-gray-200 h-60 w-full"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                  onClick={() => handleNavigate(product.id)}
                >
                  <div className="relative overflow-hidden">
                    {product.popular === true && (
                      <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-xs z-10">
                        🔥 Trending
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-60 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-blue-600">
                        ${product.price}
                      </p>
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reviews Section with improved cards */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Hear From Our Customers</h2>
          <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
            Don't just take our word for it - see what our satisfied customers
            have to say about their shopping experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Amazing quality and fast delivery. Highly recommended!",
                name: "Ayesha R.",
                role: "Premium Member",
                rating: 5,
              },
              {
                text: "Excellent support and return policy. Loved the experience.",
                name: "Rahul S.",
                role: "Verified Buyer",
                rating: 5,
              },
              {
                text: "Wide range of products and unbeatable prices!",
                name: "Meena T.",
                role: "Frequent Shopper",
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-700 mb-6">"{review.text}"</p>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with gradient */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive
            deals, new arrivals, and special promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-4 rounded-2xl w-full sm:max-w-md text-gray-900 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap w-full sm:w-auto">
              Subscribe Now
            </button>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in-up 0.8s ease-out 0.3s forwards;
        }
        .animate-fade-in-more-delayed {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;
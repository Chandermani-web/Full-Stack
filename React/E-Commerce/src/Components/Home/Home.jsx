import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [showImage, setShowImage] = useState(null);
  const [indexImage, setIndexImage] = useState(0);
  const navigate = useNavigate();

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(5);

  // Auto-rotate product & hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 4 >= 145 ? 1 : prev + 4));
      setEnd((prev) => (prev + 4 >= 149 ? 5 : prev + 4));
      setIndexImage((prev) => (prev + 1 >= allImages.length ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [allImages]);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.in/api/products?limit=149"
        );
        const data = await res.json();
        setAllProducts(data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
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

  const handleNavigate = (id) => {
    navigate(`/shop/products`);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="h-[80vh] overflow-hidden text-white flex items-center justify-center text-center px-4">
        {/* Blurred Background */}
        {showImage && (
          <img
            src={showImage.image}
            alt={showImage.title}
            className="absolute w-full h-full object-cover blur-md brightness-50 -z-10"
          />
        )}

        {/* Hero Content */}
        <div className="z-10 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Chandermani E-Commerce
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Explore exclusive collections and exciting deals
          </p>
          <Link
            to="/shop/products"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-100 text-center -z-10 sticky top-0">
        <h2 className="text-3xl font-bold mb-12">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">🚚 Free Shipping</h3>
            <p className="text-gray-600">
              Get free shipping on orders over ₹999. Delivered fast, safe, and
              hassle-free.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">📞 24/7 Customer Support</h3>
            <p className="text-gray-600">
              Our dedicated team is always available to help you with your
              questions or issues.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">🔒 Secure Payments</h3>
            <p className="text-gray-600">
              All transactions are secured with top-grade encryption and trusted
              gateways.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">🔁 Easy Returns</h3>
            <p className="text-gray-600">
              Not happy with your purchase? Return it within 7 days, no
              questions asked.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">🏷️ Best Price Guarantee</h3>
            <p className="text-gray-600">
              We ensure you always get the best value for your money with
              unmatched prices.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">🛍️ Exclusive Deals</h3>
            <p className="text-gray-600">
              Get access to members-only offers and limited-time discounts every
              week.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">🌍 Nationwide Delivery</h3>
            <p className="text-gray-600">
              We deliver to every corner of India – no city or village left
              behind.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">🧾 Transparent Billing</h3>
            <p className="text-gray-600">
              No hidden charges. You always see the complete breakdown of your
              order.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Products</h2>
        <input
          type="text"
          placeholder="Search products..."
          className="block mx-auto mb-6 px-4 py-2 border border-gray-400 rounded-lg w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border relative shadow-sm p-4 rounded-lg cursor-pointer"
              onClick={() => handleNavigate(product.id)}
            >
              {product.popular === true && (
                <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-md text-xs z-10">
                  🔥 Trending
                </span>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold mb-2 truncate">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {product.description.slice(0, 80)}...
              </p>
              <p className="font-bold text-indigo-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              text: "Amazing quality and fast delivery. Highly recommended!",
              name: "Ayesha R.",
            },
            {
              text: "Excellent support and return policy. Loved the experience.",
              name: "Rahul S.",
            },
            {
              text: "Wide range of products and unbeatable prices!",
              name: "Meena T.",
            },
          ].map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <p className="italic">“{review.text}”</p>
              <h4 className="mt-4 font-semibold">- {review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-8 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">
          Subscribe to our newsletter and never miss an update.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md w-72 text-black mb-4"
        />
        <br />
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-semibold hover:bg-indigo-100">
          Subscribe
        </button>
      </section>
    </div>
  );
};

export default Home;

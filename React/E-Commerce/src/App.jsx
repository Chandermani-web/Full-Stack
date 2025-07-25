import React, { useEffect } from 'react';
import Navbar from './Utils/Others/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Utils/Others/Footer.jsx';
import { Provider, useSelector } from 'react-redux';
import appStore from './Store/Store.js';

const CartSync = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return null;
};

const OrderSync = () => {
  const orderItems = useSelector((state) => state.order.orderItems);

  useEffect(() => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  }, [orderItems]);

  return null;
};

const App = () => {
  return (
    <Provider store={appStore}>
      <CartSync /> {/* Syncs cart with localStorage */}
      <OrderSync /> {/* Sync order with localstorage */}
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;

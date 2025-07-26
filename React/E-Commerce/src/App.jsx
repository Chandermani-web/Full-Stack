import React, { useEffect } from 'react';
import Navbar from './Utils/Others/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Utils/Others/Footer.jsx';
import { Provider } from 'react-redux';
import appStore from './Store/Store.js';
import { useSelector } from 'react-redux';

const SyncComponents = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderItems = useSelector((state) => state.order.orderItems);
  const historyItems = useSelector((state) => state.history.history);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  }, [orderItems]);

  useEffect(() => {
    localStorage.setItem("User_History", JSON.stringify(historyItems));
  }, [historyItems]);

  return null;
};

const App = () => {
  return (
    <Provider store={appStore}>
      <Navbar />
      <SyncComponents /> {/* All localStorage sync happens here */}
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;

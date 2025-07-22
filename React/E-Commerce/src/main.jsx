import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Navbar Routes
const Home = lazy(() => import("./Components/Home/Home.jsx"));
const Shop = lazy(() => import("./Components/Shop/Display/Display.jsx"));
const Purchase = lazy(() => import("./Components/Shop/Purchase/Purchase.jsx"));
const Order = lazy(() => import("./Components/Order/Order.jsx"));
const OrderProductDetail = lazy(() =>import("./Components/Order/OrderProductDetail.jsx"));
const Cart = lazy(() => import("./Components/Cart/Cart.jsx"));
const Menu = lazy(() => import("./Components/Menu/Menu.jsx"));
const Account = lazy(() => import("./Components/Menu/Components/Account.jsx"));
const Theme = lazy(() => import("./Components/Menu/Components/Theme.jsx"));
const History = lazy(() => import("./Components/Menu/Components/History.jsx"));
const Service = lazy(() => import("./Components/Menu/Components/Service.jsx"));
const Settings = lazy(() =>
  import("./Components/Menu/Components/Settings.jsx")
);
const Signup = lazy(() =>
  import("./Components/Registration/Signup/Signup.jsx")
);
const Login = lazy(() => import("./Components/Registration/Login/Login.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: "purchase",
            element: <Purchase />,
          },
        ],
      },
      {
        path: "order",
        element: <Order />,
        children: [
          {
            path: "productdetail",
            element: <OrderProductDetail />,
          },
        ],
      },
      {
        path: "menu",
        element: <Menu />,
        children: [
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "theme",
            element: <Theme />,
          },
          {
            path: "history",
            element: <History />,
          },
          {
            path: "service",
            element: <Service />,
          },
          {
            path: "setting",
            element: <Settings />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "registration",
        children: [
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="h-[90vh] w-full flex justify-center items-center content-center">
          <h1 className="text-gray-800 text-4xl text-shadow-blue-600 capitalize">
            Loading...
          </h1>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import  from "./components/Header/Header.tsx";
// import About from "./Pages/About/About.tsx";
// import Contact from "./Pages/Contact/Contact.tsx";
import Home from "./Pages/home.jsx";
import Cart from "./Pages/cart.jsx";
import Product from "./Pages/product.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

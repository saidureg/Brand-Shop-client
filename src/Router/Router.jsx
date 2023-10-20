import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddProduct from "../pages/AddProduct/AddProduct";
import Brand from "../pages/Brand/Brand";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import MyCart from "../pages/MyCart/MyCart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://brand-shop-server-beta-eight.vercel.app/brands"),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRouter>
            <AddProduct />
          </PrivateRouter>
        ),
      },
      {
        path: "/brands/:brandName",
        element: <Brand />,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-beta-eight.vercel.app/brands/${params.brandName}`
          ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRouter>
            <ProductDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-beta-eight.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRouter>
            <UpdateProduct />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-beta-eight.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRouter>
            <MyCart />
          </PrivateRouter>
        ),
        loader: () =>
          fetch("https://brand-shop-server-beta-eight.vercel.app/carts"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Router;

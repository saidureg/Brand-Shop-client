import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddProduct from "../pages/AddProduct/AddProduct";
import Brand from "../pages/Brand/Brand";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/brands/:brandName",
        element: <Brand />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.brandName}`),
      },
    ],
  },
]);

export default Router;

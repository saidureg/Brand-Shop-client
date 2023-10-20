import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Cart from "../../components/Cart/Cart";
import LeftSideNavbar from "../../components/LeftSideNavbar/LeftSideNavbar";
import { useState } from "react";

const MyCart = () => {
  const loadCarts = useLoaderData();
  const [carts, setCarts] = useState(loadCarts);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-3 my-12">
        <div className="md:col-span-2 lg:col-span-1">
          <LeftSideNavbar />
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {carts.map((cart) => (
              <Cart
                key={cart._id}
                carts={carts}
                setCarts={setCarts}
                cart={cart}
              ></Cart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

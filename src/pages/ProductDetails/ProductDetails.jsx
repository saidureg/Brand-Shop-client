import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import { useState } from "react";
import swal from "sweetalert";

const ProductDetails = () => {
  const product = useLoaderData();
  const [count, setCount] = useState(1);
  const { name, brandName, photo, rating, price, type, description } = product;

  const handleAddCart = () => {
    console.log("button clicked");
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "Product is added to cart successfully!",
            icon: "success",
            button: "Great",
          });
        }
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-2 mb-8">
        <div className="relative flex w-full lg:w-1/2 flex-col rounded-xl mt-2">
          <div className="relative overflow-hidden rounded-xl px-4">
            <img
              src={photo}
              alt={name}
              className="h-full w-full md:w-1/2 lg:w-full mx-auto object-cover rounded-xl"
            />
          </div>
          <div className="px-10 py-3 md:px-24 lg:px-5">
            <p className="mb-8 block text-base font-normal leading-relaxed text-gray-700 antialiased">
              {description}
            </p>
          </div>
        </div>
        <div className="w-3/4 mx-auto lg:w-1/3 lg:mt-20">
          <div className="p-3 space-y-7">
            <h4 className="mb-2 block text-xl md:text-3xl font-semibold leading-snug tracking-normal text-gray-900 antialiased">
              {name}
            </h4>
            <div className="flex items-center gap-5">
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-2xl">
                {rating} <span className="text-sm">out of 5.0</span>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-2 cursor-pointer">
                <AiOutlineHeart />
                <span className="text-gray-300 font-bold hover:transition-colors hover:duration-700 ease-in-out hover:text-gray-500">
                  Add to wishlist
                </span>
              </p>
              <p className="flex items-center gap-2 cursor-pointer">
                <GoGitCompare />
                <span className="text-gray-300 font-bold hover:transition-colors hover:duration-700 ease-in-out hover:text-gray-500">
                  Add to compare
                </span>
              </p>
            </div>
            <p className="text-xl mt-2 text-gray-400 flex gap-24 ">
              Brand
              <span className="text-gray-400 font-bold hover:transition-colors hover:duration-1000 ease-in-out hover:text-[#ff881e] cursor-pointer">
                {brandName}
              </span>
            </p>
          </div>
          <div className="border border-[#ff881e] opacity-40"></div>
          <div className="p-3 space-y-7">
            <p className="text-xl mt-2 text-gray-400 flex gap-24">
              Price
              <span className="text-[#ff881e] font-bold ml-5">
                $ {price}.00
              </span>
            </p>
            <p className="text-lg mt-2 text-gray-400 flex gap-24">
              Storage
              <span className="text-gray-700 font-bold border py-2 px-3 border-[#c1a26c]">
                {type === "Smartphone" ||
                type === "Laptop" ||
                type === "Tablet" ||
                type === "Mobile"
                  ? `${price > 350 ? "6/128GB" : "4/64GB"}`
                  : "Not Available"}
              </span>
            </p>
            <div className="text-xl mt-2 text-gray-400 flex gap-24 items-center ">
              Quantity
              <div className="flex gap-5 items-center">
                {count >= 1 && (
                  <button onClick={() => setCount(count - 1)} className="btn">
                    -
                  </button>
                )}
                <span className="text-gray-700"> {count}</span>
                <button onClick={() => setCount(count + 1)} className="btn">
                  +
                </button>
              </div>
            </div>
            <p className="text-xl p-3 mt-8 text-gray-700 flex gap-20">
              Total Price
              <span className="text-[#ff881e] font-bold">
                $ {price * count}.00
              </span>
            </p>
          </div>

          <div className="rounded p-3 my-4 space-y-3 text-center">
            <button
              onClick={handleAddCart}
              className="btn bg-[#ff881e] text-white hover:text-[rgb(47,48,47)] mr-3"
            >
              <BiShoppingBag className="text-xl" /> Add to cart
            </button>
            <button className="btn bg-[#e62e04] text-white hover:text-[rgb(47,48,47)]">
              <AiOutlineShoppingCart className="text-xl" /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

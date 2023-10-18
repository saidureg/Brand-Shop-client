import { AiOutlineShoppingCart } from "react-icons/ai";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/RjDgJzH/banner01.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-1 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Welcome to NexGen :
          </h1>
          <span className="text-sm text-green-300">
            Where Innovation Meets Excellence
          </span>
          <p className="my-5 text-lg font-medium">
            Explore the Future of Technology with NexGen - Your Trusted Source
            for Cutting-Edge Electronics.
          </p>
          <button className="btn border-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-violet-500 hover:to-pink-500">
            Buy Now{" "}
            <AiOutlineShoppingCart className="inline-block ml-1 text-2xl text-white font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

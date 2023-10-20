import PropTypes from "prop-types";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
const Cart = ({ cart }) => {
  const { _id, name, photo, price, type } = cart;
  const handleCartRemove = (id) => {};
  return (
    <div className="card bg-base-100 shadow-xl mx-6 md:mr-3 lg:mx-0">
      <figure className="px-6 pt-5">
        <img src={photo} alt="Shoes" className="rounded-xl w-4/6" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-gray-400 font-semibold">{type}</p>
        <p className="text-amber-500 font-bold text-lg">$ {price}.00</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <AiOutlineShoppingCart className="text-xl" /> Buy Now
          </button>
          <button
            onClick={() => handleCartRemove(_id)}
            className="btn btn-primary"
          >
            <AiOutlineDelete className="text-xl" /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default Cart;

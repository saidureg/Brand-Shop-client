import PropTypes from "prop-types";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import swal from "sweetalert";
const Cart = ({ cart, carts, setCarts }) => {
  const { _id, name, photo, price, type } = cart;

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Your selected product has been deleted!", {
                icon: "success",
              });
              const remaining = carts.filter(
                (singleCart) => singleCart._id !== _id
              );
              setCarts(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
          });
      } else {
        swal("Your selected product is safe!");
      }
    });
  };
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
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            <AiOutlineDelete className="text-xl" /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  carts: PropTypes.array.isRequired,
  setCarts: PropTypes.func.isRequired,
};

export default Cart;

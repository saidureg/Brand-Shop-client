import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brandName, photo, rating, price, type } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const updateProduct = {
      name,
      brandName,
      price,
      rating,
      photo,
      type,
    };

    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.modifiedCount) {
          swal({
            title: "Good job!",
            text: "Product is updated successfully!",
            icon: "success",
            button: "Great",
          });
        }
      });
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/8NzHtCx/Untitled-design.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content lg:w-3/5 mx-auto">
          <div className="card flex-shrink-0 w-full ">
            <h3 className="text-black text-center font-semibold text-3xl">
              Update Product
            </h3>
            <form onSubmit={handleUpdateProduct} className="card-body">
              {/* name and brand name */}
              <div className="flex flex-col md:flex-row gap-2">
                <div className="form-control grow">
                  <label className="label">
                    <span className="label-text text-neutral-content">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={name}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control grow">
                  <label className="label">
                    <span className="label-text text-neutral-content">
                      Brand Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Brand Name"
                    name="brandName"
                    defaultValue={brandName}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* price and Rating */}
              <div className="flex flex-col md:flex-row gap-2">
                <div className="form-control grow">
                  <label className="label">
                    <span className="label-text text-neutral-content">
                      Price
                    </span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Price"
                    name="price"
                    defaultValue={price}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control grow">
                  <label className="label">
                    <span className="label-text text-neutral-content">
                      Rating
                    </span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Rating"
                    name="rating"
                    defaultValue={rating}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-neutral-content">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  defaultValue={photo}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-neutral-content">
                    Type of the Product
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Product types will be Smartphone, laptop, headphone, etc."
                  name="type"
                  defaultValue={type}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error text-lg hover:text-xl hover:bg-opacity-90">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;

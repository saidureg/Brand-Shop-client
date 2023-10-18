import Navbar from "../../components/Header/Navbar";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const description = form.description.value;
    const product = {
      name,
      brandName,
      price,
      rating,
      photo,
      type,
      description,
    };
    console.log(product);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error occurred while adding product");
      });
  };
  return (
    <div>
      <Navbar />
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
              Add Product
            </h3>
            <form onSubmit={handleAddProduct} className="card-body">
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
                  placeholder="Product types will be mobile, laptop, headphone, etc."
                  name="type"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* short description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-neutral-content">
                    Description
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Write a short description about you product"
                  name="description"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

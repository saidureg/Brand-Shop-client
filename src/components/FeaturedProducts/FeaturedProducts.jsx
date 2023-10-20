const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-3 lg:mx-0">
      <div className="card bg-base-100 shadow-xl mx-6 md:mr-3 lg:mx-0">
        <figure className="px-6 pt-5">
          <img
            src="https://i.ibb.co/R2LVsMF/i-Phone-14-Pro.png"
            alt="i-Phone-14-Pro"
            className="rounded-xl w-4/6 h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">iPhone 14 Pro Max</h2>
          <p className="text-gray-500 font-bold text-lg">$ 799.00</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mx-6 md:mr-3 lg:mx-0">
        <figure className="px-6 pt-5">
          <img
            src="https://i.ibb.co/6sktBfP/One-Plus-10-Pro.png"
            alt="i-Phone-14-Pro"
            className="rounded-xl w-4/6 h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">OnePlus 10 Pro</h2>
          <p className="text-gray-500 font-bold text-lg">$ 799.00</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mx-6 md:mr-3 lg:mx-0">
        <figure className="px-6 pt-5">
          <img
            src="https://i.ibb.co/CW9ZVP5/Vivo-X60-Pro.png"
            alt="i-Phone-14-Pro"
            className="rounded-xl w-4/6 h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Vivo X60 Pro+</h2>
          <p className="text-gray-500 font-bold text-lg">$ 399.00</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mx-6 md:mr-3 lg:mx-0">
        <figure className="px-6 pt-5">
          <img
            src="https://i.ibb.co/7GfxKgg/Dell-XPS-13.png"
            alt="i-Phone-14-Pro"
            className="rounded-xl w-4/6 h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dell XPS 13</h2>
          <p className="text-gray-500 font-bold text-lg">$ 1299.00</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

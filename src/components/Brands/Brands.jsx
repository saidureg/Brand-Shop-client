import PropTypes from "prop-types";
const Brands = ({ brand }) => {
  const { brandName, photo } = brand;
  return (
    <div className="flex flex-col justify-center items-center border">
      <figure className="">
        <img className="w-[100px] p-3" src={photo} alt={brandName} />
      </figure>
      <div className="">
        <h2 className="my-5">{brandName}</h2>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Brands;

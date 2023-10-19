import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/Brands/BrandCard";

const Brand = () => {
  const brands = useLoaderData();

  return (
    <div>
      <h3>Slider on that brand</h3>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3 lg:mx-0">
          {brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;

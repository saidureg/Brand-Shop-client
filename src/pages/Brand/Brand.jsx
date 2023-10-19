import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import BrandCard from "../../components/Brands/BrandCard";

const Brand = () => {
  const { brandName } = useParams();
  const brands = useLoaderData();
  console.log(brandName);
  console.log(brands);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      <h3>Slider on that brand</h3>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:mx-0">
          {brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;

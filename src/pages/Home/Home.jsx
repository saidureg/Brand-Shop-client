import { useLoaderData } from "react-router-dom";
import Brands from "../../components/Brands/Brands";
import Banner from "../../components/Header/Banner";
import Navbar from "../../components/Header/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      <Banner></Banner>

      <div className="max-w-screen-xl mx-auto mb-10">
        <h3 className="text-[#E2DAA7] text-center text-5xl my-10">
          All Brands
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand) => (
            <Brands key={brand._id} brand={brand}></Brands>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

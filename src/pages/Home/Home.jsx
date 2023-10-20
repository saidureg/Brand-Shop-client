import { useLoaderData } from "react-router-dom";
import Brands from "../../components/Brands/Brands";
import Banner from "../../components/Header/Banner";
import Navbar from "../../components/Header/Navbar";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  const brands = useLoaderData();

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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-3 lg:mx-0">
          {brands.map((brand) => (
            <Brands key={brand._id} brand={brand}></Brands>
          ))}
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mb-10">
        <h3 className="text-[#E2DAA7] text-center text-5xl my-10">
          Featured Products
        </h3>
        <FeaturedProducts />
      </div>
      <div className="max-w-screen-xl mx-auto mb-10">
        <h6 className="text-gray-400 text-center text-sm mt-10">
          Reviewed by client
        </h6>
        <h3 className="text-gray-800 text-center text-lg lg:text-3xl my-5 mx-3 md:mx-0">
          Discover What Our Clients Say About Us
        </h3>
        <p className="text-gray-600 mb-4 text-center w-3/4 mx-auto">
          Heres what our valued clients have to say about their experiences with
          us. Their words reflect the dedication and expertise we bring to every
          project, ensuring your satisfaction and success.
        </p>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;

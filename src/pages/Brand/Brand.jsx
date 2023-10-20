import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/Brands/BrandCard";
import Navbar from "../../components/Header/Navbar";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const Brand = () => {
  const brands = useLoaderData();

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      {/*start slider */}
      <div>
        <div className="carousel w-full max-h-[80vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={slider1} className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-gray-800 opacity-30"></div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="text-white my-12 lg:my-16">
                ❮
              </a>

              <a href="#slide2" className="text-white my-12 lg:my-16">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={slider2} className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-gray-800 opacity-50"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="text-white my-12 lg:my-16">
                ❮
              </a>
              <a href="#slide3" className="text-white my-12 lg:my-16">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={slider3} className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-gray-800 opacity-60"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="text-white my-12 lg:my-16">
                ❮
              </a>

              <div className="text-white text-center">
                <h3 className=" text-2xl lg:text-5xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#AFB6C1]">
                  OnePlus 11{" "}
                  <sup className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#AFB6C1] text-xl lg:text-3xl">
                    5G
                  </sup>
                </h3>
                <h3 className=" text-2xl  lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-amber-100">
                  The shape of Power
                </h3>
                <div className="flex justify-around mt-5">
                  <div>
                    <p className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#AFB6C1]">
                      $ 549
                    </p>
                    <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-white">
                      8 + 128 GB
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#AFB6C1]">
                      $ 649
                    </p>
                    <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-white">
                      16 + 256 GB
                    </p>
                  </div>
                </div>
              </div>

              <a href="#slide1" className="text-white my-12 lg:my-16">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*end slider */}
      <div className="max-w-screen-xl mx-auto my-10">
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

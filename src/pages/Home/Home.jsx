import Banner from "../../components/Header/Banner";
import Navbar from "../../components/Header/Navbar";

const Home = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      <Banner></Banner>
      <h3 className="text-[#E2DAA7] ">Home</h3>
    </div>
  );
};

export default Home;

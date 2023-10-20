import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../assets/secure_login.png";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import { AuthContext } from "../../provider/AuthProvide";
import { GoogleAuthProvider } from "firebase/auth";
import Navbar from "../../components/Header/Navbar";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return swal("Oops!", "Please Provide a valid email", "error");
    }
    e.target.reset();
    signIn(email, password)
      .then(() => {
        toast("You have successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        return swal("Oops!", error.message, "error");
      });
  };

  const googleProvide = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleLogin(googleProvide)
      .then(() => {
        toast("You have successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        return swal("Oops!", error.message, "error");
      });
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="rounded-lg" src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#7B014C]/80">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-white text-black hover:text-xl hover:scale-105">
                  Login
                </button>
              </div>
              <div>
                <p className="text-white flex items-center gap-3 mt-5">
                  Login with
                  <span
                    onClick={handleGoogleSignIn}
                    className=" hover:text-xl ml-2 hover:opacity-70 btn flex items-center gap-2"
                  >
                    <FcGoogle className="text-lg" /> Google
                  </span>
                </p>
              </div>
              <p className="text-white mt-3">
                Already have account?
                <Link to="/register">
                  <button className="text-xl hover:text-2xl ml-2 hover:opacity-60 hover:underline">
                    Register
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

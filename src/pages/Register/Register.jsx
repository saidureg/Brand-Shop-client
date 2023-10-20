import { useContext } from "react";
import swal from "sweetalert";
import registerImg from "../../assets/Access_account.png";
import { AuthContext } from "../../provider/AuthProvide";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import Navbar from "../../components/Header/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      return swal(
        "Oops!",
        "Password should be at least 6 characters!",
        "error"
      );
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/.test(password)
    ) {
      return swal(
        "Oops!",
        "Password should be uppercase letter and special symbol!",
        "error"
      );
    }
    e.target.reset();
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast("Account created successfully");
            navigate("/");
          })
          .catch((error) => {
            return swal("Oops!", error.message, "error");
          });
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
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left ">
            <img className="rounded-lg" src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-[#7B014C]/10">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
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
                <button className="btn btn-primary hover:text-xl hover:scale-105">
                  Register
                </button>
              </div>
              <p className="mt-3">
                Already registered?
                <Link to="/login">
                  <button className="text-xl hover:text-2xl ml-2 hover:opacity-60 hover:underline">
                    Login
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

export default Register;

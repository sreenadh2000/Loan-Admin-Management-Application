import { useEffect, useState } from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Bank from "../Images/Bank.jpg";
import { NavLink } from "react-router-dom";

export default function AdminLog() {
  const [credentials, setcredentials] = useState({ emp_id: "", password: "" });
  const [realCredentials, setrealCredentials] = useState({
    emp_id: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/adminLog")
      .then((res) => {
        setrealCredentials({
          emp_id: res.data[0].admin_id,
          password: res.data[0].password,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    if (
      credentials.emp_id === realCredentials.emp_id &&
      credentials.password === realCredentials.password
    ) {
      navigate("/admin/customer");
    } else {
      console.log("NOT Valid");
      navigate("/");
    }
  };
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={Bank} className="img-fluid" alt="Bank" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="my-4">
                  <nav className="nav nav-pills nav-justified">
                    <NavLink
                      className="nav-link links"
                      to="/"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "#42A8B6" : "#CFEAEE",
                        };
                      }}
                    >
                      Admin
                    </NavLink>

                    <NavLink
                      className="nav-link links mx-2"
                      to="/user"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "#42A8B6" : "#CFEAEE",
                        };
                      }}
                    >
                      User
                    </NavLink>
                  </nav>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4 Text-Container">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid Admin Id"
                    value={credentials.emp_id}
                    onChange={(e) =>
                      setcredentials({ ...credentials, emp_id: e.target.value })
                    }
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Admin Id
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3 Text-Container">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e) =>
                      setcredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center Text-Container">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2 Log">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 foot">
          {/* <!-- Copyright --> */}
          <div className="text-white mb-3 mb-md-0">
            Loan Admin Management Application
          </div>
        </div>
      </section>
    </>
  );
}


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAdminRegisterMutation } from "../../slices/adminApiSlice";
import { setCredentials } from "../../slices/adminAuthSlice";
import { toast } from "react-toastify";
import "./AdminRegisterScreen.css";

const AdminRegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminRegistrationKey: "",
  });

  const { name, email, password, confirmPassword, adminRegistrationKey } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adminInfo } = useSelector((state) => state.adminAuth);
  const [register, { isLoading }] = useAdminRegisterMutation();

  useEffect(() => {
    if (adminInfo) {
      navigate("/admin");
    }
  }, [navigate, adminInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
    } else {
      try {
        const response = await register({ name, email, password, adminRegistrationKey }).unwrap();
        dispatch(setCredentials({ ...response }));
        navigate("/admin");
      } catch (err) {
        toast.error(err?.data?.message || err?.error);
      }
    }
  };

  return (
    <div className="register-screen">
      <div className="register-container">
        <h2 className="register-heading">Admin Registration</h2>
        <form onSubmit={submitHandler} className="register-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Admin Registration Code"
              name="adminRegistrationKey"
              value={adminRegistrationKey}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <button type="submit" className="register-button" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="register-footer">
          Already have an account?{" "}
          <Link to="/admin/login" className="register-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegisterScreen;

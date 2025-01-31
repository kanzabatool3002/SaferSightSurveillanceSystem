

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useAdminLoginMutation } from "../../slices/adminApiSlice";
import { setCredentials } from "../../slices/adminAuthSlice";
import { toast } from "react-toastify";
import "./LoginScreen.css"; // Ensure the CSS file is correctly imported

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useAdminLoginMutation();
  const { adminInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (adminInfo) {
      navigate("/admin");
    }
  }, [navigate, adminInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const responseFromApiCall = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...responseFromApiCall }));
      navigate("/admin");
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  return (
    <div className="login-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="login-card"
      >
        <div className="login-content">
          <h2 className="login-title">Admin Sign In</h2>
          <form onSubmit={submitHandler}>
            <div className="input-container">
            <Mail className="input-icon" style={{ color: 'black' }} />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
            </div>
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>
            {isLoading && (
              <div className="loading-spinner">
                <Loader className="spinner-icon" />
              </div>
            )}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="login-button"
              type="submit"
            >
              {isLoading ? <Loader className="button-loader" /> : "Sign In"}
            </motion.button>
          </form>
        </div>
        <div className="login-footer">
          <p>
            Have Admin registration access code?{" "}
            <Link to="/admin/register" className="signup-link">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginScreen;

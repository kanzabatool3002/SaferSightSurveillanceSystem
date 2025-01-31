import React, { useContext, useState } from "react";
import "../styles/Auth.css";
import { Context } from "../main.jsx";
import { Navigate } from "react-router-dom";
import RegisterScreen from "../screens/RegisterScreen.jsx";
import LoginScreen from "../screens/LoginScreen.jsx";

const Auth = () => {
  const { isAuthenticated } = useContext(Context);
  const [isLogin, setIsLogin] = useState(true);
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-toggle">
            <button
              className={`toggle-btn ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          {isLogin ? <LoginScreen /> : <RegisterScreen />}
        </div>
      </div>
    </>
  );
};

export default Auth;
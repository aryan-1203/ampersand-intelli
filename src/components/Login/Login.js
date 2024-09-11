import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    Cookies.set("isLoggedIn", "true", { expires: 1 }); // Expires in 1 day
    router.push("/"); // Redirect to home after successful login
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <img
          src="image/logo-white.png" // Replace with your actual logo path
          alt="Company Logo"
          className="login-logo"
        />
        <div className="text-icon-container">
      <img
        src="image/gradialLine.png" // Replace with the image you want to add
        alt="Icon"
        className="header-icon"
      />
      <div className="login-header-text">Ampersand Intelligence</div>
    </div>
      </header>
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-heading">Welcome back</h2>
          <p className="login-subtext">Please enter your details to sign in</p>

          <div className="login-input-container">
            <label htmlFor="username" className="login-label">
              Username
            </label>
            <div className="login-input-wrapper">
              <img
                src="image/UserOutline.png" // Replace with your actual user icon
                alt="Username Icon"
                className="login-input-icon"
              />
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="login-input"
              />
            </div>
          </div>

          <div className="login-input-container">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <div className="login-input-wrapper">
              <img
                src="image/tabler-icon-lock.png" // Replace with your actual lock icon
                alt="Password Icon"
                className="login-input-icon"
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="login-input"
              />
              <span className="login-password-toggle" onClick={togglePasswordVisibility}>
                <img
                  src={showPassword ? "image/eye-off.png" : "image/eye.png"} // Replace with your actual eye icon
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  className="login-password-toggle-icon"
                />
              </span>
            </div>
          </div>

          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
      <div>
            <img className="gradient" src="image/gradient.png" />
          </div>
      <footer className="login-footer">All rights reserved. Ampersand VC</footer>
    </div>
  );
};

export default LoginPage;

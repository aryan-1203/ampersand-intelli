import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useNavigate from React Router
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Simulate authentication process
    Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day
    router.push('/'); // Redirect to home after successful login
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <img
          src="image/logo-white.png" // Replace with your actual logo path
          alt="Company Logo"
          className="login-logo"
        />
        <div className="login-header-text">Ampersand Intelligence</div>
      </header>

      <div className="login-container">
        <div className="login-form">
          <h2 className="login-heading">Welcome Back!</h2>
          <p className="login-subtext">Please enter your details to sign in</p>

          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="login-input login-username"
          />

          <label htmlFor="password" className="login-label">
            Password
          </label>
          <div className="login-password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="login-input login-password"
            />
            <span
              className="login-password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>

      <footer className="login-footer">
        All rights reserved. Ampersand VC
      </footer>
    </div>
  );
};

export default LoginPage;

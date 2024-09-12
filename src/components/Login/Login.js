import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useEffect } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const validUsername = "aniket@ampvc.co";
    const validPassword = "welcome123";

    if (username === validUsername && password === validPassword) {
      Cookies.set("isLoggedIn", "true", {expires: 20 / 1440}); 
      router.push("/"); 
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };
  useEffect(() => {
    // Attach the event listener to the document when component mounts
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      // Clean up the event listener when component unmounts
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [username, password]);

  return (
    <div className="login-page">
      <div className="grain-container">
        <img id="grain" src="image/Rectangle.png" alt="Background Texture" />
      </div>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {errorMessage && (
            <div className="error-message" style={{ color: "red", marginTop: "10px", marginBottom:"10px" }}>
            {errorMessage}
          </div>
          )}

          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
      <div>
        <img className="gradient" src="image/gradient.png" />
      </div>
      <footer className="login-footer">All rights reserved. Ampersand</footer>
    </div>
  );
};

export default LoginPage;

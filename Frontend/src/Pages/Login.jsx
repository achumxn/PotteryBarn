import React, { useState } from "react";
import "../Styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  // LOGIN STATE
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // SIGNUP STATE
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ================= LOGIN =================
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${url}/auth/userLogin`, loginData);

      // store logged-in user (uid, name, email)
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful");
      navigate("/home");
    } catch (err) {
      setErrorMsg("Invalid email or password");
    }
  };

  // ================= SIGNUP =================
  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    try {
      await axios.post(`${url}/user/addUser`, {
        name: signupData.name,
        email: signupData.email,
        password: signupData.password,
      });

      alert("Account created. Please login.");
      setIsSignup(false);
      setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
      setErrorMsg("");
    } catch (err) {
      setErrorMsg("Email already exists");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{isSignup ? "Sign Up" : "Login"}</h2>

        {!isSignup && (
          <div className="auth-view">
            <label>Email</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />

            <label>Password</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />

            {errorMsg && <p className="error-text">{errorMsg}</p>}

            <button className="auth-btn" onClick={handleLogin}>Login</button>

            <p className="switch-text">
              Don’t have an account?
              <span onClick={() => setIsSignup(true)}> Sign Up</span>
            </p>
          </div>
        )}

        {isSignup && (
          <div className="auth-view">
            <label>Name</label>
            <input
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />

            <label>Email</label>
            <input
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />

            <label>Password</label>
            <input
              type="password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              value={signupData.confirmPassword}
              onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
            />

            {errorMsg && <p className="error-text">{errorMsg}</p>}

            <button className="auth-btn" onClick={handleSignup}>
              Create Account
            </button>

            <p className="switch-text">
              Already have an account?
              <span onClick={() => setIsSignup(false)}> Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

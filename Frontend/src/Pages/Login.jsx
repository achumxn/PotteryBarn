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

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${url}/auth/userLogin`, loginData);

            console.log("LOGIN SUCCESS:", res.data);

            // 👉 Save to localStorage
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("Login Successful");
            navigate("/home");

        } catch (err) {
            console.error(err);
            alert("Invalid Credentials");
        }
    };

    const handleSignup = async () => {
        // console.log("Signup Data:", signupData);
        // you will add API call later
        if (signupData.password === signupData.confirmPassword) {
            try {
                const res = axios.post(`${url}/user/addUser`, signupData);
                console.log("SignUp Data :", signupData);
                setSignupData({
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
            setIsSignup(false);

            } catch (error) {
                console.log(error);
                alert("Login Failed");
            }
        } else {
            setErrorMsg("Passwords do not match");
        }
    };

    return (
        <>
            <div className="auth-container">
                <div className="auth-box">

                    <h2 className="auth-title">
                        {isSignup ? "Sign Up" : "Login"}
                    </h2>

                    {/* LOGIN VIEW */}
                    {!isSignup && (
                        <div className="auth-view">

                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={loginData.email}
                                onChange={(e) =>
                                    setLoginData({ ...loginData, email: e.target.value })
                                }
                            />

                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={loginData.password}
                                onChange={(e) =>
                                    setLoginData({ ...loginData, password: e.target.value })
                                }
                            />

                            <button className="auth-btn" onClick={handleLogin}>
                                Login
                            </button>

                            <p className="switch-text">
                                Don’t have an account?
                                <span onClick={() => setIsSignup(true)}> Sign Up</span>
                            </p>

                        </div>
                    )}

                    {/* SIGNUP VIEW */}
                    {isSignup && (
                        <div className="auth-view">

                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter full name"
                                value={signupData.name}
                                onChange={(e) =>
                                    setSignupData({ ...signupData, name: e.target.value })
                                }
                            />

                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={signupData.email}
                                onChange={(e) =>
                                    setSignupData({ ...signupData, email: e.target.value })
                                }
                            />

                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={signupData.password}
                                onChange={(e) =>
                                    setSignupData({ ...signupData, password: e.target.value })
                                }
                            />

                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={signupData.confirmPassword}
                                onChange={(e) =>
                                    setSignupData({ ...signupData, confirmPassword: e.target.value })
                                }
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
        </>
    );
};

export default Login;

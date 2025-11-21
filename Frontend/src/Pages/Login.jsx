import React, { useState } from 'react';
import "../Styles/Login.css";

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);

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
                            <input type="email" placeholder="Enter email" />

                            <label>Password</label>
                            <input type="password" placeholder="Enter password" />

                            <button className="auth-btn">Login</button>

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
                            <input type="text" placeholder="Enter full name" />

                            <label>Email</label>
                            <input type="email" placeholder="Enter email" />

                            <label>Password</label>
                            <input type="password" placeholder="Enter password" />

                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm password" />

                            <button className="auth-btn">Create Account</button>

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

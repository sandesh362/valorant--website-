// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if already authenticated - if so, redirect immediately
  const isAuthenticated = localStorage.getItem("admin-auth") === "true";
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Dummy credentials – use real auth in production
    if (email === "teamfuryvalorant@gmail.com" && password === "hopeforteamfury") {
      localStorage.setItem("admin-auth", "true"); // Store as string "true"
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] font-sans px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#1A1A1A] w-[400px] h-[460px] p-8 rounded-xl shadow-[0_0_20px_rgba(255,70,85,0.3)] border border-[#FF4655] flex flex-col justify-between"
      >
        <h2 className="text-white text-3xl text-center font-extrabold tracking-wide mb-2">
          Admin Login
        </h2>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 rounded bg-[#2A2A2A] border border-[#FF4655] text-white focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 rounded bg-[#2A2A2A] border border-[#FF4655] text-white focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-red-400 mb-2 text-sm text-center">{error}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#FF4655] hover:bg-[#e03a47] text-white font-semibold py-2 rounded transition-all duration-300"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

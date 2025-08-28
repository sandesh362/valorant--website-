// src/pages/AdminLogin.jsx

import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // ⬅️ IMPORT FIREBASE AUTH

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(); // ⬅️ GET THE AUTH SERVICE

  // Check if already authenticated via Firebase session, not localStorage
  const isAuthenticated = auth.currentUser;
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = async (e) => { // ⬅️ MAKE IT ASYNC
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true); // Set loading state

    try {
      // Sign in with Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      
      // If successful, Firebase automatically creates a session.
      // The admin.jsx component's onAuthStateChanged listener will detect this.
      localStorage.setItem("admin-auth", "true"); // Still set your custom local storage item if needed
      navigate("/admin");
    } catch (err) {
      // Handle Firebase authentication errors
      console.error("Firebase Login Error:", err);
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
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
          {loading ? 'Logging In...' : 'LOGIN'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
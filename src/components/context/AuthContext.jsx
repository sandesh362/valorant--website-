import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("adminUser"));
  });

  const login = (email, password) => {
    // Dummy login
    if (email === "admin@gmail.com" && password === "admin123") {
      const user = { email };
      localStorage.setItem("adminUser", JSON.stringify(user));
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("adminUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Add this:
export const useAuth = () => useContext(AuthContext);

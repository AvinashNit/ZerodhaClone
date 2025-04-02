import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    try {
      const response = await axios.get("http://localhost:5000/protected", {
        withCredentials: true,
      });
      console.log("checkAuth response:", response.data);
      if (response.data.success) {
        setIsAuthenticated(true);
        setUser(response.data.user);
        localStorage.setItem("uuid", response.data.user.uuid);
        return true;
      }
      return false;
    } catch (err) {
      console.error("checkAuth error:", err.response?.status, err.response?.data);
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("uuid");
      return false;
    }
  };

  const login = async (credentials) => {
    try {
      const res = await axios.post("http://localhost:5000/login", credentials, {
        withCredentials: true,
      });
      console.log("Login response:", res.data);
      if (res.data.success) {
        setIsAuthenticated(true);
        setUser({ username: credentials.username, uuid: res.data.uuid });
        localStorage.setItem("uuid", res.data.uuid);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Login error:", err.response?.data);
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("uuid");
      throw err;
    }
  };

  const signup = async (credentials) => {
    try {
      const res = await axios.post("http://localhost:5000/signup", credentials, {
        withCredentials: true,
      });
      console.log("Signup response:", res.data);
      if (res.data.success) {
        setIsAuthenticated(true);
        setUser({ username: credentials.username, uuid: res.data.uuid });
        localStorage.setItem("uuid", res.data.uuid);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Signup error:", err.response?.data);
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("uuid");
      throw err;
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/logout", {}, {
        withCredentials: true,
      });
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("uuid");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
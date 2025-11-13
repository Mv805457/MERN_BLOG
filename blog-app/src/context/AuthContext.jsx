import React, { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { _id, name, email, token }
  const navigate = useNavigate();

  // on load, if token exists fetch profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // try fetch profile
      (async () => {
        try {
          const { data } = await API.get("/users/profile");
          const obj = { ...data, token };
          setUser(obj);
          localStorage.setItem("user", JSON.stringify(obj));
        } catch {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
        }
      })();
    }
  }, []);

  const login = (userObj) => {
    // userObj must contain token and user fields
    localStorage.setItem("token", userObj.token);
    localStorage.setItem("user", JSON.stringify(userObj));
    setUser(userObj);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);


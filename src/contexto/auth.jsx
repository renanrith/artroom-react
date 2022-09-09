import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  //async
  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    console.log("login", { email, password });

    // api criando sessao
    const loggedUser = {
      id: "123",
      email,
    };
    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "ola") {
      setUser({ loggedUser });
      navigate("/home");
    }
  };
  const logout = () => {
    console.log("logout");
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

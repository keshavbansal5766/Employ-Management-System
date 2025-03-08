import React, { createContext, useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let employees = localStorage.getItem("employees");
    if (employees) {
      if (userData) {
        localStorage.setItem("employees", JSON.stringify(userData));
      } else {
        let data = JSON.parse(employees);
        setUserData(data);
      }
    } else {
      setLocalStorage();
      let data = JSON.parse(localStorage.getItem("employees"));
      setUserData(data);
    }

  }, [userData]);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;

import React, { createContext, useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees } = getLocalStorage();
    if (employees) {
      if (userData) {
        localStorage.setItem("employees", JSON.stringify(userData));
      } else {
        setUserData(employees);
      }
    } else {
      setLocalStorage();
      setUserData(employees)
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

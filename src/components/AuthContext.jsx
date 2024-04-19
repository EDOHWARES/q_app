import React from 'react';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);

    const login = () => {
        setAuthenticated(true);
    }

  return (
    <AuthContext.Provider value={{authenticated, login}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);

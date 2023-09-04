//create react auth context

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({"id":1, "name":"Matt Favela", "role":"advisor"});
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(true); //for development
    
    if (loading) {
        return <></>;
    }
    
    return (
        <AuthContext.Provider value={{ currentUser, isAuthenticated }}>
        {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
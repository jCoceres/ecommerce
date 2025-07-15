import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');
    
    if (storedToken && storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {

      const res = await fetch('/data/users.json');
      const users = await res.json();
      
      const foundUser = users.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error('Credenciales inválidas');
      }


      const token = `fake-token-${foundUser.email}-${Date.now()}`;
      

      localStorage.setItem('authToken', token);
      localStorage.setItem('authUser', JSON.stringify(foundUser));
      

      setUser(foundUser);
      setIsAuthenticated(true);
      
      toast.success(`¡Bienvenido, ${foundUser.email}!`);
      return { success: true, user: foundUser };
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Error al iniciar sesión');
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setUser(null);
    setIsAuthenticated(false);
    toast.info('Sesión cerrada exitosamente');
  };


  const hasRole = (role) => {
    return user?.role === role;
  };


  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    hasRole,
    getToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 
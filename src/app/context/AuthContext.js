import { createContext, useContext, useState } from 'react';
import { loginUser, registerUser } from '@/lib/api'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const login = async (email,password) => {
    setLoading(true);
    try {
      const data = await loginUser(email,password);
      setUser({ email, token: data.token });
      setError(null);
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  
  const register = async (email, password) => {
    setLoading(true);
    try {
      const data = await registerUser(email, password);
      setUser({ email, token: data.token }); 
      setError(null);
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };


  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

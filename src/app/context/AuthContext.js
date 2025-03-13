import { createContext, useContext, useState } from 'react';
import { loginUser, registerUser } from '@/lib/api'; 
import axios from 'axios';

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
  const forgotPassword = async (email) => {
    try {
      setLoading(true);
      console.log("Sending forgot password request for:", email);
  
      const response = await axios.post(
        "https://06p1dxq3c5.execute-api.us-east-1.amazonaws.com/dev/auth/forgotPassword",
        { email }
      );
  
      console.log("Password reset response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Forgot password error:", error?.response?.data || error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <AuthContext.Provider value={{ user, error, loading,forgotPassword, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

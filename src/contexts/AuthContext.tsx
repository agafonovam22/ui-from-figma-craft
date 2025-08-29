import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserData {
  userType: 'buyer' | 'dealer';
  fullName: string;
  email: string;
  phone: string;
  registrationDate: string;
  isLoggedIn: boolean;
}

interface AuthContextType {
  user: UserData | null;
  isLoading: boolean;
  login: (userData: UserData) => void;
  logout: () => void;
  updateUser: (userData: Partial<UserData>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user data on app load
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      try {
        const userData = JSON.parse(savedUserData);
        if (userData.isLoggedIn) {
          setUser(userData);
        }
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('userData');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: UserData) => {
    const userDataWithLogin = { ...userData, isLoggedIn: true };
    setUser(userDataWithLogin);
    localStorage.setItem('userData', JSON.stringify(userDataWithLogin));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  const updateUser = (updatedData: Partial<UserData>) => {
    if (user) {
      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      localStorage.setItem('userData', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
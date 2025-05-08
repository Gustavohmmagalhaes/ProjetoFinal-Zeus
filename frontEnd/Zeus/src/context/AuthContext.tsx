import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  resetEmail: string;
  setResetEmail: (email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [resetEmail, setResetEmail] = useState(() => sessionStorage.getItem('resetEmail') || '');

  useEffect(() => {
    sessionStorage.setItem('resetEmail', resetEmail);
  }, [resetEmail]);

  return (
    <AuthContext.Provider value={{ resetEmail, setResetEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

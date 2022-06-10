import React from 'react';
import { useLocation } from "react-router-dom";
import './App.css';
import Content from './content';
import { AuthProvider, useAuth } from "./contexts/auth";
import Login from './pages/login/login';

const CheckAuthentication = () => {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return <Content user={user} />;
};

const App = () => {

  const { pathname } = useLocation();
  // console.log(user);

  React.useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <AuthProvider>
      <CheckAuthentication />
    </AuthProvider>
  )


};

export default App;

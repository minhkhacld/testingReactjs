import React, {
  createContext, useCallback, useContext, useState
} from "react";
import { LoginApi } from "../api/auth";


function AuthProvider(props) {
  const [user, setUser] = useState();

  const signIn = useCallback(async (email, password) => {
    const result = await LoginApi(email, password);
    // console.log(result);
    if (result.isOK) {
      setUser(result.data);
    }
    return result;
  }, []);

  const signOut = useCallback(() => {
    setUser();
    //  window.localStorage.removeItem('username')
    function delete_cookie(name) {
      document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    delete_cookie("user");

  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut }}
      {...props}
    />
  );
}

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

import React, { createContext, useEffect, useState } from 'react';
import IAuthProvider, { IContext, IUser } from './types';
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate (username: string, password: string) {
    console.log(username, password)
    const res = await loginRequest(username, password);
    console.log(res)
    const token = res.authenticated.token;
    const usrname = res.authenticated.username;

    setUser({ token, usrname });
    setUserLocalStorage({ token, usrname });
  }

  function logout(){
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{...user, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
import React from 'react'
import { useState, createContext } from 'react';

const AuthContext = createContext();

const ProvideAuth = ({children}) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
    const [isAuth, setIsAuth] = useState(!!sessionStorage.getItem('token'))
  
    const signin = ({user, token}) => {
        setUser(user);
        sessionStorage.setItem('token', "Bearer "+ token)
        sessionStorage.setItem('user', JSON.stringify(user))
        setIsAuth(true)
      };
    
  
    const signout = () => {
        setUser({});
        setIsAuth(false)
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("user")
      };
    
  
      return (
        <AuthContext.Provider value={{user, signin, signout, isAuth}}>
          {children}
        </AuthContext.Provider>
      )
}

export {AuthContext, ProvideAuth};

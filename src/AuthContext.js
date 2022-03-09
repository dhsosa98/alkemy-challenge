import React from 'react'
import { useState, createContext } from 'react';

const AuthContext = createContext();

const ProvideAuth = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))
  
    const signin = ({user, token}) => {
        setUser(user);
        localStorage.setItem('token', "Bearer "+ token)
        localStorage.setItem('user', JSON.stringify(user))
        setIsAuth(true)
      };
    
  
    const signout = () => {
        setUser({});
        setIsAuth(false)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
      };
    
  
      return (
        <AuthContext.Provider value={{user, signin, signout, isAuth}}>
          {children}
        </AuthContext.Provider>
      )
}

export {AuthContext, ProvideAuth};

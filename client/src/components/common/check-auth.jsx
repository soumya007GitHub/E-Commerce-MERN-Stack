import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({isAuthenticated, user, children}) => {
    const location  = useLocation();
    if(!isAuthenticated && !(location.pathname.includes('/auth') || location.pathname.includes("/register"))){
        return <Navigate to="/auth"/>
    }
    if(isAuthenticated && location.pathname.includes("/auth") || location.pathname.includes("/register")){
        if(user?.role === 'admin'){
            return <Navigate to="/admin"/>
        }
        return <Navigate to="/shop"/>
    }
    if(isAuthenticated && user?.role !== 'admin' && location.pathname.includes("admin")){
        return <Navigate to="/unauthpage" />
    }
    if(isAuthenticated && user?.role === 'admin' && location.pathname.includes("shop")){
        return <Navigate to="/unauthpage" />
    }

  return children;
}

export default CheckAuth;
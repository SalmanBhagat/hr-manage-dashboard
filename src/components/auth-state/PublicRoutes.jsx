
import { AuthProvider, useAuth } from '@/context/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {
  
    console.log(children);
    
    const {user, loading} = useAuth();

    // console.log(user);
    
    if (loading) {
        return <div>Loading...</div>
    }
    console.log(user);

    if (!user) {
        return children
    } else{
        return <Navigate to="/home"/>
    }
  
}

export default PublicRoutes

import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();

    console.log(user); 
    
    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        return <Navigate to="/login"/>
    } else{
        return children
    }
  
}

export default PrivateRoutes
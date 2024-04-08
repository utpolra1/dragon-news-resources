import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate,useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user}=useContext(authContext);

    const location=useLocation();

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;
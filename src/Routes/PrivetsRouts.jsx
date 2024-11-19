import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loadin from '../Pages/Loadin';

const PrivetsRouts = ({ children }) => {
    const { user ,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return  <Loadin></Loadin>
    }
    if (user && user.email) {
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'} />
};

export default PrivetsRouts;




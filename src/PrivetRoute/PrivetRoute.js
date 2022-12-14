import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LingoAuthContext } from '../Context/UserContext';

const PrivetRoute = ({children}) => {
    const {user} = useContext(LingoAuthContext);
    const location = useLocation();
   if(user && user?.uid){
    return children;
   }else{
   return <Navigate to="/login" state={{from:location}} replace></Navigate>
   }
};

export default PrivetRoute;
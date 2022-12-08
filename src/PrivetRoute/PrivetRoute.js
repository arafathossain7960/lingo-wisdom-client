import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LingoAuthContext } from '../Context/UserContext';

const PrivetRoute = ({children}) => {
    const {user} = useContext(LingoAuthContext);
   if(user && user?.uid){
    return children;
   }else{
    <Navigate to="/login"></Navigate>
   }
};

export default PrivetRoute;
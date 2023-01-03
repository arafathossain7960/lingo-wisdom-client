import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LingoAuthContext } from '../Context/UserContext';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(LingoAuthContext);
    const location = useLocation();
    if(loading){
        return <div className='text-center my-5'>Loading ... </div>
    }
   if(!user?.email && !user?.uid){
    return <Navigate to="/login" state={{from:location}} replace />

   }else{
   return  children;
   }
};

export default PrivetRoute;
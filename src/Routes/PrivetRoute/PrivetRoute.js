import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Context/ContextProvider';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation()

    if(loading){
        return <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </div>
    }

    if(!user){
        return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>
    }

    return children
};

export default PrivetRoute;
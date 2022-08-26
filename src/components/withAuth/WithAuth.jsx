import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const WithAuth = ({ children }) => {
    // const { isAuth } = JSON.parse(localStorage.getItem('user'))
    const { isAuth } = useSelector((state) => state.authStore);
    
    if (isAuth) {
        return <> {children} </>
    } return <Navigate to="/login" />;
}

export default WithAuth

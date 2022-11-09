import React from 'react';
import {Link} from 'react-router-dom'

const Modal = () => {
    return (
        <div className=' App'>
            <h1 className=' my-3'>Please login to add a review. </h1>
            <Link to="/login" className='btn btn-secondary'>Login</Link>
            
        </div>










    );
};

export default Modal;
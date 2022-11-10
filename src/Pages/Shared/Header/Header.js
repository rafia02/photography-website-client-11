import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Context/ContextProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const {user, logout} = useContext(AuthContex)

    const handleLogout =(e)=>{
        e.preventDefault()
        logout()
        .then(()=>{
            toast.success('Successfully logout') 
        })
        .catch(e =>console.error(e))
      }


    const navmanue =<>
        <Link className='font-bold mr-4' to="/"><li>Home</li></Link>
        <Link className='font-bold mr-4' to="services"><li>Services</li></Link>
        <Link className='font-bold mr-4' to="blog"><li>Blog</li></Link>
       
        {
            user?.email ? 
            <>
                <Link className='font-bold mr-4' to="myreview"><li>My Review</li></Link>
                <Link className='font-bold mr-4' to="addservice"><li>Add Service</li></Link>
                <Link onClick={handleLogout} className='font-bold mr-4'><li>signout</li></Link>
            </>
            

            :   <Link className='font-bold mr-4' to="login"><li>Login</li></Link>
        }
    </>


     




    return (
        <div className="navbar mt-2 mb-5 shadow-md bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    
                    {navmanue}



                </ul>
                </div>
                <Link to="/">
                    <img className=' h-10 w-10 rounded-full' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photography-logo%2C-camera-logo%2C-modern-camera-design-template-61a629a6b006a5d93947e93c81f16ce4.jpg?ts=1660982220" alt="" />
                </Link>
                <h1 className="text-2xl font-bold ml-3">SRGRAPHY</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                

                    {navmanue}

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Buy service</a>
            </div>
        </div>
    );
};

export default Header;
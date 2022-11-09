import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Context/ContextProvider';
import toast from 'react-hot-toast';
import Usetitle from '../../Hook/Usetitle';

const Signup = () => {
    const {signup, userUpdateProfile} = useContext(AuthContex)
    const [errormessage, setErrormessage] = useState('')
    Usetitle("signup")

    const handleSignup = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value
        const photourl = form.photourl.value
        console.log(form ,name, email, password, ) 

        signup(email, password)
        .then(res =>{
            console.log(res.user)
            setErrormessage('')
            handleUpdatePhofile(name, photourl)
            toast.success('Successfully login') 
        })
        .catch(e=> {
            console.error(e)
            setErrormessage(e.message) 
        })
    }


    const handleUpdatePhofile =(name, img)=>{

        const objValue={
            displayName: name,
            photoURL:img
        }
        userUpdateProfile(objValue)
        .then((res)=>{
        })
        .catch((err)=>console.error(err))
    
    }
    


    return (
        <div className="hero  pt-10 pb-20 ">
            <div className="hero-content grid grid-cols-2 gap-6">
                <div className="text-center mr-5 lg:text-left">
                    <img className='w-3/4' src="https://img.freepik.com/free-vector/bank-login-concept-illustration_114360-7964.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center mt-4 font-bold">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photourl" placeholder="Photo Url" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <p className='text-center text-red-600'>{errormessage}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-primary' value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center pb-3'>Already have an account? <Link to="/login" className='font-bold text-blue-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Context/ContextProvider';
import Usetitle from '../../Hook/Usetitle';
import Spiner from '../Spiner/Spiner';

const Login = () => {

    const {googleSignin, login} = useContext(AuthContex)
    const [errormessage, setErrormessage] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    Usetitle("login")
    const [loding, setLoding] = useState()

    
    const handleLogin = (e)=>{
        setLoding(true)
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value


        login(email, password)
        .then(res =>{
            const user = res.user
            setErrormessage('')


            const currentUser = {
                email: user.email
            }


            console.log(currentUser)


            fetch('https://photography-ass-11-server.vercel.app/jwt',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                localStorage.setItem('token', data.token)
            })
            .catch(e => console.log(e))


            
            toast.success('Successfully login') 
            setLoding(false)

            navigate(from ,{replace: true})     
        })
        .catch(e =>{
            console.error(e)
            setErrormessage(e.message) 
        })

    }


    const handlegoogleSignin =()=>{
        setLoding(true)
        googleSignin()
        .then(res => {
            const user = res.user
            toast.success('Successfully login')
            setLoding(false)
            navigate(from ,{replace: true})
        })
        .catch(e=> {
            console.error(e)
        })
    }

    return (
     <div>
        {
                loding ? <Spiner></Spiner> : ''
            }
           <div className="hero  pt-10 pb-20 ">
            
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center mr-5 lg:text-left">
                    <img className='w-3/4' src="https://img.freepik.com/free-vector/bank-login-concept-illustration_114360-7964.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center mt-4 font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-center text-red-600'>{errormessage}</p>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-primary' value="Login" />
                        </div>

                        
                    </form>
                        <div onClick={handlegoogleSignin} className=" px-9 form-control mt-6">
                            <input type="submit" className='btn btn-outline btn-primary' value="Sign in with Google" />
                        </div>
                        
                    <p className='text-center py-3'>Do you have no account? <Link to="/signup" className='font-bold text-blue-600'>Sign Up</Link></p>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Login;
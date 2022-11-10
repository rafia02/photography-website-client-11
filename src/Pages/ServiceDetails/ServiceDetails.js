import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {Link, useLoaderData} from 'react-router-dom'
import { AuthContex } from '../../Context/ContextProvider';
import Usetitle from '../../Hook/Usetitle';
import Modal from '../Modal';
import Spiner from '../Spiner/Spiner';
import Review from './Review';

const ServiceDetails = () => {
    Usetitle('service-details')
    const {user } = useContext(AuthContex)
    const service = useLoaderData()
    const {_id, img, body, title} = service
    const [addreview, setAddreview] = useState([])
    const [revw, setRevw] = useState({})
    const [loding, setLoding] = useState()


  


         const handleAddReview =(e)=>{
            setLoding(true)
            e.preventDefault()    
     
                const message =  e.target.message.value 
                const name = user?.displayName 
                const img = user?.photoURL
                const email = user?.email
                console.log(message)
        
                const review ={
                    service_id: _id,
                    title,
                    name,
                    img,
                    message,
                    email
                }


                if(user.email){
                    fetch("http://localhost:5000/reviews",{
                        method: 'POST',
                        headers: {
                            'Content-type' : 'application/json'
                        },
                        body: JSON.stringify(review)
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.acknowledged){
                            e.target.reset()
        
                            setRevw(data)
                            const newReview = [...addreview, revw]
                            setAddreview(newReview)
                            setLoding(false)
                            toast.success('successfully added review')
                        }
                    })
                    .catch(e => console.error(e))
        
        
                }

                else{
                   return <Modal></Modal>
                }
    
         
        }





        useEffect(()=>{

        fetch(`http://localhost:5000/reviews/${_id}`)
        .then(res => res.json())
        .then(data =>{
            setAddreview(data)
  
        })
        .catch(e => console.error(e))
    }, [_id])

   console.log(addreview)


    return (
        <div>
            {
                loding ? <Spiner></Spiner> : ''
            }
            <div className='mt-10 mb-40'>
                <h1 className='text-5xl font-bold text-center font-mono my-8'>{title}</h1>
                <img className='h-96 w-full rounded mb-10 mx-auto' src={img} alt="" />
                <p className='text-center px-20'>{body}</p>

            </div>

            <div>
                <div>
                
                    <h1 className='text-4xl font-bold text-center my-8 font-mono'>Our Reviews</h1>
                    <div  className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                            {
                                addreview.map(rvw => <Review
                                key={rvw._id}
                                review={rvw}
                                ></Review> )
                            }
                    </div>
                </div>

              
                <div className='my-20 mx-auto w-3/4 shadow-xl p-12 bg-pink-50 rounded'>
                    <h1 className='text-center text-xl mb-3 text-pink-600 font-bold'>Add Your Review</h1>
                    <form onSubmit={handleAddReview} className='px-5'>

                        <div>
                            <textarea name="message" className="textarea w-full textarea-secondary" placeholder="Your Message" required></textarea>
                        </div>

                        {
                            user?.email ? 
                        <input type="submit" className='btn btn-secondary text-white font-bold w-full mt-3' value="Add" />
                            :
                            <Modal></Modal>
                        }

                       
                    </form>
                </div> 
            </div>

        </div>
    );
};

export default ServiceDetails;
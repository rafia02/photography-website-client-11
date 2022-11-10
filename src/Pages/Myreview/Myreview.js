import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContex } from '../../Context/ContextProvider';
import Spiner from '../Spiner/Spiner';
import MyreviewRow from './MyreviewRow';

const Myreview = () => {
    const {user} = useContext(AuthContex)
    const [reviews, setReviews] = useState([])
    const [loding, setLoding] = useState(true)



 
    useEffect(()=>{
     
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setReviews(data)
          setLoding(false)
        })
    }, [user?.email])






    const handleDelete =(id)=>{
        setLoding(true)
        console.log(id)
        fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{ 
            if(data.deletedCount > 0){
              const remaining =  reviews.filter(or=> or._id !== id)
                setReviews(remaining)
                toast.success('Sucessfully Deleted')
            }
            console.log(data)})
        
    }



    
    const handleUpdate = (id)=>{
        const agree = window.prompt('Update your review')
        console.log(agree)
       
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({message: agree})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(e => console.error(e))
        
    }






console.log(reviews)
    return (
        <div className=' my-20 '>


            {
                loding ? <Spiner></Spiner> : ''
            }

            <div className='mb-10 text-3xl text-center font-bold'>
                
                {
                reviews.length>0 ?
                    <h1>You have added {reviews.length} reviews</h1>
                    : "You have no reviews"

                }
            </div>

            <div>
                {
                    reviews.map(riv => <MyreviewRow
                    key={riv._id}
                    riv={riv}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    ></MyreviewRow>)
                }
            </div>
        </div>
    );
};

export default Myreview;
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContex } from '../../Context/ContextProvider';
import MyreviewRow from './MyreviewRow';

const Myreview = () => {
    const {user} = useContext(AuthContex)
    const [reviews, setReviews] = useState([])
  


 
    useEffect(()=>{
        fetch(`https://photography-ass-11-server.vercel.app/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setReviews(data)
      
        })
    }, [user?.email])






    const handleDelete =(id)=>{
        console.log(id)
        fetch(`https://photography-ass-11-server.vercel.app/reviews/${id}`,{
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
       
            fetch(`https://photography-ass-11-server.vercel.app/reviews/${id}`,{
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


            <div className='mb-10 text-3xl text-center font-bold'>
                
                {
                reviews.length>0 ?
                    <h1>You have added {reviews.length} reviews</h1>
                    : "You have no reviews"

                }
            </div>

            <div>
                {
                    reviews?.map(riv => <MyreviewRow
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
import React, { useEffect, useState } from 'react';
import SingleSvSvc from './SingleSvSvc';

const SaveService = () => {

    const [service, setService] = useState([])


     
    useEffect(()=>{
        fetch('http://localhost:5000/newservice')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setService(data)})
    }, [])


    return (
        <div className='grid my-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            
            {
                service.map(s => <SingleSvSvc
                key={s._id}
                ser={s}
                ></SingleSvSvc>)
            }
        </div>
    );
};

export default SaveService;
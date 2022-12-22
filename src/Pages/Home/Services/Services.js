import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import {Link} from 'react-router-dom'
import SaveService from '../SaveService/SaveService';
import Spiner from '../../Spiner/Spiner';

const Services = () => {
    const [loading, setLoading] = useState()
    
    const [services, setServices] = useState([])
    useEffect(()=>{
        setLoading(true)
        fetch('https://photography-ass-11-server.vercel.app/serviceslimit')
        .then(res =>res.json())
        .then(data => {
            setServices(data)
            setLoading(false)
        })
    },[])
    return (
        <div>
            {
                loading && <Spiner></Spiner>
            }
            <div  className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                services.map(service => <SingleService
                key={service._id}
                service={service}
                ></SingleService>)
            }
            </div>

            <SaveService></SaveService>
            
            <Link to="/services" className='justify-center my-10 flex'>
                <button className='btn text-lg font-bold btn-secondary btn-outline'>See All</button>
            </Link>

        </div>
    );
};

export default Services;
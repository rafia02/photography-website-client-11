import React, { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import Usetitle from '../../Hook/Usetitle';
import SaveService from '../Home/SaveService/SaveService';
import Spiner from '../Spiner/Spiner';
import AllSingleService from './AllSingleService';


const AllServices = () => {
    const [services, setServices] = useState([])
    const [loding, setLoding] = useState()

    // const services = useLoaderData()
    // setLoding(false)
    Usetitle("services")


    
    useEffect(()=>{
        setLoding(true)
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setServices(data)
          setLoding(false)
        })
    }, [])



    return (
        <div>
            {
                loding ? <Spiner></Spiner> : ''
            }
            <div className='grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    services.map(service => <AllSingleService
                    key={service._id}
                    service={service}
                    ></AllSingleService>)
                }
            </div>

            <div>
                <SaveService></SaveService>
            </div>

        </div>
    );
};

export default AllServices;
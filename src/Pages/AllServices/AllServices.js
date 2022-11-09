import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Usetitle from '../../Hook/Usetitle';
import SaveService from '../Home/SaveService/SaveService';
import AllSingleService from './AllSingleService';

const AllServices = () => {
    const services = useLoaderData()
    Usetitle("services")
    return (
        <div>
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
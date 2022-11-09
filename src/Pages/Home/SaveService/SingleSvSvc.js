import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleSvSvc = ({ser}) => {
    const {_id, title, img, body, price} = ser
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='h-52 w-full' src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {/* <p>{body}</p> */}
                <>
                {
                    body.length >100? <p>{body.slice(0, 100)+"..."}</p>:{body}
                }

                </>
                <p className='text-pink-600 font-bold text-lg'>Price: ${price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/services/${_id}`}>
                    <button className="btn btn-secondary">Show Details</button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleSvSvc;
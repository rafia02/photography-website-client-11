import React from 'react';

const Review = ({review}) => {

    const {email, name, img, message} = review
    return (
        <div className='card shadow-md bg-pink-50 p-10'>
            <div className="avatar ">
                <div className="w-24 rounded-full">
                    <img src={img} alt="" />
                </div>
            </div>
            
            <p className='italic font-bold my-4 text-xl'>{name}</p>
            <p className='italic'>{message}</p>

        </div>
    );
};

export default Review;
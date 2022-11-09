import React from 'react';

const About = () => {
    return (
        <div className=' bg-pink-50 p-10 my-20 '>
            <h1 className='text-center text-4xl font-bold text-pink-600'>About Us</h1>
            <div className='grid  my-10  grid-cols-1 md:grid-cols-2 gap-8'>
                <div className=' border'>
                    <img className='h-full rounded w-full' src="https://idealbranding.in/wp-content/uploads/2017/09/corporate-photography-services-india-corporate-event-photography-services-corporate-photography-services.jpg" alt="" />
                    {/* <img src="https://www.indiafilings.com/learn/wp-content/uploads/2017/07/GST-Rate-for-Photography-Services.jpg" alt="" /> */}
                </div>
                <div>
                    <h1>My services are specially tailored and quoted individually according to the type of project and property and include Aerial, Lifestyle, Food and Travel Photography to provide you with a successful and complete range of imagery. I supply images for the Luxury Hospitality Industry and Advertising worldwide.</h1>
                    <h1 className='my-5'>Professional Photographer Sakis Papadopoulos is specialist in Hotel & Resort Photography and Video Production for the Luxury Hospitality Industry for more than 20 years, I capture images of some of the World’s finest Luxury Hotels, Resorts and Villas.I am based in Greece and available internationally.</h1>
                    <button className='btn btn-secondary'>Reade More</button>
                </div>
            </div>
        </div>
    );
};

export default About;
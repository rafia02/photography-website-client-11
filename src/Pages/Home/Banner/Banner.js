import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mb-20">
            <div id="slide1" className="carousel-item relative w-full mt-1">
                <img src="https://bstro.com/wp-content/uploads/2017/03/BSTRO-Photography-Banners-1-1400x500.jpg" className="w-full" />

                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div>
                    <h1 className='text-white text-4xl font-bold pb-4'>SERVICES</h1>
                    <h1 className='text-white text-6xl font-bold'>PHOTOGRAPHY</h1>
                    <p className='text-white mt-3'>We will make portrait photos look good and professionally edited.</p>
                    </div>
                </div>


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img  src="https://www.riekepackaging.com/images/content/299_banner_1920x720.jpg?12:12:33&_e=.jpg" className="w-full" />


                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div>
                    <h1 className='text-white text-4xl font-bold pb-4'>Professional</h1>
                    <h1 className='text-white text-6xl font-bold'>Photography Services</h1>
                    <p className='text-white mt-3'>We will make portrait photos look good and professionally edited.</p>

                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://fixthephoto.com/images/uikit_slider/graphic-art-manipulation-service-before-after-41610703978_wh960.jpg" className="w-full" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div>
                    <h1 className='text-white text-4xl font-bold pb-4'>Professional</h1>
                    <h1 className='text-white text-6xl font-bold'>Photography Services</h1>
                    <p className='text-white mt-3'>We will make portrait photos look good and professionally edited.</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                  <img src="https://fixthephoto.com/images/uikit_slider/image-manipulation-service-before-after-61610704027_wh960.jpg" className="w-full" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div>
                    <h1 className='text-white text-4xl font-bold pb-4'>Professional</h1>
                    <h1 className='text-white text-6xl font-bold'>Photography Services</h1>
                    <p className='text-white mt-3'>We will make portrait photos look good and professionally edited.</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
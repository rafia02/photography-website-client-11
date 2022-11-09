import React from 'react';
import '../../../App.css'

const Information = () => {
    return (
        <div className="hero  my-20" style={{ backgroundImage: `url("https://www.indiafilings.com/learn/wp-content/uploads/2017/07/GST-Rate-for-Photography-Services.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">QUALITY  CREATIVITY  ELEGANCE</h1>
                <p className="mb-5">My clients know me for my commercial sense, artistic sensibility and experience of the Luxury Travel Industry.All my services are specially tailored and quoted individually according to the type of project and property.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Information;
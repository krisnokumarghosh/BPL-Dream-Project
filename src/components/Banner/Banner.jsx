import React from 'react';
import bannerImg from "../../assets/bg-shadow.png";
import bannerMainImg from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div 
        style={{ backgroundImage: `url(${bannerImg})` }}
        className='container py-15 mx-auto bg-cover h-136.25 mt-17.5 border-2 border-gray-200 rounded-xl space-y-5'>
            <img className='mx-auto' src={bannerMainImg} alt="" />
            <h1 className='font-bold text-[25px] text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-[18px] text-black/70 text-center'>Beyond Boundaries Beyond Limits</p>
            <div className='max-w-50 border-2 rounded-xl p-2 border-[#E7FE29] mx-auto'>
                <button className='btn w-full border-0 rounded-xl bg-[#E7FE29]'>Claim Free Credit</button>
            </div>
            
        </div>
    );
};

export default Banner;
import React from 'react';
import bannerMainImg from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div 
         style={{
    background: '#0e0e1a',
    backgroundImage: `
      radial-gradient(circle at 0% 50%, rgba(120,60,200,0.55), transparent 60%),
      radial-gradient(circle at 100% 50%, rgba(180,60,120,0.45), transparent 60%)
    `
  }}
        className='container py-15 mx-auto h-136.25 mt-17.5  rounded-xl space-y-5'>
            <img className='mx-auto' src={bannerMainImg} alt="" />
            <h1 className='font-bold text-[25px] text-white text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-[18px] text-white/70 text-center'>Beyond Boundaries Beyond Limits</p>
            <div className='max-w-50 border-2 rounded-xl p-2 border-gray-200 mx-auto'>
                <button className='btn btn-outline text-white hover:bg-[#3a117a] w-full border-0 rounded-xl '>Claim Free Credit</button>
            </div>
            
        </div>
    );
};

export default Banner;
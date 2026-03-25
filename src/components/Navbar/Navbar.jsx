import React from 'react';
import navLogo from "../../assets/logo.png";
import coinImg from "../../assets/Currency.png"

const Navbar = () => {
    return (
        <div className=' navbar bg-base-100 shadow-sm'>
           <div className='container mx-auto flex justify-between items-center'>
             <div>
                <img src={navLogo} alt="" />
            </div>

            <div className='md:flex items-center gap-9'>
               <div>
                <ul className='flex gap-5 items-center text-[#131313]/70'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                </div> 
                <div className='flex items-center gap-1 btn'>
                    <button>0 Coin </button>
                    <img src={coinImg} alt="" />
                </div>
            </div>
           </div>
        </div>
    );
};

export default Navbar;
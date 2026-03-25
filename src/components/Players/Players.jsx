import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const data = use(playersPromise);
    
    return (
        <div className='mt-16 container mx-auto'>
        <div className='md:flex justify-between items-center mb-8'>
            <h2 className='text-[22px] font-bold'>Available Players</h2>
            <div className='flex items-center'>
                <button className='btn border-0 rounded-r-none rounded-l-xl font-bold bg-[#E7FE29]'>Available</button>
                <button className='btn font-bold rounded-l-none rounded-r-xl'>Selected(0)</button>
            </div>
        </div>
        <AvailablePlayers data={data}></AvailablePlayers>
        </div>
    );
};

export default Players;
import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const data = use(playersPromise);

    const [selectedType , setSelectedType] = useState("available")
    
    return (
        <div className='mt-16 container mx-auto'>
        <div className='md:flex justify-between items-center mb-8'>
            {
                selectedType === "available" ? 
                (<h2 className='text-[22px] font-bold'>Available Players</h2>) : 
                (<h2 className='text-[22px] font-bold'>Selected Players (4/6)</h2>)
            }
            <div className='flex items-center'>

                <button 
                onClick={() => setSelectedType("available")}
                className={`btn border-0 rounded-r-none rounded-l-xl font-bold ${selectedType === "available" ? "bg-[#E7FE29]" : 'btn'}`}>Available</button>
                
                
                <button 
                onClick={() => setSelectedType("selected")}
                className={`btn font-bold rounded-l-none rounded-r-xl ${selectedType === "selected" ? "bg-[#E7FE29]" : 'btn'}`}>Selected(0)</button>

            </div>
        </div>
        <AvailablePlayers data={data}></AvailablePlayers>
        </div>
    );
};

export default Players;
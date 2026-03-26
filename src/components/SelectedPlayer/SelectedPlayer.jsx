import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const SelectedPlayer = ({selectedPlayers , setSelectedPlayers , coin , setCoin}) => {

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter(selected => selected.playerName != player.playerName);

        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }

    return (
        <div className='mb-20 space-y-6'>
           {
            selectedPlayers.length == 0 ? 
            <div 
            className='text-center border border-gray-300 rounded-xl py-20'
            >
                <h2 className='font-bold text-[20px]'>No Player Selected Yet</h2>
                <p className='text-gray-500 mt-1'>Go to available tab to select player</p>
            </div> :

            selectedPlayers.map(player => {
               return(
                 <div 
                className='border-2 p-4 rounded-xl 
                border-gray-200 flex justify-between
                items-center'>

                    <div className='flex gap-7 items-center'>
                        <img 
                        className='w-20 h-20 rounded-md bg-gray-600'
                        src={player.image} alt="" />
                        <div>
                            <h4 className='font-semibold text-[20px]'>{player.playerName}</h4>
                            <p className='text-[#131313]/70'>{player.playerType}</p>
                        </div>
                    </div>
                    <div>
                        <button 
                        onClick={() => handleDeleteSelectedPlayer(player)}
                        className='btn'><FaTrashAlt></FaTrashAlt></button>
                    </div>

                </div>
               )
            })
           }
        </div>
    );
};

export default SelectedPlayer;
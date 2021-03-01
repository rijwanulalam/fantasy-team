import React from 'react';
import './Selection.css'

const Selection = (props) => {
    const player = props.select;
    //reducing array for total
    const total = player.reduce((price, player) => price + Number(player.salary),0);
    return (
        <div>
            <h2>Team Summary</h2>
            <h5>Selected Players: {player.length}</h5>
            <h5>Total Expense: ${total}</h5>
            <div>
                <h5>Players In Team</h5>
                {
                    player.map(playerInfo => <div><img className="image-size" src={playerInfo.image}></img><h5>{playerInfo.name}</h5><h6>salary: ${playerInfo.salary}</h6></div>)
                }
            </div>
        </div>
    );
};

export default Selection;
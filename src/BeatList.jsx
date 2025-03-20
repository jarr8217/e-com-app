import React from 'react';
import './BeatList.module.css';


// Beat list component
const BeatList = ({ beats }) => (
    <div className="beat-list">
        {beats.map((beat) => (
            <div key={beat.id} className="beat-card">
                <img src={beat.image} alt={beat.title} />
                <div className="beat-info">
                    <h2 className="beat-title">{beat.title}</h2>
                    <p className="beat-artist">{beat.artist}</p>
                    <p clasName="beat-genre">{beat.genre}</p>
                    <p className="beat-price">${beat.price}</p>
                    <p className="beat-description">{beat.description}</p>
                </div>
            </div>
        ))}
    </div>
);


export default BeatList;

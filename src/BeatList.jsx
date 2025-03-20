import React from 'react';
import styles from './BeatList.module.css';

// Beat list component
const BeatList = ({ beats, onAddToCart }) => (
    <div className={styles['beat-container']}>
        {beats.map((beat) => (
            <div key={beat.id} className={styles['beat-card']}>
                <img src={beat.image} alt={beat.title} />
                <div className={styles['beat-info']}>
                    <h2 className={styles['beat-title']}>{beat.title}</h2>
                    <p className={styles['beat-artist']}>{beat.artist}</p>
                    <p className={styles['beat-genre']}>{beat.genre}</p>
                    <p className={styles['beat-price']}>${beat.price}</p>
                    <p className={styles['beat-description']}>{beat.description}</p>
                    <button onClick={() => onAddToCart(beat)}>Add to Cart</button> 
                </div>
            </div>
        ))}
    </div>
);

export default BeatList;

import React from 'react';

import classes from './styles/Reservation.module.scss';

const Reservation = () => {
    const clickbtnhandeler = (e) => {
        let parent = e.target.parentNode;
        console.log(parent)
        parent.style.width = "10rem";
        setTimeout(() => { parent.style.height = "10rem"; }, 1000);
        setTimeout(() => { parent.style.background = "rgba(180,180,180,0.2)"; }, 2000);
    }
    return (
        <>
            <div className={classes.reservationBox}>
                <span className={classes.clickbutton} onClick={clickbtnhandeler}>click</span>
                <span className={classes.result}>result</span>
            </div>
        </>
    );
};

export default Reservation
import React, { useState } from 'react';

import classes from './styles/Reservation.module.scss';

const Reservation = () => {
    let [boxOpen, setBoxOpen] = useState(false);
    const boxOpenHandeler = (e) => {
        if (boxOpen == false) {
            let node = e.target;
            if (node.nodeName == "SPAN") {
                node = e.target.parentElement;
            };
            node.style.width = "55rem";
            setTimeout(() => { node.style.height = "30rem"; }, 1000);
            setTimeout(() => { node.style.background = "rgba(180,180,180,0.2)"; }, 2000);
            node.firstChild.style.display = "none";
            setBoxOpen(true);
        };
    }
    return (
        <>
            <div className={`${classes.reservationBox} ${boxOpen || classes.reservationBoxHover}`} id="reservationBox" onClick={boxOpenHandeler}>
                <span className={classes.clickbutton}>click</span>
            </div>
        </>
    );
};

export default Reservation
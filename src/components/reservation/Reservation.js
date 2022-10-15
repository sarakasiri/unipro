import React, { useState } from 'react';

import classes from './styles/Reservation.module.scss';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Hidden from '@mui/material/Hidden';

import Title from '../title/Title';


const Reservation = () => {
    let [boxOpen, setBoxOpen] = useState(false);

    const steps = [
        'ثبت اطلاعات',
        'تعیین تاریخ',
        'تعیین زمان',
        'ثبت نهایی'
    ];

    const boxOpenHandeler = (e) => {
        if (boxOpen === false) {
            let node = e.target;
            if (node.nodeName === "SPAN") {
                node = e.target.parentElement;
            };
            node.style.width = "55rem";
            setTimeout(() => { node.style.height = "30rem"; }, 1000);
            setTimeout(() => { node.style.background = "rgba(180,180,180,0.2)"; }, 2000);
            node.style.marginTop = "3rem";
            node.firstChild.style.display = "none";
            node.children[1].style.display = "flex";
            setTimeout(() => { node.children[1].style.visibility = "visible"; }, 3000);
            setTimeout(() => { node.children[1].style.opacity = "1"; }, 3000);
            setBoxOpen(true);
        };
    }
    return (
        <>
            <div className={`${classes.reservationBox} ${boxOpen || classes.reservationBoxHover}`} id="reservationBox" onClick={boxOpenHandeler}>
                <span className={classes.clickbutton}>رزرو آنلاین</span>
                <div className={classes.reserveSteps}>
                    <Title englishTitle="coming soon" persianTitle="به زودی فعال میشود" absolutePosition={false} />
                    <Hidden xsUp smUp mdUp lgUp xlUp xsDown smDown mdDown lgDown xlDown>
                        <Stepper alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Hidden>
                </div>
            </div>
        </>
    );
};

export default Reservation
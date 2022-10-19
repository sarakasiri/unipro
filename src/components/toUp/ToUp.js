import React from 'react';

import classes from './styles/ToUp.module.scss';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Tooltip from '@mui/material/Tooltip';

const ToUp = () => {
    window.onscroll = () => {
        let scrollbtn = document.getElementById("srolltop-btn");
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            scrollbtn.style.display = "block";
        } else {
            scrollbtn.style.display = "none";
        }
    }
    const ScrollToUpHandeler = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            <Tooltip title="scroll to top">
                <div id="srolltop-btn" className={classes.toUpBox} onClick={ScrollToUpHandeler}>
                    <div className={classes.Box}>
                        <ExpandLessIcon className={classes.arrowIcon} fontSize='medium' />
                    </div>
                </div>
            </Tooltip>
        </>
    );
};

export default ToUp
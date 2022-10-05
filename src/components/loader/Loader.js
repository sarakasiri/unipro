import React, { useState } from 'react';

import classes from './styles/Loader.module.scss';

import CircleLoader from 'react-spinners/CircleLoader';


const Loader = ({ loader = false }) => {
    return (
        <div className={`${classes.loaderContainer} ${loader || classes.loaderContainerToggle}`}>
            <div className={classes.loaderBox}>
                <CircleLoader color={"#CEDFED"} size={175} aria-label="Loading Site" />
                <div className={classes.LegionLoader}>
                    <span>L</span>
                    <span>E</span>
                    <span>G</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                </div>
            </div>
        </div>
    );
};

export default Loader
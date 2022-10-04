import React, { useState } from 'react';

import classes from './styles/Loader.module.scss';

import CircleLoader from 'react-spinners/CircleLoader';


const Loader = () => {
    let [loading, setLoading] = useState(true);

    return (
        <div className={classes.loaderBox}>
            <CircleLoader color={"#CEDFED"} loading={loading} size={175} aria-label="Loading Site" />
            <div className={classes.LegionLoader}>
                <span>L</span>
                <span>E</span>
                <span>G</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>
            </div>
        </div>
    );
};

export default Loader
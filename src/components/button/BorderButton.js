import React from 'react';

import classes from './styles/button.module.scss';

const BorderButton = ({ value, clickEvent }) => {
    return (
        <button onClick={clickEvent} className={classes.BorderButton}>
            <span>{value}</span>
        </button>
    );
};

export default BorderButton
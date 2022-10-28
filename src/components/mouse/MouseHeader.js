import React from 'react';

import classes from './styles/mouse.module.scss';


const MouseHeader = ({ target }) => {
    return (
        <a className={classes.Mouse} href={`#${target}`}></a>
    );
};

export default MouseHeader
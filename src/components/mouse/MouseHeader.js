import React from 'react';

import classes from './styles/Mouse.module.scss';


const MouseHeader = ({ target }) => {
    return (
        <a className={classes.Mouse} href={`#${target}`}></a>
    );
};

export default MouseHeader
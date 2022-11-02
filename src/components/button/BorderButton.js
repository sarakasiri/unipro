import React from 'react';

import classes from './styles/button.module.scss';

import Typography from '@mui/material/Typography';

const BorderButton = ({ value, clickEvent }) => {
    return (
        <button onClick={clickEvent} className={classes.BorderButton}>
            <Typography align='center' variant='button' className='link'>
                {value}
            </Typography>
        </button>
    );
};

export default BorderButton
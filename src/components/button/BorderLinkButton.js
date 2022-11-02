import React from 'react';

import classes from './styles/button.module.scss';

import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

const BorderLinkButton = ({ value, link }) => {
    return (
        <Link to={link} className={classes.BorderButton}>
            <Typography align='center' variant='button' className={`link ${classes.buttonText}`}>
                {value}
            </Typography>
        </Link>
    );
};

export default BorderLinkButton
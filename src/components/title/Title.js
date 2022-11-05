import React from 'react';

import classes from './styles/title.module.scss';

import Typography from '@mui/material/Typography';


const Title = ({ englishTitle, persianTitle, absolutePosition = true }) => {
    return (
        <div className={classes.titleBox} style={{ position: absolutePosition ? 'absolute' : 'relative' }}>
            <Typography  variant="h1" className={classes.englishTitle}>
                {englishTitle}
            </Typography>
            <Typography variant="h2" className={classes.persianTitle}>
                {persianTitle}
            </Typography>
        </div>
    );
};

export default Title
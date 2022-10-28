import React from 'react';

import classes from './styles/title.module.scss';

const Title = ({ englishTitle, persianTitle, absolutePosition = true }) => {
    return (
        <div className={classes.titleBox} style={{ position: absolutePosition ? 'absolute' : 'relative' }}>
            <span className={classes.englishTitle}>
                {englishTitle}
            </span>
            <h2 className={classes.persianTitle}>
                {persianTitle}
            </h2>
        </div>
    );
};

export default Title
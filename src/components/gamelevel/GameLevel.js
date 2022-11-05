import React from 'react';

import classes from './styles/gamelevel.module.scss';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import ghost from '../../assets/svg/ghost.svg';
import hardship from '../../assets/svg/hardship.svg';

const GameLevel = ({ hardshipLevel, fearLevel, size = "md" }) => {
    return (
        <>
            <div className={size === "sm" ? classes.infoGameSM : classes.infoGame}>
                <div className={classes.hardshipLevel}>
                    <CircularProgress className={classes.circleProgress} variant="determinate" value={hardshipLevel} size={size === "sm" ? 75 : 100} />
                    <LazyLoadImage src={hardship} className={size === "sm" ? classes.levelIconSM : classes.levelIcon} />
                    <Typography variant='subtitle1' className='title-fantasy'>
                        درجه سختی:
                    </Typography>
                    <Typography variant='subtitle1' className='title-fantasy'>
                        {hardshipLevel}%
                    </Typography>
                </div>
                <div className={classes.fearLevel}>
                    <CircularProgress className={classes.circleProgress} variant="determinate" value={fearLevel} size={size === "sm" ? 75 : 100} />
                    <LazyLoadImage src={ghost} className={size === "sm" ? classes.levelIconSM : classes.levelIcon} />
                    <Typography variant='subtitle1' className='title-fantasy'>
                        درجه ترس:
                    </Typography>
                    <Typography variant='subtitle1' className='title-fantasy'>
                        {fearLevel}%
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default GameLevel
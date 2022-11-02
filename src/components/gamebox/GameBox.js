import React from 'react';

import classes from './styles/gamebox.module.scss';

import Typography from '@mui/material/Typography';

import BorderLinkButton from '../button/BorderLinkButton';
import GameLevel from '../gamelevel/GameLevel';


const GameBox = ({ image, title, people, genre, time, price, hardshipLevel, fearLevel, link }) => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.cover} style={{ backgroundImage: `url(${image})` }}>
                    <div className={classes.description}>
                        <Typography variant="h6" className="title-fantasy text-2-title">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" className="title-normal">
                            ژانر: {genre}
                        </Typography>
                        <Typography variant="subtitle1" className="title-normal">
                            تعداد نفرات: {people}
                        </Typography>
                        <Typography variant="subtitle1" className="title-normal">
                            زمان بازی: {time}
                        </Typography>
                        <Typography variant="subtitle1" className="title-normal">
                            قیمت بابت هر نفر: {price}
                        </Typography>
                        <GameLevel hardshipLevel={hardshipLevel} fearLevel={fearLevel} size="sm" />
                    </div>
                </div>
                <div className={classes.actions}>
                    <BorderLinkButton value='سناریو بازی' link={`${link}/#senario`} />
                    <BorderLinkButton value='رزرو بازی' link={`${link}/#reserve`} />
                </div>
            </div>
        </>
    );
};

export default GameBox
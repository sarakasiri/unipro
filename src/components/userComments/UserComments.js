import React from 'react';

import classes from './styles/usercomments.module.scss';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import ghost_comment from '../../assets/svg/ghost_comment.svg';


const UserComments = ({ star, name, message }) => {
    return (
        <>
            <div className={classes.userComment}>
                <LazyLoadImage src={ghost_comment} className={classes.ghostComment} />
                <Rating className={classes.ratingEl} size="small" readOnly precision={0.5} value={star} />
                <Typography variant='h4' className={`title-fantasy ${classes.commentName}`}>
                    {name}
                </Typography>
                <Typography variant='caption' className={`caption ${classes.commentMessage}`}>
                    {message}
                </Typography>
            </div>
        </>
    );
};

export default UserComments
import React from 'react';

import Loader from '../../components/loader/Loader';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Navbar from '../../components/navbar/Navbar';

import classes from './styles/Games.module.scss';

// import corridor from '../../assets/images/scary-corridor.png';
import corridor from '../../assets/images/corridor3.jpg';


const Games = () => {
    const update = (e) => {
        let x = e.clientX || e.touches[0].clientX;
        let y = e.clientY || e.touches[0].clientY;

        let corridorcursorX = document.getElementById('corridorImg');
        corridorcursorX.style.setProperty('--cursorX', x + 'px');
        let corridorcursorY = document.getElementById('corridorImg');
        corridorcursorY.style.setProperty('--cursorY', y + 'px');
    }

    document.addEventListener('mousemove', update)
    document.addEventListener('touchmove', update)
    return (
        <>
            <Navbar />
            <div className={classes.corridorImg} id='corridorImg'>
                <LazyLoadImage src={corridor} alt="" className={classes.sectionBoxImage} />
            </div>
        </>
    );
};

export default Games
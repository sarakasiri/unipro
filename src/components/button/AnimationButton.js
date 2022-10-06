import React from 'react';

import classes from './styles/AnimationButton.module.scss';


const AnimationButton = ({ data_hover, data_button }) => {

    return (
        <>
            <button className={classes.button} data-hover={data_hover}>
                <div>
                    {data_button}
                </div>
            </button>
        </>
    );
};

export default AnimationButton
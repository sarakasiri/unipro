import React from 'react';

import classes from './styles/Button.module.scss';


const AnimationButton = ({ data_hover, data_button, target }) => {

    return (
        <>
            <a className={classes.button} data-hover={data_hover} href={`#${target}`}>
                <div>
                    {data_button}
                </div>
            </a>
        </>
    );
};

export default AnimationButton
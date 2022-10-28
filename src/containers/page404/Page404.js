import React from 'react';

import classes from './styles/page404.module.scss';

import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.body}>
                    <div className={classes.head}>
                        <div className={classes.eye404}></div>
                        <div className={classes.eye404}></div>
                        <div className={classes.eye404}></div>
                        <div className={classes.content}>
                            <div className={classes.description}></div>
                            <Link to='/' className={classes.BorderButton}>
                                <span>بازگشت به لژیون</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page404
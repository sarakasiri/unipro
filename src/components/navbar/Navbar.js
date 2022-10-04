import React from 'react';

import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';

import classes from './styles/Navbar.module.scss';


const Navbar = () => {
    return (
        <>
            <AppBar position="sticky" className={classes.navbarHeader}>
                <Toolbar className={classes.toolBarNavbar}>
                    <div className={classes.navbar}>
                        <div className={classes.navbarListRight}>
                            <span>
                                صفحه اصلی
                            </span>
                            <span>
                                وبلاگ
                            </span>
                            <span>
                                بازی ها
                            </span>
                        </div>
                        <div className={classes.navbarLogo}>

                        </div>
                        <div className={classes.navbarListLeft}>
                            <span>
                                صفحه اصلی
                            </span>
                            <span>
                                وبلاگ
                            </span>
                            <span>
                                بازی ها
                            </span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar
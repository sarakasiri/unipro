import React, { useState } from 'react';

import classes from './styles/Navbar.module.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import { Instagram, WhatsApp, Telegram } from '@mui/icons-material';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logoWithOutName.png';


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = [{
        title: "صفحه اصلی",
        link: "/"
    }, {
        title: "بازی میراژ",
        link: "/mirageGame"
    }, {
        title: "وبلاگ",
        link: "/blog"
    }];
    const settings = [
        <Instagram className={classes.socialIcon} />,
        <WhatsApp className={classes.socialIcon} />,
        <Telegram className={classes.socialIcon} />
    ];

    return (
        <AppBar className={classes.appBarContainer}>
            <Toolbar disableGutters className={classes.toolBarBox}>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}>

                        {pages.map((page, index) => (
                            <MenuItem key={index} onClick={handleCloseNavMenu} >
                                <Link to={page.link}>{page.title}</Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box className={classes.menuIconBox} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {settings.map((setting, index) => (
                        <Button className={classes.menuIconBtn} key={index}>
                            {setting}
                        </Button>
                    ))}
                </Box>
                <div className={classes.logoBox}>
                    <Link to='/'>
                        <LazyLoadImage src={logo} className={classes.logo} />
                    </Link>
                </div>
                <Box className={classes.menuItemBox} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page, index) => (
                        <Link key={index} className={classes.menuItemLink} to={page.link}>{page.title}</Link>
                    ))}
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
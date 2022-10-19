import React, { useState } from 'react';

import classes from './styles/Navbar.module.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
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
        title: "بازی میراژ",
        link: "/mirageGame"
    }, {
        title: "صفحه اصلی",
        link: "/"
    }, {
        title: "وبلاگ",
        link: "/blog"
    }];
    const settings = [<Instagram />, <WhatsApp />, <Telegram />];

    return (
        <AppBar className={classes.appBar} color='inherit'>
            <Container maxWidth="lg" >
                <Toolbar disableGutters>

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

                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu} >
                                    <Link to={page.link} textAlign="center">{page.title}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 1, pl: 6, color: 'black', display: 'block' }}
                            >
                                <Link to={page.link} textAlign="center">{page.title}</Link>
                            </Button>
                        ))}
                    </Box>
                    <LazyLoadImage src={logo} className={classes.logo} />
                    <Box sx={{ flexGrow: 1, ml: 32, display: { xs: 'none', md: 'flex' } }}>
                        {settings.map((setting) => (
                            <Button
                                key={setting}
                                sx={{ my: 1, pl: 7, color: 'black', display: 'block' }}
                            >
                                {setting}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
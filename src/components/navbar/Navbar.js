import React, { useState } from 'react';

import classes from './styles/Navbar.module.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Instagram, WhatsApp, Telegram } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logoWithOutName.png';


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(false);

    const handleOpenNavMenu = () => {
        setAnchorElNav(true);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
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
                <Drawer
                    anchor='right'
                    open={anchorElNav}
                    onClose={handleCloseNavMenu}
                >
                    <Box
                        sx={{ width: 200 }}
                        role="presentation"
                        onKeyDown={handleCloseNavMenu}
                    >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <CloseIcon onClick={handleCloseNavMenu} />
                                </ListItemButton>
                            </ListItem>
                            {pages.map((page, index) => (
                                <ListItem key={index} disablePadding className={classes.listItemResponsive}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Link className={classes.linkItemResponsive} to={page.link}>{page.title}</Link>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <IconButton
                    size="large"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    className={classes.humbergerMenuIcon}
                >
                    <MenuIcon />
                </IconButton>
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
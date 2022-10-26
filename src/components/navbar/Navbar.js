import React, { useState } from 'react';

import classes from './styles/navbar.module.scss';

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
    }];
    const external = [{
        title: "وبلاگ",
        link: "https://blog.legionescaperoom.ir/"
    }];
    const settings = [
        <a target="_blank" rel="noreferrer" href="https://instagram.com/legionescaperoom"><Instagram className={classes.socialIcon} /></a>,
        <a target="_blank" rel="noreferrer" href="https://wa.me/989366534783"><WhatsApp className={classes.socialIcon} /></a>,
        <a target="_blank" rel="noreferrer" href="https://t.me/Afshinyahyaei"><Telegram className={classes.socialIcon} /></a>
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
                            {external.map((page, index) => (
                                <ListItem key={index + pages.length} disablePadding className={classes.listItemResponsive}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <a className={classes.linkItemResponsive} href={page.link}>{page.title}</a>
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
                <Box className={classes.menuIconBox} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
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
                    {external.map((page, index) => (
                        <a key={index + pages.length} className={classes.menuItemLink} href={page.link}>{page.title}</a>
                    ))}
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
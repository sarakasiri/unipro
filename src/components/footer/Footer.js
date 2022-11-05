import React, { useState } from 'react';

import classes from './styles/footer.module.scss';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRounded from '@mui/icons-material/EmailRounded';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Loading from "../loader/Loading";
import SnackBarMessage from '../snackbarMessage/SnackBarMessage';

import { AddNewsletter } from "../../api/Newsletter";
import CallApi from "../../functions/CallApi";

import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import logo from '../../assets/images/logoWithOutName.png';

const Footer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [snackeMessageOpen, setSnackMessageOpen] = useState(false);
    let [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const openSnackeMessageHandler = () => {
        setSnackMessageOpen(true);
    };

    const closeSnackeMessageHandler = () => {
        setSnackMessageOpen(false);
    };

    const formTextFieldChangeHandler = (event, inputName) => {
        let newData = { ...formData };
        newData[inputName] = event.target.value;
        setFormData(newData);
    };

    const sendDataHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await CallApi(AddNewsletter(formData.name, formData.email));
            openSnackeMessageHandler();
            setFormData({
                name: "",
                email: "",
            });
        } catch (error) {
            console.log(error);
        };
        setIsLoading(false);
    };

    const rtltheme = createTheme({
        direction: 'rtl', // Both here and <body dir="rtl">
    });
    // Create rtl cache
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    return (
        <>
            {isLoading && <Loading isLoading={true} />}
            <SnackBarMessage isOpen={snackeMessageOpen} closeHandler={closeSnackeMessageHandler} message="با موفقیت ثبت شد" />
            <Grid container direction="row-reverse" className={classes.footeerContainer}>
                <Grid item xs={12} md={4} className={classes.footerItemBox}>
                    <div className={classes.menuBox}>
                        <Typography variant='h6' className={`title-normal ${classes.menuTitle}`}>
                            منو
                        </Typography>
                        <ul className={classes.menuUl}>
                            <li className={classes.menuItem}>
                                <Link className={`item ${classes.menuLink}`} to='/'>صفحه اصلی</Link>
                            </li>
                            <li className={classes.menuItem}>
                                <Link className={`item ${classes.menuLink}`} to='/mirageGame'>بازی میراژ</Link>
                            </li>
                            <li className={classes.menuItem}>
                                <Link className={`item ${classes.menuLink}`} to='/blog'>وبلاگ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.menuBox}>
                        <Typography variant='h6' className={`title-normal ${classes.menuTitle}`}>
                            اطلاعات تماس
                        </Typography>
                        <ul className={classes.menuUl}>
                            <li className={classes.menuItem}>
                                <Typography variant='caption' className='item'>
                                    آدرس: تهران - چیتگر - بلوار کوهک - پلاک ۱۳
                                </Typography>
                            </li>
                            <li className={classes.menuItem}>
                                <Typography variant='caption' className='item'>
                                    شماره تماس: 09389669643 - 09378819116
                                </Typography>
                            </li>
                            <li className={classes.menuItem}>
                                <Typography variant='caption' className='item'>
                                    اینستاگرام: legionescaperoom
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.footerItemBox}>
                    <div className={classes.magicBox}>
                        <div className={classes.ball}>
                            <LazyLoadImage src={logo} className={classes.logoImage} />
                        </div>
                        <div className={classes.shadow}></div>
                    </div>
                    <Hidden mdDown>
                        <div className={classes.copyrightBox}>
                            <Typography variant='caption' className='caption silver-color'>تمامی حقوق مادی و معنوی این سایت متعلق به مجموعه لژیون اسکیپ میباشد</Typography>
                            <Typography variant='caption' className='silver-color'>©2022-2023 LegionEscape. All Rights Reserved.</Typography>
                        </div>
                    </Hidden>
                </Grid>
                <Grid item xs={12} md={4} className={classes.footerItemBox}>
                    <div className={classes.newsletterBox}>
                        <Typography variant='h6' className={`title-normal ${classes.menuTitle}`}>
                            ثبت نام در خبرنامه ایمیلی
                        </Typography>
                        <form className={classes.newsletterForm} autoComplete="off">
                            <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={rtltheme}>
                                    <div dir="rtl" className={classes.inputBox}>
                                        <Box className={classes.inputIconBox}>
                                            <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
                                            <TextField onChange={(e) => formTextFieldChangeHandler(e, 'name')} value={formData.name} className={classes.textField} label="نام و نام خانوادگی" variant="standard" />
                                        </Box>
                                        <Box className={classes.inputIconBox}>
                                            <EmailRounded sx={{ color: 'white', mr: 1, my: 0.5 }} />
                                            <TextField onChange={(e) => formTextFieldChangeHandler(e, 'email')} value={formData.email} className={classes.textField} label="ایمیل" variant="standard" />
                                        </Box>
                                        <Button disabled={isLoading} className={classes.submitButton} onClick={sendDataHandler}>
                                            ثبت
                                        </Button>
                                    </div>
                                </ThemeProvider>
                            </CacheProvider>
                        </form>
                    </div>
                    <Hidden mdUp>
                        <div className={classes.copyrightBox}>
                            <Typography variant='caption' className='caption silver-color'>تمامی حقوق مادی و معنوی این سایت متعلق به مجموعه لژیون اسکیپ میباشد</Typography>
                            <Typography variant='caption' className='silver-color'>©2022-2023 LegionEscape. All Rights Reserved.</Typography>
                        </div>
                    </Hidden>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer
import React, { useState } from 'react';

import classes from './styles/footer.module.scss';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';

import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRounded from '@mui/icons-material/EmailRounded';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Loading from "../loader/Loading";
import SnackBarMessage from '../snackbarMessage/SnackBarMessage';

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
            // await CallApi(SendComment(formData.name, formData.opinion, formData.rate));
            openSnackeMessageHandler();
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
                        <span className={classes.menuTitle}>
                            منو
                        </span>
                        <ul className={classes.menuUl}>
                            <li className={classes.menuItem}>
                                <Link className={classes.menuLink} to='/'>صفحه اصلی</Link>
                            </li>
                            <li className={classes.menuItem}>
                                <Link className={classes.menuLink} to='/mirageGame'>بازی میراژ</Link>
                            </li>
                            <li className={classes.menuItem}>
                                <Link className={classes.menuLink} to='/blog'>وبلاگ</Link>
                            </li>
                        </ul>
                    </div>
                    <Divider orientation="horizontal" flexItem className={classes.horizontalDivider} />
                    <div className={classes.menuBox}>
                        <span className={classes.menuTitle}>
                            اطلاعات تماس
                        </span>
                        <ul className={classes.menuUl}>
                            <li className={classes.menuItem}>
                                آدرس: تهران - چیتگر - بلوار کوهک - پلاک ۱۳
                            </li>
                            <li className={classes.menuItem}>
                                شماره تماس: 09389669643 - 09378819116
                            </li>
                            <li className={classes.menuItem}>
                                اینستاگرام: legionescaperoom
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Divider orientation="vertical" flexItem className={classes.divider} />
                <Grid item xs={12} md={4} className={classes.footerItemBox}>
                    <div className={classes.magicBox}>
                        <div className={classes.ball}>
                            <LazyLoadImage src={logo} className={classes.logoImage} />
                        </div>
                        <div className={classes.shadow}></div>
                    </div>
                    <Hidden mdDown>
                        <div className={classes.copyrightBox}>
                            <span className={classes.persianText}>تمامی حقوق مادی و معنوی این سایت متعلق به مجموعه لژیون اسکیپ میباشد</span>
                            <span className={classes.englishText}>©2022-2023 LegionEscape. All Rights Reserved.</span>
                        </div>
                    </Hidden>
                </Grid>
                <Divider orientation="vertical" flexItem className={classes.divider} />
                <Grid item xs={12} md={4} className={classes.footerItemBox}>
                    <div className={classes.newsletterBox}>
                        <span className={classes.newsletterTitle}>
                            ثبت نام در خبرنامه ایمیلی
                        </span>
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
                                        <Button disabled={isLoading} className={classes.submitButton} autoFocus onClick={sendDataHandler}>
                                            ثبت
                                        </Button>
                                    </div>
                                </ThemeProvider>
                            </CacheProvider>
                        </form>
                    </div>
                    <Hidden mdUp>
                        <div className={classes.copyrightBox}>
                            <span className={classes.persianText}>تمامی حقوق مادی و معنوی این سایت متعلق به مجموعه لژیون اسکیپ میباشد</span>
                            <span className={classes.englishText}>©2022-2023 LegionEscape. All Rights Reserved.</span>
                        </div>
                    </Hidden>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer
import React, { useState, useEffect } from 'react';

import classes from './styles/home.module.scss';

import Grid from '@mui/material/Grid/Grid';
import Card from '@mui/material/Card/Card';
import Hidden from '@mui/material/Hidden';

import InstagramIcon from '@mui/icons-material/Instagram';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Loader from '../../components/loader/Loader';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import VideoScroll from '../../components/video/Video';
import ToUp from '../../components/toUp/ToUp';

import logo from '../../assets/images/logo.png';
import wave from '../../assets/svg/scene_wave.svg';
import tablet_wave from '../../assets/svg/scene_tablet_wave.svg';
import mobile_wave from '../../assets/svg/scene_mobile_wave.svg';


const Home = () => {
    let [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);

    return (
        <>
            <Loader loader={loader} />
            <Navbar />
            <div className={classes.main}>
                <ToUp />
                <Grid container direction="column" >
                    <Grid item xs={12}>
                        <div className={classes.legionBox}>
                            <Hidden lgDown>
                                <LazyLoadImage src={wave} alt="wave" className={classes.wave} />
                            </Hidden>
                            <Hidden mdDown lgUp>
                                <LazyLoadImage src={tablet_wave} alt="wave" className={classes.wave} />
                            </Hidden>
                            <Hidden mdUp>
                                <LazyLoadImage src={mobile_wave} alt="wave" className={classes.wave} />
                            </Hidden>
                            <LazyLoadImage src={logo} alt="logo" className={classes.logo} />
                            <div className={classes.titleBox}>
                                <div className={classes.box}>
                                    <Title englishTitle="Legion" persianTitle="مجموعه لژیون" />
                                    <span className={classes.description}>
                                        طراحی اتاق فرار
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    {/* <Grid item xs={12}> */}
                        <div className={classes.videoContainer}>
                            <VideoScroll file='legion' />
                        </div>
                    {/* </Grid> */}
                    {/* <Grid item xs={12}> */}
                        <div className={classes.birthDayBox}>
                            <div className={classes.contentBox}>
                                <Card className={classes.birthdayCard}>
                                    <Title englishTitle="birthday party" persianTitle="مراسم تولد در لژیون اسکیپ" />
                                    <div className={`${classes.description} ${classes.birthdaydesc}`}>
                                        <span> تولدی جذاب و خاص</span>
                                        <span>مجموعه لژیون اسکیپ افتخار این را دارد در محیطی آرام و دلنشین میزبان مراسم با شکوه تولدتان بوده تا یک شب رویایی وخاطره انگیزی را برای شما عزیزان گرامی رقم بزند </span>
                                        <span>ما با شما در  شب آرزوهایتان  شریک هستیم </span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    {/* </Grid> */}
                    {/* <Grid item xs={12}> */}
                        <div className={classes.aboutUs}>
                            <div className={classes.aboutUsBox}>
                                <Card className={classes.aboutUsCard}>
                                    <Title englishTitle="About Us" persianTitle="درباره ما" />
                                    <div className={classes.description}>
                                        <span>
                                            متفاوت ترین هارا در لژیون اسکیپ تجربه کنید
                                        </span>
                                        <span>
                                            لژیون اسکیپ در سال ۱۴۰۱-۲۰۲۲ ایجاد شد
                                        </span>
                                        <span>
                                            اولین بازی اتاق فرار طراحی شده توسط  لژیون اسکیپ "میراژ(سراب)" نام دارد
                                        </span>
                                    </div>
                                </Card>
                            </div>
                            <div className={classes.contactUsBox}>
                                <Card className={classes.aboutUsCard}>
                                    <Title englishTitle="Contact Us" persianTitle="ارتباط با ما" />
                                    <div className={classes.description}>
                                        <span>
                                            <AlternateEmailIcon className={classes.Icon} /> ایمیل: <span className={classes.regular}>info@legionescaperoom.ir</span>
                                        </span>
                                        <span>
                                            <ContactPhoneIcon className={classes.Icon} /> شماره تماس: <span className={classes.regular}>09389669643 - 09378819116</span>
                                        </span>
                                        <span>
                                            <InstagramIcon className={classes.Icon} /> اینستاگرام: <span className={classes.regular}>legionescaperoom</span>
                                        </span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    {/* </Grid> */}
                </Grid>
            </div>
            <Footer />
        </>
    );
};

export default Home
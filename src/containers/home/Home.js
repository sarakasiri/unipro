import React, { useState, useEffect } from 'react';

import classes from './styles/home.module.scss';

import Grid from '@mui/material/Grid/Grid';
import Card from '@mui/material/Card/Card';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';

import InstagramIcon from '@mui/icons-material/Instagram';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Loader from '../../components/loader/Loader';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import VideoScroll from '../../components/video/Video';
import GameBox from '../../components/gamebox/GameBox';
import ToUp from '../../components/toUp/ToUp';

import logo from '../../assets/images/logo.png';
import mirageCover from '../../assets/images/mirage_cover.png';
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
                                    <Typography variant='subtitle1' className={`title-normal ${classes.subtitle}`}>
                                        طراحی اتاق فرار
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <div className={classes.videoContainer}>
                        <VideoScroll file='legion' />
                    </div>
                    <div className={classes.birthDayBox}>
                        <div className={classes.contentBox}>
                            <Card className={classes.birthdayCard}>
                                <Title englishTitle="birthday party" persianTitle="مراسم تولد در لژیون اسکیپ" />
                                <div className={`${classes.description} ${classes.birthdaydesc}`}>
                                    <Typography variant='subtitle1' className='subtitle-normal'>
                                        تولدی جذاب و خاص
                                    </Typography>
                                    <Typography variant='caption' className='caption text-2'>
                                        مجموعه لژیون اسکیپ افتخار این را دارد در محیطی آرام و دلنشین میزبان مراسم با شکوه تولدتان بوده تا یک شب رویایی وخاطره انگیزی را برای شما عزیزان گرامی رقم بزند.
                                    </Typography>
                                    <Typography variant='subtitle2' className='subtitle-normal text-2'>
                                        ما با شما در  شب آرزوهایتان  شریک هستیم
                                    </Typography>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className={classes.gmaesContainer}>
                        <Title englishTitle="mirage games" persianTitle="بازی های میراژ" />
                        <div className={classes.gamesList}>
                            <GameBox
                                image={mirageCover}
                                title="میراژ"
                                people="۴ تا ۱۰ نفر"
                                genre="دلهره، ترس"
                                time="۹۰ دقیقه"
                                price="۱۰۰,۰۰۰ تومان"
                                hardshipLevel={95}
                                fearLevel={90}
                                link="/mirageGame"
                            />
                        </div>
                    </div>
                    <div className={classes.aboutUs}>
                        <div className={classes.aboutUsBox}>
                            <Card className={classes.aboutUsCard}>
                                <Title englishTitle="About Us" persianTitle="درباره ما" />
                                <div className={classes.description}>
                                    <Typography variant='caption' className='caption text-2'>
                                        متفاوت ترین هارا در لژیون اسکیپ تجربه کنید
                                    </Typography>
                                    <Typography variant='caption' className='caption text-2'>
                                        لژیون اسکیپ در سال ۱۴۰۱-۲۰۲۲ ایجاد شد
                                    </Typography>
                                    <Typography variant='caption' className='caption text-2'>
                                        اولین بازی اتاق فرار طراحی شده توسط  لژیون اسکیپ "میراژ(سراب)" نام دارد
                                    </Typography>
                                </div>
                            </Card>
                        </div>
                        <div className={classes.contactUsBox}>
                            <Card className={classes.aboutUsCard}>
                                <Title englishTitle="Contact Us" persianTitle="ارتباط با ما" />
                                <div className={classes.description}>
                                    <Typography variant='caption' className='caption text-2'>
                                        <AlternateEmailIcon className={classes.Icon} /> ایمیل: info@legionescaperoom.ir
                                    </Typography>
                                    <Typography variant='caption' className='caption text-2'>
                                        <ContactPhoneIcon className={classes.Icon} /> شماره تماس: 09389669643 - 09378819116
                                    </Typography>
                                    <Typography variant='caption' className='caption text-2'>
                                        <InstagramIcon className={classes.Icon} /> اینستاگرام: legionescaperoom
                                    </Typography>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Grid>
            </div>
            <Footer />
        </>
    );
};

export default Home
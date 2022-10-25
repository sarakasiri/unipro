import React, { useState, forwardRef } from 'react';

import classes from './styles/AddComment.module.scss';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AddComment = ({ isOpen, closeHandeler }) => {
    let [formData, setFormData] = useState({
        name: null,
        opinion: null,
        rate: 2.5
    });

    console.log(isOpen)

    // const formTextFieldChangeHandler = (event, inputName) => {
    //     let newData = { ...formData };
    //     newData[inputName] = event.target.value;
    //     setFormData(newData);
    // };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const rtltheme = createTheme({
        direction: 'rtl', // Both here and <body dir="rtl">
    });
    // Create rtl cache
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={closeHandeler}
            TransitionComponent={Transition}
        >
            <DialogTitle className={classes.dialogTitle}>
                {"نظر خود را در مورد بازی میراژ ایجاد کنید"}
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={rtltheme}>
                        <div dir="rtl">
                            <TextField className={classes.TextField} value={formData.name} id="outlined-basic" label="نام و نام خانوادگی" fullWidth />
                            <TextField className={classes.TextField} value={formData.opinion} id="outlined-multiline-flexible" multiline rows={3} maxRows={3} label="نظر" fullWidth />
                            <div className={classes.ratingBox}>
                                <span className={classes.ratingTitle}>رتبه شما: </span>
                                <Rating name="game-rating" defaultValue={2.5} precision={0.5} />
                            </div>
                        </div>
                    </ThemeProvider>
                </CacheProvider>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button className={classes.dialogButton} autoFocus onClick={closeHandeler}>
                    بستن
                </Button>
                <Button className={classes.dialogButton} onClick={closeHandeler} autoFocus>
                    ثبت
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddComment
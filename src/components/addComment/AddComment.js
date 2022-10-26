import React, { useState } from 'react';

import classes from './styles/addcomment.module.scss';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@mui/material/Button';
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
        name: "",
        opinion: "",
        rate: 2.5
    });

    const formTextFieldChangeHandler = (event, inputName) => {
        let newData = { ...formData };
        if (inputName === 'rate'){
            newData[inputName] = Number(event.target.value);
        }else{
            newData[inputName] = event.target.value;
        }
        setFormData(newData);
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        >
            <DialogTitle className={classes.dialogTitle}>
                {"نظر خود را در مورد بازی میراژ ایجاد کنید"}
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={rtltheme}>
                        <div dir="rtl">
                            <TextField onChange={(e) => formTextFieldChangeHandler(e, 'name')} className={classes.TextField} value={formData.name} label="نام و نام خانوادگی" fullWidth />
                            <TextField onChange={(e) => formTextFieldChangeHandler(e, 'opinion')} className={classes.TextField} value={formData.opinion} multiline rows={3} label="نظر" fullWidth />
                            <div className={classes.ratingBox}>
                                <span className={classes.ratingTitle}>رتبه شما: </span>
                                <Rating onChange={(e) => formTextFieldChangeHandler(e, 'rate')} defaultValue={2.5} precision={0.5} />
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
import React from 'react';
import classes from './styles/loader.module.scss';

import Modal from '@mui/material/Modal';
import BarLoader from 'react-spinners/BarLoader';


const Loading = ({ isLoading }) => {

    return (
        <Modal
            open={isLoading}
            disableEscapeKeyDown
            className={classes.MoadlLoading}
        >
            <BarLoader
                color="#CEDFED"
                height={3}
                width={200}
            />
        </Modal>
    );
};

export default Loading;
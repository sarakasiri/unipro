import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackBarMessage = ({ isOpen, CloseHandler, message }) => {
    return (
        <>
            <Snackbar
                open={isOpen}
                autoHideDuration={2000}
                onClose={CloseHandler}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={CloseHandler} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default SnackBarMessage
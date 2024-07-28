import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ToastProps {
    open: boolean;
    message: string;
    onClose: () => void;
    severity: 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({
    open, message, onClose, severity }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose} >
            <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar >
    );
};

export default Toast;

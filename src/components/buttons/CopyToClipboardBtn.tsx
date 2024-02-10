import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';

interface CopyToClipboardButtonProps {
    text: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({ text }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error'>('success');

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setSnackbarMessage('Text copied to clipboard!');
                setSeverity('success');
                setSnackbarOpen(true);
            })
            .catch(err => {
                setSnackbarMessage('Failed to copy text!');
                setSeverity('error');
                setSnackbarOpen(true);
                console.error('Failed to copy text: ', err);
            });
    };

    const handleCloseSnackbar = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };


    return (
        <>
            <Button onClick={handleCopy}>Copy</Button>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default CopyToClipboardButton;

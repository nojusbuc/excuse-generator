import { FormControl, InputLabel, MenuItem, FormHelperText, Select, TextField, Button, Box, Typography, Card, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { ExcuseParameters } from '../../interfaces/excuseParameters';
import { Excuse } from '../../interfaces/excuse';
import { Snackbar, Alert } from '@mui/material';
import { requestExcuse } from '../../api/api';

interface FormProps {
    setExcuses: React.Dispatch<React.SetStateAction<Excuse[]>>;
}

const Form: React.FC<FormProps> = ({ setExcuses }) => {


    const [language, setLanguage] = useState<string>('');
    const [format, setFormat] = useState<string>('');
    const [formality, setFormality] = useState<string>('');
    const [excuseStrength, setExcuseStrength] = useState<string>('');
    const [specificity, setSpecificity] = useState<string>('');
    const [length, setLength] = useState<string>('');
    const [context, setContext] = useState<string>('');

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error'>('success');

    const [loading, setLoading] = useState(false);


    const resetForm = () => {
        setLanguage('');
        setFormat('');
        setFormality('');
        setExcuseStrength('');
        setSpecificity('');
        setLength('');
        setContext('');
    };

    //get rid of these later by changing response from api
    const extractTitle = (response: string): string => {
        const titlePrefix = "Excuse Title:";
        const startIndex = response.indexOf(titlePrefix);
        if (startIndex === -1) {
            return "Unknown Title";
        }

        const endIndex = response.indexOf("Excuse Message:", startIndex);
        return response.substring(startIndex + titlePrefix.length, endIndex).trim();
    };

    const generateUniqueId = (): string => {
        return Date.now().toString();
    };

    const extractMessage = (response: string): string => {
        const messagePrefix = "Excuse Message:";
        const messageStart = response.indexOf(messagePrefix);
        if (messageStart === -1) {
            return "Message not found";
        }
        return response.substring(messageStart + messagePrefix.length).trim();
    };


    //change validation so that it autofocuses and highlights in red which fields are not filled out
    const handleSubmit = async () => {
        if (!language || !format || !formality || !specificity || !length || !excuseStrength) {
            setSnackbarMessage('Please fill out all required fields!');
            setSeverity('error');
            setSnackbarOpen(true);
        } else {
            const excuseParams: ExcuseParameters = {
                language: language,
                format: format,
                formality: formality,
                excuseStrength: excuseStrength,
                specificity: specificity,
                length: length,
                context: context
            }


            setLoading(true);
            const data = await requestExcuse(excuseParams);


            setLoading(false);

            if (data) {
                const newExcuse: Excuse = {
                    id: generateUniqueId(),
                    title: extractTitle(data),
                    dateCreated: new Date().toISOString().slice(0, 10),
                    content: extractMessage(data)
                };

                setExcuses(prevExcuses => [newExcuse, ...prevExcuses]);
                setSnackbarMessage('Excuse submitted!');
                setSeverity('success');
                setSnackbarOpen(true);
            }
            setSnackbarOpen(true);
            resetForm();
        }


    }

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
            <Card className="form" sx={{
                width: "75vw",
                margin: "0 auto",
                marginTop: "5vh",
                p: "2vh 2.5vw"


            }}>
                <Box className="form-header" sx={{
                    m: "2vh 0"
                }}>
                    <Typography>Input excuse parameters</Typography>
                </Box>


                <Box className="first-row">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel required>Language</InputLabel>
                        <Select
                            value={language}
                            label="Language"
                            onChange={(event) => setLanguage(event.target.value)}
                        >
                            <MenuItem value="english"><em>English</em></MenuItem>


                            {/* Other options */}
                        </Select>
                        <FormHelperText>Choose desired language</FormHelperText>
                    </FormControl>


                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel required>Format</InputLabel>
                        <Select
                            value={format}
                            label="Format"


                            onChange={(event) => setFormat(event.target.value)}


                        >
                            <MenuItem value="text-message"><em>Text message</em></MenuItem>
                            <MenuItem value="email"><em>Email</em></MenuItem>
                            <MenuItem value="speech"><em>Speech</em></MenuItem>
                            <MenuItem value="formal-apology"><em>Formal apology</em></MenuItem>

                        </Select>
                        <FormHelperText>Choose desired format</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel required>Formality</InputLabel>
                        <Select
                            value={formality}
                            label="Formality"
                            displayEmpty
                            onChange={(event) => setFormality(event.target.value)}


                        >
                            <MenuItem value="1"><em>1</em></MenuItem>
                            <MenuItem value="2"><em>2</em></MenuItem>
                            <MenuItem value="3"><em>3</em></MenuItem>
                            <MenuItem value="4"><em>4</em></MenuItem>
                            <MenuItem value="5"><em>5</em></MenuItem>
                            <MenuItem value="6"><em>6</em></MenuItem>
                            <MenuItem value="7"><em>7</em></MenuItem>
                            <MenuItem value="8"><em>8</em></MenuItem>
                            <MenuItem value="9"><em>9</em></MenuItem>
                            <MenuItem value="10"><em>10</em></MenuItem>


                        </Select>
                        <FormHelperText>Choose desired formality</FormHelperText>
                    </FormControl>


                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel required>Excuse strength</InputLabel>
                        <Select
                            value={excuseStrength}
                            label="ExcuseStrength"
                            displayEmpty
                            onChange={(event) => setExcuseStrength(event.target.value)}


                        >
                            <MenuItem value="1"><em>1</em></MenuItem>
                            <MenuItem value="2"><em>2</em></MenuItem>
                            <MenuItem value="3"><em>3</em></MenuItem>
                            <MenuItem value="4"><em>4</em></MenuItem>
                            <MenuItem value="5"><em>5</em></MenuItem>
                            <MenuItem value="6"><em>6</em></MenuItem>
                            <MenuItem value="7"><em>7</em></MenuItem>
                            <MenuItem value="8"><em>8</em></MenuItem>
                            <MenuItem value="9"><em>9</em></MenuItem>
                            <MenuItem value="10"><em>10</em></MenuItem>


                        </Select>
                        <FormHelperText>Choose desired excuse strength</FormHelperText>
                    </FormControl>


                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel required>Specificity</InputLabel>
                        <Select
                            value={specificity}
                            label="Specificity"
                            displayEmpty
                            onChange={(event) => setSpecificity(event.target.value)}


                        >
                            <MenuItem value="1"><em>1</em></MenuItem>
                            <MenuItem value="2"><em>2</em></MenuItem>
                            <MenuItem value="3"><em>3</em></MenuItem>
                            <MenuItem value="4"><em>4</em></MenuItem>
                            <MenuItem value="5"><em>5</em></MenuItem>
                            <MenuItem value="6"><em>6</em></MenuItem>
                            <MenuItem value="7"><em>7</em></MenuItem>
                            <MenuItem value="8"><em>8</em></MenuItem>
                            <MenuItem value="9"><em>9</em></MenuItem>
                            <MenuItem value="10"><em>10</em></MenuItem>


                        </Select>
                        <FormHelperText>Choose desired specificity</FormHelperText>
                    </FormControl>


                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel required>Length</InputLabel>
                        <Select
                            value={length}
                            label="Length"
                            onChange={(event) => setLength(event.target.value)}


                        >
                            <MenuItem value="very-short"><em>Very Short</em></MenuItem>
                            <MenuItem value="short"><em>Short</em></MenuItem>
                            <MenuItem value="medium"><em>Medium</em></MenuItem>
                            <MenuItem value="long"><em>Long</em></MenuItem>


                        </Select>
                        <FormHelperText>Choose desired length</FormHelperText>
                    </FormControl>
                </Box>


                <Box className="second-row" sx={{
                    marginTop: "2vh"
                }}>
                    <TextField id="outlined-basic" value={context} inputProps={{ maxLength: 100 }} label="Enter the context for excuse" variant="outlined" sx={{
                        width: "51.5vw"
                    }} onChange={(event) => {
                        setContext(event?.target.value)
                    }} />


                </Box>


                <Box className="third-row" sx={{
                    marginTop: "2vh"
                }}>
                    <Button variant="contained" sx={{


                    }} onClick={handleSubmit}>Submit</Button>


                </Box >
                < Snackbar onClose={handleCloseSnackbar} open={snackbarOpen} autoHideDuration={6000} >
                    <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>


            </Card >
            <Box >
                {loading ? (
                    <CircularProgress sx={{ display: 'flex', textAlign: "center", margin: "0 auto", width: "95vw", marginTop: "2vh" }} />
                ) : (null)}
            </Box>
        </>



    )
}


export default Form;


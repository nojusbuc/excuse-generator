import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CopyToClipboardButton from '../buttons/CopyToClipboardBtn';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Grid from '@mui/material/Grid';
import React from 'react';

interface ExcuseCardProps {
    title: string;
    dateCreated: string;
    content: string;
    deleteExcuse: () => void;
}

const ExcuseCard: React.FC<ExcuseCardProps> = ({ title, dateCreated, content, deleteExcuse }) => {
    return (
        <Card sx={{
            minWidth: 275,
            margin: "0 auto",
            width: "80vw",
            marginTop: "2vh",
        }}>
            <CardContent sx={{
                display: "flex",
                flexDirection: "column",

            }}>

                <Box sx={{ display: 'flex', borderBottom: "1px solid black", alignItems: "baseline" }}>

                    <Typography sx={{ fontSize: 18, p: "0" }} color="text.secondary" >
                        {title}
                    </Typography>

                    <Grid item xs={8} sx={{ marginRight: 0, marginLeft: "auto" }}>
                        <Button sx={{ color: "red", margin: 0 }} onClick={deleteExcuse}>
                            <DeleteOutlinedIcon />
                        </Button>
                    </Grid>

                </Box>

                <Typography sx={{ fontSize: 14, textAlign: "left", marginTop: "1vh" }} color="text.secondary">
                    {dateCreated}
                </Typography>


                <Box sx={{ display: 'flex', marginTop: "1vh", alignItems: "center", textAlign: "left" }}>

                    <Typography sx={{ fontSize: 14, alignItems: "baseline" }} color="text.secondary" gutterBottom>
                        {content}
                    </Typography>

                    <Box sx={{ marginLeft: 'auto', }}>

                        <CopyToClipboardButton text={content} />

                    </Box>

                </Box>

            </CardContent>

        </Card >
    );
}


export default ExcuseCard;
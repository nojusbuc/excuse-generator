import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Navbar: React.FC = () =>{
    

    return (
        <AppBar position="static" sx={{ backgroundColor:"#000029",}}>
            <Container maxWidth="xl" sx={{
                width:"80vw",
                margin:"0 auto",
                textAlign:"center"
                
            }}>
                <Toolbar sx={{
                    textAlign: "center",
                    margin: "0 auto",
                }}>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        
                        sx={{
                            textAlign: "center",
                            margin: "0 auto",
                            padding: "0",
                            
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DevRope
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;

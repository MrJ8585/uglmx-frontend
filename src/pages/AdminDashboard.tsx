import { createTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import DrawerComponent from '../components/DrawerComponent';
import { AppBar } from '@mui/material';

import example from "../assets/example.png";
import UserCardComponent from '../components/UserCardComponent';


export default function AdminDashboard(){
        //Drawer para el telefono

    const [mobileOpen, setMobileOpen] = useState(false);

    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClosePhone = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEndPhone = () => {
        setIsClosing(false);
    };

    const handleDrawerTogglePhone = () => {
        if (!isClosing) {
        setMobileOpen(!mobileOpen);
        }
    };

    const theme = createTheme({
        palette: {
        primary: {
            light: '#EF333F',
            main: '#EF333F',
            dark: '#B0122B',
            contrastText: '#2B2B31',
        },
        secondary: {
            light: '#A5A9AC',
            main: '#A5A9AC',
            dark: '#5F646A',
            contrastText: '#FFFFFF',
        },
        },
    });
    return (
        <div className='h-screen w-screen overflow-hidden'>
            <AppBar position="fixed" className='h-[10%]' sx={{bgcolor: theme.palette.primary.main}}>
                <Toolbar className='h-[100%] items-center'>
                    {/* Boton para abrir el drawer en el telefono */}
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerTogglePhone}
                    edge="start"
                    sx={{ mr: 2}}
                    >
                    <MenuIcon />
                    </IconButton>
                    <img src={example} alt="Logo" className="h-[100%] w-auto"/>
                </Toolbar>
            </AppBar>
            {/* Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEndPhone}
                onClose={handleDrawerClosePhone}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                width: 200,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 200,
                    boxSizing: 'border-box',
                },
                }}
            >
                {DrawerComponent()}
            </Drawer>
            <div className='w-[100%] h-[100%] overflow-scroll no-scrollbar'>
                <div className='h-[10%] overflow-hidden'/>
                <div className='flex flex-col flex-nowrap md:flex-wrap md:flex-row items-center justify-evenly md:items-start h-[90%] w-[100%] no-scrollbar'>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>
                    <UserCardComponent correo='josea.solis@hotmail.com ' nombre='Jose Antonio Solis Molina'/>

                </div>
            </div>
        </div>
    )
}
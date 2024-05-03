import { 
    Avatar,
    Button,
    Divider,
    Drawer,
    IconButton,
    List, 
    ListItem, 
    Toolbar, 
    Typography, 
} from "@mui/material";

import LockIcon from '@mui/icons-material/Lock';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import TableComponent from "./TableComponent";
import { useState } from "react";
import FolioDrawerComponent from "./FolioDrawerComponent";


export default function TableInfoComponent(){
    
    //Drawer para ingresar nuevo folio
    const [openDrawerFolio, setOpenDrawerFolio] = useState(false);

    const toggleDrawerFolio = (newState: boolean) => () => {
        setOpenDrawerFolio(newState);
    };

    //Ver si es telefono
    const isMobile = window.innerWidth < 768;
    const DrawerWidth = isMobile ? '100%' : '50%';

    return(
        <div className='flex flex-col min-h-[100%] w-[100%] bg-[#F5F5F5] overflow-y-visible overflow-x-hidden'>
            <Toolbar className='flex flex-col md:flex-row justify-between items-center'>
                <Typography variant="h6" noWrap component="div">
                    Title
                </Typography>
                <List className="flex flex-row" disablePadding>
                    <ListItem>
                        <IconButton aria-label="lock" >
                            <LockIcon />
                            <ArrowDropDownIcon />
                        </IconButton>
                    </ListItem>
                    <ListItem>
                        <Button variant="text" className="">
                            Activity
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" 
                                sx={{ 
                                    marginLeft: '10px', // Ajusta el margen izquierdo para separar el texto del Avatar
                                    width: 24, 
                                    height: 24 
                                }}
                            />
                        </Button>
                    </ListItem>
                </List>
            </Toolbar>
            <Divider variant="middle"/>
            <div className="grid grid-cols-2 gap-4 px-4 m-4 md:m-0 md:my-4 md:flex md:flex-row md:px-4">
                <Button variant="contained" className="py-4" onClick={toggleDrawerFolio(true)}>
                    New Folio
                </Button>
                <Button variant="text" startIcon={<SearchIcon />} className="py-4">
                    Search
                </Button>
                <Button variant="text" startIcon={<FilterAltIcon />} className="py-4">
                    Filter
                </Button>
                <Button variant="text" startIcon={<SwapVertIcon />} className="py-4">
                    Sort
                </Button>
            </div>
            <div className="w-[95%] px-5 no-scrollbar">
                <TableComponent />
            </div>

            {/* Drawer para agregar nuevo folio*/}
            <Drawer
                anchor="right"
                variant="temporary"
                open={openDrawerFolio}
                onClose={toggleDrawerFolio(false)}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                width: 200,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DrawerWidth,
                    boxSizing: 'border-box',
                },
                }}
            >
                <FolioDrawerComponent toggleDrawerFolio={toggleDrawerFolio} />
            </Drawer>
        </div>
    )
}

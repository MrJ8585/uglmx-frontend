import { Box, 
    Divider, 
    FormControl, 
    InputLabel, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    MenuItem, 
    Select, 
    SelectChangeEvent,
    createTheme,
} from "@mui/material"
import { upperSidebar } from "../assets/upperSidebar"
import { useState } from "react";

function DrawerComponent(){

    const [company, setCompany] = useState('');

    //Select component
    const handleChange = (event: SelectChangeEvent) => {
        setCompany(event.target.value as string);
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
        <div className= {`h-screen w-[100%]`} >
        <Box sx={{ overflow: 'auto', height: '100%' }}>
                <List className="shadow-md">
                    {upperSidebar.map((item) => (
                        <ListItem key={item.title} disableGutters disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <div className='m-4'>
                    <FormControl fullWidth>
                        <InputLabel id="company-select-label">
                            Company
                        </InputLabel>
                        <Select
                            labelId="company-select-label"
                            id="company-select"
                            value={company}
                            label="Company"
                            onChange={handleChange}
                        >
                            <MenuItem value={'UGL'}>UGL</MenuItem>
                            <MenuItem value={'Monday'}>Monday</MenuItem>
                            <MenuItem value={'Sanctuary'}>Sanctuary</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Box>
        </div>
    )
}

export default DrawerComponent;
import { 
    Container, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Typography, 
    Select, 
    SelectChangeEvent 
} from "@mui/material";

import { useState } from "react";

interface Props{
    label: string;
    width: string;
    options: string[];
}

export default function FolioDrawerInputComponent(props : Props) {

    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <Container 
            sx={{
                display:'flex',width: '100%', justifyContent: 'center', alignItems:'center',
                flexDirection:'column', gap:'5px', 
            }}>
            <Typography variant="subtitle1">
                {props.label}
            </Typography>
            <FormControl sx={{ width: props.width }}>
                <InputLabel id="testInput">test</InputLabel>
                <Select
                    labelId={props.label}
                    id={props.label}
                    value={value}
                    label={props.label}
                    onChange={handleChange}
                >
                    {props.options.map((option, index) => (
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Container>
    )
}
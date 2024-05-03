import { 
    Container, 
    FormControl, 
    InputAdornment, 
    InputLabel, 
    OutlinedInput, 
    Typography 
} from "@mui/material";

interface Props{
    label: string;
    width: string;
}

export default function FolioDrawerAmountComponent(props : Props) {
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
                <InputLabel htmlFor="standard-adornment-amount">{props.label}</InputLabel>
                <OutlinedInput 
                    id={props.label}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label={props.label}
                />
            </FormControl>
        </Container>
    )
}
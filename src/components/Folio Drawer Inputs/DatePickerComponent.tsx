import { Container, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface Props {
    label: string;
    width: string;
}
export default function DatePickerComponent(props: Props){
    return(
        <Container 
            sx={{
                display:'flex',width: '100%', justifyContent: 'center', alignItems:'center',
                flexDirection:'column', gap:'5px', 
            }}>
            <Typography variant="subtitle1">
                {props.label}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker sx={{ width:props.width }} defaultValue={dayjs()} />
            </LocalizationProvider>
        </Container>
    )
}
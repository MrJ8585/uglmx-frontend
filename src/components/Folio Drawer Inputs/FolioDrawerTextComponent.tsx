import { Container, TextField, Typography } from "@mui/material";

interface Props{
    label: string;
    width: string;
}

export default function FolioDrawerTextComponent(props : Props) {
    return (
        <Container 
            sx={{
                display:'flex',width: '100%', justifyContent: 'center', alignItems:'center',
                flexDirection:'column', gap:'5px', 
            }}>
            <Typography variant="subtitle1">
                {props.label}
            </Typography>
            <TextField sx={{ width: props.width }} />
        </Container>
    )
}
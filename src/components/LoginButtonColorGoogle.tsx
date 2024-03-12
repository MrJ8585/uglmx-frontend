import EastIcon from '@mui/icons-material/East';
import LoadingButton from '@mui/lab/LoadingButton';


interface Props {
    loading: boolean;
    handleLogin: () => void;
}


function LoginButtonColorGoogle(props: Props) {
  return (
    <LoadingButton
        variant="contained"
        endIcon={<EastIcon />}
        className="w-full"
        onClick={props.handleLogin}
        loading={props.loading}
        sx={{
            width: '100%',
            bgcolor: '#4285F4',
            '&:hover': {
                bgcolor: '#4285F4',
                opacity: 0.9,
            },
            '&:focus': {
                ring: 4,
                outline: 'none',
                ringColor: '#4285F4',
                ringOpacity: 0.5,
            },
            borderRadius: '8px', // Rounded corners
            fontSize: '14px', // Font size
            px: 5, // Horizontal padding
            py: 2.5, // Vertical padding
            textAlign: 'center', // Center text
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mr: 2, // Margin right
            mb: 2, // Margin bottom
        }}
        >
        </LoadingButton>
                        
    )};

export default LoginButtonColorGoogle;
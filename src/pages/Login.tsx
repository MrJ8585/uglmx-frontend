import React from "react";
import { useNavigate } from "react-router-dom";
import {Stack, Box, Container, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Typography} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import example from "../assets/example.png";
import logo2 from "../assets/logo2.png";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EastIcon from '@mui/icons-material/East';
import LoadingButton from '@mui/lab/LoadingButton';


function Login(){
    const theme = useTheme();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleLogin = () => {
        setLoading(!loading);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isLargeScreen = useMediaQuery('(min-width:1440px)');

    return (
        <div className="flex flex-col h-screen w-screen bg-white">
            <div className="flex flex-row justify-center md:justify-start h-[10%]">
                <img src={logo2} alt="Logo" className="h-[200%] w-auto z-10"/>
            </div>
            <div className="flex text-start items-center justify-center h-[90%]">
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    textAlign={"initial"}
                    borderRadius={6}
                    justifyContent={"center"}
                    sx={{
                        bgcolor: "white",
                        height: isSmallScreen ? '100%' : '90%',
                        width: isLargeScreen ? '50%' : (isSmallScreen ? '85%' : '40%'),
                    }}
                    >
                    <Stack
                        spacing={2}
                        display={"flex"}
                    >
                        <Stack 
                            spacing={isLargeScreen ? 4 : 2}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"} 
                            textAlign={"left"}
                            p={isLargeScreen ? 2 : 0}
                            >
                            <Typography variant={isLargeScreen ? 'h2' : 'h4'} sx={{ fontWeight: 'bold' }}>
                                Log <span className="font-thin">In</span>
                            </Typography>
                            <Typography variant={isLargeScreen ? 'subtitle1' : 'body2'} sx={{ fontWeight: '100' }}>                            
                            Uglmx
                            </Typography>
                        </Stack>
                        <TextField 
                            required
                            id="Email"
                            label="Email"
                            placeholder="example@uglmx.com"
                            fullWidth
                            size={isSmallScreen ? "small" : undefined}
                        />
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" size={isSmallScreen ? "small" : undefined}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                required
                                id="Password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <span className="text-blue-500 cursor-pointer">
                            <div className="flex items-center justify-start">
                                <Typography variant={isLargeScreen ? 'subtitle1' : 'body2'} onClick={() => navigate("/forgot-password")}>
                                    Olvidé mi contraseña
                                </Typography>
                                
                            </div>
                        </span>
                        <LoadingButton
                            variant="contained"
                            endIcon={<EastIcon />}
                            className="w-full"
                            onClick={handleLogin}
                            loading={loading}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ margin: 0 }}>Log In</p>
                            </div>
                        </LoadingButton>
                        <Stack
                            spacing={isLargeScreen ? 4 : 2}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"} 
                            textAlign={"left"}
                            p={isLargeScreen ? 2 : 0}
                            width={"100%"}
                        >
                            <div className="flex items-center justify-center w-[100%]">
                                <hr className="flex-1 my-0 mx-3 border-gray-400" style={{height: '1px'}}/>
                                <Typography variant={isLargeScreen ? 'subtitle1' : 'body2'} sx={{ fontWeight: '100' }}>
                                    O inicia sesión con Google
                                </Typography>
                                <hr className="flex-1 my-0 mx-3 border-gray-400" style={{height: '1px'}}/>
                            </div>
                            <div className="flex items-center justify-center rounded-lg dark:bg-gray-800">
                                <button className="items-center justify-center px-3Q py-1 md:px-4 md:py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                                    <img className="w-4 h-4 md:w-6 md:h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                                    <span className=" text-sm md:text-base">Login with Google</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-center w-[100%]">
                                <hr className="flex-1 my-0 mx-3 border-gray-300" style={{height: '3px'}}/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Typography variant={isLargeScreen ? 'subtitle1' : 'body2'} sx={{ fontWeight: '100' }}>
                                    ¿No tienes cuenta? 
                                </Typography>
                                <Typography variant={isLargeScreen ? 'subtitle1' : 'body2'} sx={{ fontWeight: 'bold', margin: '0 10px'}} onClick={() => navigate("/signup")}>
                                    Regístrate
                                </Typography>
                            </div>
                        </Stack>
                    </Stack>
                </Box>
            </div>
        </div>
      );
    }

export default Login;
import { 
    Avatar,
    Button, 
    Typography,
} from "@mui/material";

import sanctuary from "../assets/sanctuary.png";
import { Add, Delete } from "@mui/icons-material";

interface Props{
    correo: string;
    nombre: string;
}

export default function UserCardComponent(props: Props){
    return(
        <div 
            className="flex flex-col h-[40%] w-[90%] md:w-[45%] lg:w-[20%] m-2 bg-red-500 text-white rounded-md shadow-xl"
        >
            <div className="md:hidden flex justify-center items-center w-[100%] h-[40%]">
                <Avatar sx={{width:'25%', height:'auto', maxHeight:'100%'}} src={sanctuary} />
            </div>
            <div className="hidden md:flex justify-center items-center w-[100%] h-[40%]">
                <Avatar sx={{width:'35%', height:'auto', maxHeight:'100%'}} src={sanctuary} />
            </div>
            <div className="flex flex-col w-[100%] h-[60%] items-center justify-between">
                <Typography variant="caption" className="text-center">Correo: {props.correo}</Typography>
                <Typography variant="caption" className="text-center">Nombre: {props.nombre}</Typography>
                <div className="flex flex-col">
                    <Button className="my-2" size="small" variant="contained" color="success" endIcon={<Add />}>Agregar</Button>
                    <Button className="my-2" size="small" variant="contained" color="error" endIcon={<Delete />}>Eliminar</Button>
                </div>
            </div>
        </div>
    )
}
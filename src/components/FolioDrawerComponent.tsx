import { 
    Toolbar, 
    IconButton, 
    Box, 
    Button 
} from "@mui/material";

import { Close } from "@mui/icons-material";
import FolioDrawerInputComponent from "./FolioDrawerInputComponent";


interface Props {
    toggleDrawerFolio: (newState: boolean) => () => void; // Tipo explícito para toggleDrawerFolio
}

export default function FolioDrawerComponent( { toggleDrawerFolio } : Props ) {
    const isMobile = window.innerWidth < 768;
    const componentWidth = isMobile ? '80%' : '50%';

    return (
        <div className= "min-h-screen w-[100%] no-scrollbar">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawerFolio(false)}
                >
                    <Close />
                </IconButton>
            </Toolbar>
            <Box 
                sx={{
                width:'100%', display:'flex', justifyContent:'center', alignItems:'center',
                flexDirection:'column', gap:'20px'
                }}
            >
                <FolioDrawerInputComponent 
                    label="Fecha de Requisicion" 
                    width={componentWidth}
                    options={[]}
                    type={"DatePicker"} 
                />
                <FolioDrawerInputComponent 
                    label="Fecha de PO" 
                    width={componentWidth}
                    options={[]}
                    type={"DatePicker"} 
                />
                <FolioDrawerInputComponent 
                    label="Fecha de Pago" 
                    width={componentWidth}
                    options={[]}
                    type={"DatePicker"} 
                />
                <FolioDrawerInputComponent 
                    label="Tipo de PO" 
                    width={componentWidth}
                    options={["PO 1", "PO 2", "PO 3"]}
                    type={"Select"} 
                />
                <FolioDrawerInputComponent 
                    label="Pago" 
                    width={componentWidth}
                    options={["Pago 1", "Pago 2", "Pago 3"]}
                    type={"Select"} 
                />
                <FolioDrawerInputComponent 
                    label="Departamento" 
                    width={componentWidth}
                    options={["Departamento 1", "Departamento 2", "Departamento 3"]}
                    type={"Select"} 
                />
                <FolioDrawerInputComponent 
                    label="Nombre Comercial" 
                    width={componentWidth}
                    options={[]}
                    type={"Text"} 
                />
                <FolioDrawerInputComponent 
                    label="Razon Social" 
                    width={componentWidth}
                    options={[]}
                    type={"Text"} 
                />
                <FolioDrawerInputComponent 
                    label="RFC" 
                    width={componentWidth}
                    options={[]}
                    type={"Text"} 
                />
                <FolioDrawerInputComponent 
                    label="Banco" 
                    width={componentWidth}
                    options={["Banco 1", "Banco 2", "Banco 3"]}
                    type={"Select"} 
                />
                <FolioDrawerInputComponent 
                    label="Cuenta Bancaria" 
                    width={componentWidth}
                    options={[]}
                    type={"Text"} 
                />
                <FolioDrawerInputComponent 
                    label="Clave Interbancaria" 
                    width={componentWidth}
                    options={[]}
                    type={"Text"} 
                />
                <FolioDrawerInputComponent 
                    label="Terminos de Pago" 
                    width={componentWidth}
                    options={[]}
                    type={"Text"} 
                />
                <FolioDrawerInputComponent 
                    label="Costo" 
                    width={componentWidth}
                    options={[]}
                    type={"Amount"} 
                />
                <FolioDrawerInputComponent 
                    label="Estado" 
                    width={componentWidth}
                    options={["Estado 1", "Estado 2", "Estado 3"]}
                    type={"Select"} 
                />
                <FolioDrawerInputComponent 
                    label="Revision" 
                    width={componentWidth}
                    options={["Revision 1", "Revision 2", "Revision 3"]}
                    type={"Select"} 
                />
                <FolioDrawerInputComponent 
                    label="Autorizacion" 
                    width={componentWidth}
                    options={["Autorizacion 1", "Autorizacion 2", "Autorizacion 3"]}
                    type={"Select"} 
                />
                <FolioDrawerInputComponent 
                    label="Archivo de Pago" 
                    width={componentWidth}
                    options={[]}
                    type={"Text"} 
                />
                <FolioDrawerInputComponent 
                    label="Notificados" 
                    width={componentWidth}
                    options={["Notificados 1", "Notificados 2", "Notificados 3"]}
                    type={"Select"} 
                />
                <FolioDrawerInputComponent 
                    label="Estatus de Pago" 
                    width={componentWidth}
                    options={["Estatus de Pago 1", "Estatus de Pago 2", "Estatus de Pago 3"]}
                    type={"Select"} 
                />
                <Button variant="contained" sx={{width: componentWidth, height: '10%',marginY: 4}} onClick={toggleDrawerFolio(false)}>
                    Submit
                </Button>
                <div className="h-[10%]"/>
            </Box>
        </div>
    )
}
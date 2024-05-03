import { Tag, DatePicker } from 'antd';
import type { TableProps, DatePickerProps } from 'antd';
import dayjs from 'dayjs';

export interface maincolumnsType {
    key: React.Key;
    folio: number;
    subelementos_total: number;
    id_elemento: number;
    id_solicitud: string;
    num_oc: string;
    fecha_requisicion: string;
    fecha_po: string;
    fecha_pago: string;
    tipo_po: string;
    pago: string;
    solicitante: string;
    departamentos: string[];
    nombre_comercial: string;
    razon_social: string;
    rfc: string;
    banco: string;
    cuenta_banco: string;
    clave_interbancaria: string;
    terminos_pago: string;
    costo: number;
    estado: string;
    revision: string;
    autorizacion: string;
    archivo_pago: string;
    finalizado: string;
    notificados: string[];
    estatus_pago: string; 
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const maincolumns: TableProps<maincolumnsType>['columns'] = [
    {
        title: 'Folio',
        dataIndex: 'folio',
        key: 'folio',
        width: 200,
        render: (folio: number) => ( <span>{folio}</span> ),
    },
    {
        title: 'Subelementos Total',
        dataIndex: 'subelementos_total',
        key: 'subelementos_total',
        width: 200,
        render: (subelementos_total: number) => ( <span>{subelementos_total}</span> ),
    },
    {
        title: 'ID Elemento',
        dataIndex: 'id_elemento',
        key: 'id_elemento',
        width: 200,
        render: (id_elemento: number) => ( <span>{id_elemento}</span> ),
    },
    {
        title: 'ID Solicitud',
        dataIndex: 'id_solicitud',
        key: 'id_solicitud',
        width: 200,
        render: (id_solicitud: string) => ( <span>{id_solicitud}</span> ),
    },
    {
        title: 'Num OC',
        dataIndex: 'num_oc',
        key: 'num_oc',
        width: 200,
        render: (num_oc: string) => ( <span>{num_oc}</span> ),
    },
    {
        title: 'Fecha Requisición',
        dataIndex: 'fecha_requisicion',
        key: 'fecha_requisicion',
        width: 200,
        render: (fecha_requisicion: string) => ( <DatePicker onChange={onChange} defaultValue={dayjs(fecha_requisicion)}/>),
    },
    {
        title: 'Fecha PO',
        dataIndex: 'fecha_po',
        key: 'fecha_po',
        width: 200,
        render: (fecha_po: string) => ( <DatePicker onChange={onChange} defaultValue={dayjs(fecha_po)}/> ),
    },
    {
        title: 'Fecha Pago',
        dataIndex: 'fecha_pago',
        key: 'fecha_pago',
        width: 200,
        render: (fecha_pago: string) => ( <DatePicker onChange={onChange} defaultValue={dayjs(fecha_pago)}/> ),
    },
    {
        title: 'Tipo PO',
        dataIndex: 'tipo_po',
        key: 'tipo_po',
        width: 200,
        render: (tipo_po: string) => ( <span>{tipo_po}</span> ),
    },
    {
        title: 'Pago',
        dataIndex: 'pago',
        key: 'pago',
        width: 200,
        render: (pago: string) => ( <span>{pago}</span> ),
    },
    {
        title: 'Solicitante',
        dataIndex: 'solicitante',
        key: 'solicitante',
        width: 200,
        render: (solicitante: string) => ( <span>{solicitante}</span> ),
    },
    {
        title: 'Departamentos',
        dataIndex: 'departamentos',
        key: 'departamentos',
        width: 200,
        render: (_,{ departamentos } : { departamentos :string[]}) => (
            <>
                {departamentos.map((departamento) => {
                    let color = 'geekblue';
                    return (
                        <Tag color={color} key={departamento}>
                            {departamento.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Nombre Comercial',
        dataIndex: 'nombre_comercial',
        key: 'nombre_comercial',
        width: 200,
        render: (nombre_comercial: string) => ( <span>{nombre_comercial}</span> ),
    },
    {
        title: 'Razon Social',
        dataIndex: 'razon_social',
        key: 'razon_social',
        width: 200,
        render: (razon_social: string) => ( <span>{razon_social}</span> ),
    },
    {
        title: 'RFC',
        dataIndex: 'rfc',
        key: 'rfc',
        width: 200,
        render: (rfc: string) => ( <span>{rfc}</span> ),
    },
    {
        title: 'Banco',
        dataIndex: 'banco',
        key: 'banco',
        width: 200,
        render: (banco: string) => ( <span>{banco}</span> ),
    },
    {
        title: 'Cuenta Banco',
        dataIndex: 'cuenta_banco',
        key: 'cuenta_banco',
        width: 200,
        render: (cuenta_banco: string) => ( <span>{cuenta_banco}</span> ),
    },
    {
        title: 'Clave Interbancaria',
        dataIndex: 'clave_interbancaria',
        key: 'clave_interbancaria',
        width: 200,
        render: (clave_interbancaria: string) => ( <span>{clave_interbancaria}</span> ),
    },
    {
        title: 'Terminos Pago',
        dataIndex: 'terminos_pago',
        key: 'terminos_pago',
        width: 200,
        render: (terminos_pago: string) => ( <span>{terminos_pago}</span> ),
    },
    {
        title: 'Costo',
        dataIndex: 'costo',
        key: 'costo',
        width: 200,
        render: (costo: number) => ( <span>{costo}</span> ),
    },
    {
        title: 'Estado',
        dataIndex: 'estado',
        key: 'estado',
        width: 200,
        render: (estado: string) => ( <span>{estado}</span> ),
    },
    {
        title: 'Revision',
        dataIndex: 'revision',
        key: 'revision',
        width: 200,
        render: (revision: string) => ( <span>{revision}</span> ),
    },
    {
        title: 'Autorizacion',
        dataIndex: 'autorizacion',
        key: 'autorizacion',
        width: 200,
        render: (autorizacion: string) => ( <span>{autorizacion}</span> ),
    },
    {
        title: 'Archivo Pago',
        dataIndex: 'archivo_pago',
        key: 'archivo_pago',
        width: 200,
        render: (archivo_pago: string) => ( <span>{archivo_pago}</span> ),
    },
    {
        title: 'Finalizado',
        dataIndex: 'finalizado',
        key: 'finalizado',
        width: 200,
        render: (finalizado: string) => ( <span>{finalizado}</span> ),
    },
    {
        title: 'Notificados',
        dataIndex: 'notificados',
        key: 'notificados',
        width: 200,
        render: (_,{ notificados }: { notificados: string[] }) => (
            <>
                {notificados.map((notificado) => {
                    return (
                        <a key={notificado}>help</a>
                    )
                })}
            </>
        )
    },
    {
        title: 'Estatus Pago',
        dataIndex: 'estatus_pago',
        key: 'estatus_pago',
        width: 200,
        render: (estatus_pago: string) => ( <span>{estatus_pago}</span> ),
    },
  ];

export default maincolumns;
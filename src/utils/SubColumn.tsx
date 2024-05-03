import { TableProps } from 'antd/lib/table';

export interface subcolumnsType {
    key: React.Key;
    subelemento: string;
    cotizacion: string;
    factura: string;
    fecha: string;
    subtotal: number;
    iva: number;
    retencion: number;
    total: number;
    moneda: string;
}

const subcolumns: TableProps<subcolumnsType>['columns'] = [
    {
        title: 'Subelemento',
        dataIndex: 'subelemento',
        key: 'subelemento',
        render: (subelemento: string) => ( <span>{subelemento}</span> ),
    },
    {
        title: 'Cotización',
        dataIndex: 'cotizacion',
        key: 'cotizacion',
        render: (cotizacion: string) => ( <span>{cotizacion}</span> ),
    },
    {
        title: 'Factura',
        dataIndex: 'factura',
        key: 'factura',
        render: (factura: string) => ( <span>{factura}</span> ),
    },
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
        render: (fecha: string) => ( <span>{fecha}</span> ),
    },
    {
        title: 'Subtotal',
        dataIndex: 'subtotal',
        key: 'subtotal',
        render: (subtotal: number) => ( <span>{subtotal}</span> ),
    },
    {
        title: 'IVA',
        dataIndex: 'iva',
        key: 'iva',
        render: (iva: number) => ( <span>{iva}</span> ),
    },
    {
        title: 'Retencion',
        dataIndex: 'retencion',
        key: 'retencion',
        render: (retencion: number) => ( <span>{retencion}</span> ),
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: (total: number) => ( <span>{total}</span> ),
    },
    {
        title: 'Moneda',
        dataIndex: 'moneda',
        key: 'moneda',
        render: (moneda: string) => (<span>{moneda}</span> ),
    },
];

export default subcolumns;
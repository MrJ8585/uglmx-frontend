import { Table } from 'antd';
import maincolumns from '../utils/MainColumn';
import { subcolumnsType } from '../utils/SubColumn';
import subcolumns from '../utils/SubColumn';
import { exampleMainEntries } from '../utils/MainColumnsTestData';

export default function TableComponent() {
    
    const nestedTableRender = () => {
        const exampleEntries: subcolumnsType[] = [
            {
                key: '1',
                subelemento: 'Subelemento A',
                cotizacion: 'COT-123',
                factura: 'FACT-001',
                fecha: '2024-04-25',
                subtotal: 1000,
                iva: 160,
                retencion: 50,
                total: 1110,
                moneda: 'USD',
            },
            {
                key: '2',
                subelemento: 'Subelemento B',
                cotizacion: 'COT-456',
                factura: 'FACT-002',
                fecha: '2024-04-26',
                subtotal: 1500,
                iva: 240,
                retencion: 75,
                total: 1665,
                moneda: 'EUR',
            },
            {
                key: '3',
                subelemento: 'Subelemento C',
                cotizacion: 'COT-789',
                factura: 'FACT-003',
                fecha: '2024-04-27',
                subtotal: 2000,
                iva: 320,
                retencion: 100,
                total: 2220,
                moneda: 'GBP',
            },
        ];

        return <Table bordered columns={subcolumns} dataSource={exampleEntries} pagination={false} />;
    }

    

    return (
        <div className='w-[100%] no-scrollbar'>
            <Table
                className='no-scrollbar'
                bordered
                columns={maincolumns}
                expandable={{ expandedRowRender: nestedTableRender, defaultExpandedRowKeys: ['0'] }}
                dataSource={exampleMainEntries} 
                scroll={{y: 400}}
            />
        </div>
    );
}

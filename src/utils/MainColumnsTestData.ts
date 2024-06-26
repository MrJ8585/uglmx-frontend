import { maincolumnsType } from './MainColumn';
export var exampleMainEntries: maincolumnsType[] = [
    {
        key: '1',
        folio: 1,
        subelementos_total: 3,
        id_elemento: 123,
        id_solicitud: 'SOL-001',
        num_oc: 'OC-001',
        fecha_requisicion: '2024-04-25',
        fecha_po: '2024-04-26',
        fecha_pago: '2024-05-01',
        tipo_po: 'Tipo A',
        pago: 'Pagado',
        solicitante: 'Juan Perez',
        departamentos: ['Departamento A', 'Departamento B'],
        nombre_comercial: 'Empresa XYZ',
        razon_social: 'XYZ S.A. de C.V.',
        rfc: 'XYZ123456789',
        banco: 'Banco ABC',
        cuenta_banco: '1234567890',
        clave_interbancaria: '0123456789',
        terminos_pago: 'Neto 30',
        costo: 1500,
        estado: 'Activo',
        revision: 'Revisado',
        autorizacion: 'Autorizado',
        archivo_pago: 'pago.pdf',
        finalizado: 'Si',
        notificados: ['Usuario A', 'Usuario B'],
        estatus_pago: 'Completado',
    },
    {
        key: '2',
        folio: 2,
        subelementos_total: 2,
        id_elemento: 456,
        id_solicitud: 'SOL-002',
        num_oc: 'OC-002',
        fecha_requisicion: '2024-04-27',
        fecha_po: '2024-04-28',
        fecha_pago: '2024-05-03',
        tipo_po: 'Tipo B',
        pago: 'Pendiente',
        solicitante: 'Maria Gomez',
        departamentos: ['Departamento C', 'Departamento D'],
        nombre_comercial: 'Empresa ABC',
        razon_social: 'ABC S.A. de C.V.',
        rfc: 'ABC123456789',
        banco: 'Banco XYZ',
        cuenta_banco: '0987654321',
        clave_interbancaria: '9876543210',
        terminos_pago: 'Neto 60',
        costo: 2000,
        estado: 'Inactivo',
        revision: 'No revisado',
        autorizacion: 'Pendiente',
        archivo_pago: '',
        finalizado: 'No',
        notificados: ['Usuario C', 'Usuario D'],
        estatus_pago: 'Pendiente',
    },
    {
        key: '3',
        folio: 3,
        subelementos_total: 1,
        id_elemento: 789,
        id_solicitud: 'SOL-003',
        num_oc: 'OC-003',
        fecha_requisicion: '2024-04-29',
        fecha_po: '2024-04-30',
        fecha_pago: '2024-05-05',
        tipo_po: 'Tipo C',
        pago: 'Pagado',
        solicitante: 'Pedro Martinez',
        departamentos: ['Departamento E', 'Departamento F'],
        nombre_comercial: 'Empresa QRS',
        razon_social: 'QRS S.A. de C.V.',
        rfc: 'QRS123456789',
        banco: 'Banco DEF',
        cuenta_banco: '1357924680',
        clave_interbancaria: '2468135790',
        terminos_pago: 'Neto 45',
        costo: 1000,
        estado: 'En revisión',
        revision: 'En revisión',
        autorizacion: 'Pendiente',
        archivo_pago: 'pago2.pdf',
        finalizado: 'No',
        notificados: ['Usuario E', 'Usuario F'],
        estatus_pago: 'Completado',
    },
];


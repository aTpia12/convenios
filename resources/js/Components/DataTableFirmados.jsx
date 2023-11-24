import {useEffect} from 'react'
import ExtraModal from "@/Components/ExtraModal.jsx";

const DataTableFirmados = ({firmados, auth}) => {

    useEffect(() => {
        new DataTable('#firmados', {
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/es-MX.json',
            },
            fixedColumns: {
                left: 2,
            },
            scrollX: true
        });
    }, [])

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <table id="firmados" className="stripe row-border order-column" style={{"width": "100%"}}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del Convenio y/o Contrato</th>
                            <th>Tipo de Instrumento</th>
                            <th>Materia</th>
                            <th>Partes</th>
                            <th>Personalidad de la otra Parte</th>
                            <th>Estatus</th>
                            <th>% Avance</th>
                            <th>Fuentes de Financiamiento</th>
                            <th>Monto de la aportación Federal</th>
                            <th>Monto de la aportación Estatal</th>
                            <th>Monto de la aportación del Sector Privado</th>
                            <th>Monto de la aportación de Organismos Autónomos</th>
                            <th>Fecha de Firma</th>
                            <th>Fecha vigencia</th>
                            <th>Comentarios y/o Observaciones</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            firmados.map(firmado => (
                                <tr>
                                    <td>{firmado.number}</td>
                                    <td>{firmado.name}</td>
                                    <td>{firmado.type}</td>
                                    <td>{firmado.subject}</td>
                                    <td>{firmado.parts}</td>
                                    <td>{firmado.parts_two}</td>
                                    <td>{firmado.status}</td>
                                    <td>{firmado.average}</td>
                                    <td>{firmado.finance_font}</td>
                                    <td>{firmado.federal_amount}</td>
                                    <td>{firmado.state_amount}</td>
                                    <td>{firmado.private_amount}</td>
                                    <td>{firmado.auto_amount}</td>
                                    <td>{firmado.date_sign}</td>
                                    <td>{firmado.expired}</td>
                                    <td>{firmado.comments}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <center>
                <ExtraModal
                    auth={auth}
                />
            </center>
        </div>
    )
}
export default DataTableFirmados

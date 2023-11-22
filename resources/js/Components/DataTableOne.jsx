import React, {useEffect} from 'react'
import ExtraModal from "@/Components/ExtraModal.jsx";
const DataTableOne = ({agreements, auth}) => {

    useEffect(() => {
        new DataTable('#documents', {
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/es-MX.json',
            },
            fixedColumns: {
                left: 2,
            },
            scrollX: true
        });
    }, [])

    const handleAddAgreement = () => {
        document.querySelector('#extralarge-modal').style.display = 'block';
    }

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <button onClick={handleAddAgreement} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">Agregar</button>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <table id="documents" className="stripe row-border order-column" style={{"width": "100%"}}>
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
                            agreements.map(agreement => (
                                <tr>
                                    <td>{agreement.number}</td>
                                    <td>{agreement.name}</td>
                                    <td>{agreement.type}</td>
                                    <td>{agreement.subject}</td>
                                    <td>{agreement.parts}</td>
                                    <td>{agreement.parts_two}</td>
                                    <td>{agreement.status}</td>
                                    <td>{agreement.average}</td>
                                    <td>{agreement.finance_font}</td>
                                    <td>{agreement.federal_amount}</td>
                                    <td>{agreement.state_amount}</td>
                                    <td>{agreement.private_amount}</td>
                                    <td>{agreement.auto_amount}</td>
                                    <td>{agreement.date_sign}</td>
                                    <td>{agreement.expired}</td>
                                    <td>{agreement.comments}</td>
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
export default DataTableOne

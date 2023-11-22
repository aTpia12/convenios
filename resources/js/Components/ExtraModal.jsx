import {useForm} from "@inertiajs/react";

const ExtraModal = ({auth}) => {

    const {data, setData, post} = useForm(
        {
            user_id: auth,
            number : '',
            name : '',
            type : '',
            subject : '',
            parts : '',
            parts_two : '',
            status : '',
            average : '',
            finance_font : '',
            federal_amount : '',
            state_amount : '',
            private_amount : '',
            auto_amount : '',
            date_sign : '',
            expired : '',
            comments : '',
        }
    );

    const handleAddAgreementClose = () => {
        document.querySelector('#extralarge-modal').style.display = 'none';
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const {
            number,
            name,
            type,
            subject,
            parts,
            parts_two,
            status,
            average,
            finance_font,
            federal_amount,
            state_amount,
            private_amount,
            auto_amount,
            comments} = data;

        if([
            number,
            name,
            type,
            subject,
            parts,
            parts_two,
            status,
            average,
            finance_font,
            federal_amount,
            state_amount,
            private_amount,
            auto_amount,
            comments
        ].includes(''))
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No puede haber campos vacios!"
            });
        }else{
            post(route('user-dashboard.store'))
            handleAddAgreementClose()
        }
    }

    return (
        <div id="extralarge-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-scroll md:inset-0  h-[700px]">
            <div className="relative w-full max-w-7xl max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Agregar Convenio-contrato
                        </h3>
                        <button onClick={handleAddAgreementClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <form>
                        <div>
                            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">#</label>
                            <input
                                onChange={(e) => setData('number', e.target.value)}
                                type="number" min="1" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Número" required />
                        </div><br/>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Convenio y/o Contrato</label>
                                <input
                                    onChange={(e) => setData('name', e.target.value)}
                                    type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del Convenio y/o Contrato" required />
                            </div>
                            <div>
                                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Instrumento</label>
                                <select
                                    onChange={(e) => setData('type', e.target.value)}
                                    id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Selecciona Instrumento</option>
                                    <option value="Convenio">Convenio</option>
                                    <option value="Carta de Intención de colaboración">Carta de Intención de colaboración</option>
                                    <option value="Contrato">Contrato</option>
                                    <option value="Acuerdo">Acuerdo</option>
                                    <option value="Convenio de Coordinación">Convenio de Coordinación</option>
                                    <option value="Instrumento de colaboración">Instrumento de colaboración</option>
                                    <option value="Otro">Otro</option>
                                </select>

                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Materia</label>
                                <select
                                    onChange={(e) => setData('subject', e.target.value)}
                                    id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Selecciona Materia</option>
                                    <option value="Artesanias">Artesanias</option>
                                    <option value="Desarrollo Económico">Desarrollo Económico</option>
                                    <option value="Servicios Personales">Servicios Personales</option>
                                    <option value="Infraestructura social">Infraestructura social</option>
                                    <option value="Civil">Civil</option>
                                    <option value="Educación">Educación</option>
                                    <option value="Turismo">Turismo</option>
                                    <option value="Administrativa">Administrativa</option>
                                    <option value="Catastral">Catastral</option>
                                    <option value="Servicio Social">Servicio Social</option>
                                    <option value="Alimentación">Alimentación</option>
                                    <option value="Compra Venta">Compra Venta</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="parts" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partes</label>
                                <select
                                    onChange={(e) => setData('parts', e.target.value)}
                                    id="parts" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Selecciona Parte</option>
                                    <option value="Secretaría de Gobierno (SEGOB)">Secretaría de Gobierno (SEGOB)</option>
                                    <option value="Secretaría de Administración y finanzas (SAFIN)">Secretaría de Administración y finanzas (SAFIN)</option>
                                    <option value="Secretaría de Modernización Administrativa e Innovación Gubernamental">Secretaría de Modernización Administrativa e Innovación Gubernamental</option>
                                    <option value="Secretaría de Educación (SEDUC)">Secretaría de Educación (SEDUC)</option>
                                    <option value="Secretaría de Salud">Secretaría de Salud</option>
                                    <option value="Secretaría de Desarrollo Urbano, Movilidad y Obras Públicas (SEDUMOP)">Secretaría de Desarrollo Urbano, Movilidad y Obras Públicas (SEDUMOP)</option>
                                    <option value="Secretaría de Bienestar">Secretaría de Bienestar</option>
                                    <option value="Secretaría de Desarrollo Económico (SEDECO)">Secretaría de Desarrollo Económico (SEDECO)</option>
                                    <option value="Secretaría de Desarrollo Agropecuario">Secretaría de Desarrollo Agropecuario</option>
                                    <option value="Secretaría de Inclusión">Secretaría de Inclusión</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="parts_two" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personalidad de la Otra Parte</label>
                                <select
                                    onChange={(e) => setData('parts_two', e.target.value)}
                                    id="parts_two" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Selecciona Otra Parte</option>
                                    <option value="Federal">Federal</option>
                                    <option value="Estatal">Estatal</option>
                                    <option value="Persona Física">Persona Física</option>
                                    <option value="Persona Moral">Persona Moral</option>
                                    <option value="Organismo Público Descentralizado">Organismo Público Descentralizado</option>
                                    <option value="Diplomática">Diplomática</option>
                                    <option value="Municipal">Municipal</option>
                                    <option value="Fedral/Estatal">Fedral/Estatal</option>
                                    <option value="Federal/Municipal">Federal/Municipal</option>
                                    <option value="Legislativo">Legislativo</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estatus</label>
                                <select
                                    onChange={(e) => setData('status', e.target.value)}
                                    id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Selecciona Estatus</option>
                                    <option value="En análisis">En análisis</option>
                                    <option value="En trámite">En trámite</option>
                                    <option value="Firmado">Firmado</option>
                                    <option value="En elaboración">En elaboración</option>
                                    <option value="Concluido">Concluido</option>
                                    <option value="En visado">En visado</option>
                                    <option value="En revisión">En revisión</option>
                                    <option value="Pendiente por contratar">Pendiente por contratar</option>
                                    <option value="En periodo de gracia para iniciar pagos mensuales de la nave">En periodo de gracia para iniciar pagos mensuales de la nave</option>
                                    <option value="Mensualidades atrasadas">Mensualidades atrasadas</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="average" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">% Avance</label>
                                <input
                                    onChange={(e) => setData('average', e.target.value)}
                                    type="number" id="average" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="% Avance" required />
                            </div>
                            <div>
                                <label htmlFor="finance_font" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fuentes de Financiamiento</label>
                                <select
                                    onChange={(e) => setData('finance_font', e.target.value)}
                                    id="finance_font" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Selecciona fuente de Financiamiento</option>
                                    <option value="Ninguna">Ninguna</option>
                                    <option value="Federal">Federal</option>
                                    <option value="Estatal">Estatal</option>
                                    <option value="Sector Privado">Sector Privado</option>
                                    <option value="Organismos Autónomos">Organismos Autónomos</option>
                                    <option value="Federal/Estatal">Federal/Estatal</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="federal_amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto de la Aportación Federal</label>
                                <input type="number"
                                       onChange={(e) => setData('federal_amount', e.target.value)}
                                       id="federal_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Monto de la Aportación Federal" required />
                            </div>
                            <div>
                                <label htmlFor="state_amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto de la Aportación Estatal</label>
                                <input type="number"
                                       onChange={(e) => setData('state_amount', e.target.value)}
                                       id="state_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Monto de la Aportación Estatal" required />
                            </div>
                            <div>
                                <label htmlFor="private_amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto de la Aportación del Sector Privado</label>
                                <input type="number"
                                       onChange={(e) => setData('private_amount', e.target.value)}
                                       id="private_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Monto de la Aportación del Sector Privado" required />
                            </div>
                            <div>
                                <label htmlFor="auto_amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto de la Aportación de Organismos Autónomos</label>
                                <input type="number"
                                       onChange={(e) => setData('auto_amount', e.target.value)}
                                       id="auto_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Monto de la Aportación de Organismos Autónomos" required />
                            </div>
                            <div>
                                <label htmlFor="date_sign" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Firma</label>
                                <input
                                    onChange={(e) => setData('date_sign', e.target.value)}
                                    type="date" id="date_sign" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="% Avance" required />
                            </div>
                            <div>
                                <label htmlFor="expired" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha vigencia</label>
                                <input type="date"
                                       onChange={(e) => setData('expired', e.target.value)}
                                       id="expired" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="% Avance" required />
                            </div>
                            <div>
                                <label htmlFor="comments" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comentarios y Observaciones</label>
                                <textarea
                                    onChange={(e) => setData('comments', e.target.value)}
                                    id="comments" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comentario y observaciones" required></textarea>
                            </div>
                        </div>
                    </form>

                    <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={handleSubmitForm} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExtraModal

import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import DataTableFirmados from "@/Components/DataTableFirmados.jsx";

const Firmados = ({auth, firmados}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Firmados</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <DataTableFirmados
                        auth={auth}
                        firmados={firmados}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
export default Firmados

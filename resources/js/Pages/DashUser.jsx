import React from 'react'
import UserAuthenticatedLayout from "@/Layouts/UserAuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import DataTableOne from "@/Components/DataTableOne.jsx";

const DashUser = ({auth, agreements}) => {
    return (
        <UserAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contrato - Convenio</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <DataTableOne
                            auth={auth.user.id}
                            agreements={agreements}
                        />
                    </div>
                </div>
            </div>
        </UserAuthenticatedLayout>
    )
}
export default DashUser

import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import CardData from "@/Components/CardData.jsx";
import ChartCake from "@/Components/ChartCake.jsx";
import { Link } from '@inertiajs/react';

const Consejero = ({auth, count, amount, names, percents, colors}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Consejero</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid grid-cols-3 gap-4">
                            <Link href="/firmados">
                                <CardData
                                    mount={count}
                                    text="Firmados"
                                />
                            </Link>
                            <CardData
                                mount={0}
                                text="Firmados por Dependencia"
                            />
                            <Link href='/contratos'>
                                <CardData
                                    mount={'$'+amount}
                                    text="Monto de los Instrumentos"
                                />
                            </Link>
                            <ChartCake
                                names={names}
                                percents={percents}
                                colors={colors}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
export default Consejero

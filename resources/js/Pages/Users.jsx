import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import {useEffect} from "react";
import AddModal from "@/Components/AddModal.jsx";

const Users = ({auth, users}) => {

    useEffect(() => {
        new DataTable('#example', {
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/es-MX.json',
            },
        });
    }, [])

    const handleModal = () => {
        document.querySelector('#crud-modal').style.display = 'block';
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Usuarios</h2>}
        >
            <Head title="Administrador" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <button onClick={handleModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">Agregar</button>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table id="example" className="display" style={{"width": "100%"}}>
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map(user => (
                                  <tr key={user.name}>
                                      <td>{user.name}</td>
                                      <td>{user.email}</td>
                                      {
                                          user.roles.map(role => (
                                              <td>{role.name}</td>
                                          ))
                                      }
                                  </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <center>
                <AddModal
                    title="Agregar Nuevo Usuario"
                />
            </center>
        </AuthenticatedLayout>
    )
}
export default Users

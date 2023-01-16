import React from 'react'
import EditVaccineModal from './EditVaccineModal'

export const VaccinesTable = ({ vaccines, deleteVaccine, vaccineEdited }) => {
    if (vaccines.length === 0)
        return (
            <div className="flex flex-col">
                <table className="mx-auto max-w-4xl w-full whitespace-nowrap border-black border-solid rounded-lg bg-gray-100 divide-y divide-gray-300 overflow-hidden">
                    <thead className="bg-gray-900">
                        <tr className="text-white text-left">
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Vaccine Id
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Brand
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Name
                            </th>
                        </tr>
                    </thead>
                </table>
                <tbody className="text-center font-bold">
                    No records found
                </tbody>
            </div>
        )

    const VaccineRow = (vaccine, index) => {
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{vaccine.id}</td>
                <td>{vaccine.brand}</td>
                <td>{vaccine.name}</td>
                <td className="self-start">
                    <div>
                        <div>
                            <EditVaccineModal
                                vaccine={vaccine}
                                vaccineEdited={vaccineEdited}
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={(e) => deleteVaccine(vaccine.id)}
                                className="bg-red-600 rounded p-2 text-white font-800 w-15"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

    const vaccineTable = vaccines.map((vaccine, index) =>
        VaccineRow(vaccine, index)
    )

    return (
        <div className="divide-y divide-gray-100 ">
            <h2>Vaccines Dashboard</h2>
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap border-black border-solid rounded-lg bg-gray-100 divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-gray-900">
                    <tr className="text-white text-left">
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Vaccine Id
                        </th>
                        <th className="ont-semibold text-sm uppercase px-6 py-4">
                            Brand
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                            Name
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>{vaccineTable}</tbody>
            </table>
        </div>
    )
}
export default VaccinesTable

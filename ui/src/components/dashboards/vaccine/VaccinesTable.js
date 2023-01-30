import React from 'react'
import EditVaccineModal from './EditVaccineModal'

export const VaccinesTable = ({ vaccines, deleteVaccine, vaccineEdited }) => {
    if (vaccines.length === 0)
        return (
            <div className="flex flex-col">
                <table className="w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 border-black border-solid divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                    <thead className="bg-gray-900">
                        <tr className="text-left text-white">
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Vaccine Id
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Brand
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Name
                            </th>
                        </tr>
                    </thead>
                </table>
                <tbody className="font-bold text-center">
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
                                className="p-2 text-white bg-red-600 rounded font-800 w-15"
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
            <table className="w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 border-black border-solid divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                <thead className="bg-gray-900">
                    <tr className="text-left text-white">
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Vaccine Id
                        </th>
                        <th className="px-6 py-4 text-sm uppercase ont-semibold">
                            Brand
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-center uppercase">
                            Name
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-center uppercase">
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

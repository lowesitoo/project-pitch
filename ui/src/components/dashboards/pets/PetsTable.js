import React from 'react'
import EditPetModal from './EditPetModal'

export const PetsTable = ({ pets, deletePet, petEdited }) => {
    if (pets.length === 0)
        return (
            <div className="flex flex-col ">
                <table className="w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 border-black border-solid divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                    <thead className="bg-gray-900">
                        <tr className="text-left text-white">
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Pet Id
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Name
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Breed
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Doctor
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Clinic
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Vaccine History
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Action
                            </th>
                        </tr>
                    </thead>
                </table>
                <tbody className="font-bold text-center">
                    No records found
                </tbody>
            </div>
        )

    const PetRow = (pet, index) => {
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{pet.id}</td>
                <td>{pet.name}</td>
                <td>{pet.breed}</td>
                <td>{pet.primary_doctor}</td>
                <td>{pet.clinic}</td>
                <td>{pet.vaccine_history}</td>
                <td className="self-start">
                    <div>
                        <div>
                            <EditPetModal pet={pet} petEdited={petEdited} />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={(e) => deletePet(pet.id)}
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

    const petTable = pets.map((pet, index) => PetRow(pet, index))

    return (
        <div className="divide-y divide-gray-100 ">
            <h2 className="font-bold text-center ">Pets Dashboard</h2>
            <table className="w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 border-black border-solid divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                <thead className="bg-gray-900">
                    <tr className="text-left text-white">
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Pet Id
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Name
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Breed
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Doctor
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Clinic
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Vaccine History
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>{petTable}</tbody>
            </table>
        </div>
    )
}
export default PetsTable

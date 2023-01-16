import React from 'react'
import EditPetModal from './EditPetModal'

export const PetsTable = ({ pets, deletePet, petEdited }) => {
    if (pets.length === 0)
        return (
            <div className="flex flex-col ">
                <table className="mx-auto max-w-4xl w-full whitespace-nowrap border-black border-solid rounded-lg bg-gray-100 divide-y divide-gray-300 overflow-hidden">
                    <thead className="bg-gray-900">
                        <tr className="text-white text-left">
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Pet Id
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Name
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Breed
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Doctor
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Clinic
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Vaccine History
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Action
                            </th>
                        </tr>
                    </thead>
                </table>
                <tbody className="text-center font-bold">
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

    const petTable = pets.map((pet, index) => PetRow(pet, index))

    return (
        <div className="divide-y divide-gray-100 ">
            <h2>Pets Dashboard</h2>
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap border-black border-solid rounded-lg bg-gray-100 divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-gray-900">
                    <tr className="text-white text-left">
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Pet Id
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Name
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Breed
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Doctor
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Clinic
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Vaccine History
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
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

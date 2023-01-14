import React from 'react'
import EditPetModal from './EditPetModal'

export const PetsTable = ({ pets, deletePet, petEdited }) => {
    if (pets.length === 0)
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Pet Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Pet</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
                <tbody>
                    <h2 className="text-center">No records found</h2>
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
                <td>
                    <div className="row">
                        {/* <div className="col-md-6">{pet.username}</div> */}
                        <div className="col-md-3">
                            <EditPetModal pet={pet} petEdited={petEdited} />
                        </div>
                        <div className="col-md-3">
                            <button
                                type="button"
                                onClick={(e) => deletePet(pet.id)}
                                className="btn btn-danger right"
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
        <div className="container">
            <h2>Pets Dashboard</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Pet Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Pet</th>
                        <th>Mobile Number</th>
                        <th>Vaccine History</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{petTable}</tbody>
            </table>
        </div>
    )
}
export default PetsTable

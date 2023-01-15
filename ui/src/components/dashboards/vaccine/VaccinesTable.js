import React from 'react'
import EditVaccineModal from './EditVaccineModal'

export const VaccinesTable = ({ vaccines, deleteVaccine, vaccineEdited }) => {
    if (vaccines.length === 0)
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Vaccine Id</th>
                            <th>Brand</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                </table>
                <tbody>
                    <h2 className="text-center">No records found</h2>
                </tbody>
            </div>
        )

    const VaccineRow = (vaccine, index) => {
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{vaccine.id}</td>
                <td>{vaccine.brand}</td>
                <td>{vaccine.name}</td>
                <td>
                    <div className="row">
                        <div className="col-md-3">
                            <EditVaccineModal
                                vaccine={vaccine}
                                vaccineEdited={vaccineEdited}
                            />
                        </div>
                        <div className="col-md-3">
                            <button
                                type="button"
                                onClick={(e) => deleteVaccine(vaccine.id)}
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

    const vaccineTable = vaccines.map((vaccine, index) =>
        VaccineRow(vaccine, index)
    )

    return (
        <div className="container">
            <h2>Vaccines Dashboard</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Vaccine Id</th>
                        <th>Brand</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{vaccineTable}</tbody>
            </table>
        </div>
    )
}
export default VaccinesTable

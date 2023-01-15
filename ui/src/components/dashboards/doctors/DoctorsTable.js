import React from 'react'
import EditDoctorModal from './EditDoctorModal'

export const DoctorsTable = ({ doctors, deleteDoctor, doctorEdited }) => {
    if (doctors.length === 0)
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Doctor Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                </table>
                <tbody>
                    <h2 className="text-center">No records found</h2>
                </tbody>
            </div>
        )

    const DoctorRow = (doctor, index) => {
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>
                    <div className="row">
                        <div className="col-md-3">
                            <EditDoctorModal
                                doctor={doctor}
                                doctorEdited={doctorEdited}
                            />
                        </div>
                        <div className="col-md-3">
                            <button
                                type="button"
                                onClick={(e) => deleteDoctor(doctor.id)}
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

    const doctorTable = doctors.map((doctor, index) => DoctorRow(doctor, index))

    return (
        <div className="container">
            <h2>Doctors Dashboard</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Doctor Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{doctorTable}</tbody>
            </table>
        </div>
    )
}
export default DoctorsTable

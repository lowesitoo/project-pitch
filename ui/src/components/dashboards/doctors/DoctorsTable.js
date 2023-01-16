import React from 'react'
import EditDoctorModal from './EditDoctorModal'

export const DoctorsTable = ({ doctors, deleteDoctor, doctorEdited }) => {
    if (doctors.length === 0)
        return (
            <div className="flex flex-col">
                <table className="mx-auto max-w-4xl w-full whitespace-nowrap border-black border-solid rounded-lg bg-gray-100 divide-y divide-gray-300 overflow-hidden">
                    <thead className="bg-gray-900">
                        <tr className="text-white text-left">
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Doctor Id
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
                                className="bg-red-600 rounded p-2 text-white font-800 w-15 justify-self-end"
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
        <div className="divide-y divide-gray-100 ">
            <h2>Doctors Dashboard</h2>
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap border-black border-solid rounded-lg bg-gray-100 divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-gray-900">
                    <tr className="text-white text-left">
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Doctor Id
                        </th>
                        <th className="ont-semibold text-sm uppercase px-6 py-4">
                            Name
                        </th>
                        <th className="ont-semibold text-sm uppercase px-6 py-4">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>{doctorTable}</tbody>
            </table>
        </div>
    )
}
export default DoctorsTable

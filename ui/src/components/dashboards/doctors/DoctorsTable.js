import React from 'react'
import EditDoctorModal from './EditDoctorModal'

export const DoctorsTable = ({ doctors, deleteDoctor, doctorEdited }) => {
    if (doctors.length === 0)
        return (
            <div className="flex flex-col">
                <table className="w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 border-black border-solid divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                    <thead className="bg-gray-900">
                        <tr className="text-left text-white">
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Doctor Id
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
                                className="p-2 text-white bg-red-600 rounded font-800 w-15 justify-self-end"
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
            <h2 className="font-bold text-center">Doctors Dashboard</h2>
            <table className="w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 border-black border-solid divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                <thead className="bg-gray-900">
                    <tr className="text-left text-white">
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Doctor Id
                        </th>
                        <th className="px-6 py-4 text-sm uppercase ont-semibold">
                            Name
                        </th>
                        <th className="px-6 py-4 text-sm uppercase ont-semibold">
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

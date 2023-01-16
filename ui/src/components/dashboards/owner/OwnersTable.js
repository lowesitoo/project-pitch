import React from 'react'
import EditOwnerModal from './EditOwnerModal'

export const OwnersTable = ({ owners, deleteOwner, ownerEdited }) => {
    if (owners.length === 0)
        return (
            <div className="flex flex-col">
                <table className="mx-auto max-w-4xl w-full whitespace-nowrap border-black border-solid rounded-lg bg-gray-100 divide-y divide-gray-300 overflow-hidden">
                    <thead className="bg-gray-900">
                        <tr className="text-white text-left">
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Owner Id
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Username
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Email
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Pet
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                Mobile Number
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

    const OwnerRow = (owner, index) => {
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{owner.id}</td>
                <td>{owner.username}</td>
                <td>{owner.email}</td>
                <td>{owner.pet}</td>
                <td>{owner.mobile_num}</td>
                <td>
                    <div className="row">
                        <div className="col-md-3">
                            <EditOwnerModal
                                owner={owner}
                                ownerEdited={ownerEdited}
                            />
                        </div>
                        <div className="col-md-3">
                            <button
                                type="button"
                                onClick={(e) => deleteOwner(owner.id)}
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

    const ownerTable = owners.map((owner, index) => OwnerRow(owner, index))

    return (
        <div className="divide-y divide-gray-100 ">
            <h2>Owners Dashboard</h2>
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap border-black border-solid rounded-lg bg-gray-100 divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-gray-900">
                    <tr className="text-white text-left">
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Owner Id
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Username
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Email
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Pet
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Mobile Number
                        </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>{ownerTable}</tbody>
            </table>
        </div>
    )
}
export default OwnersTable

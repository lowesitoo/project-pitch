import React from 'react'
import EditOwnerModal from './EditOwnerModal'

export const OwnersTable = ({ owners, deleteOwner, ownerEdited }) => {
    if (owners.length === 0)
        return (
            <div className="flex flex-col">
                <table className="w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 border-black border-solid divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                    <thead className="bg-gray-900">
                        <tr className="text-left text-white">
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Owner Id
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Username
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Email
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Pet
                            </th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">
                                Mobile Number
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

    const OwnerRow = (owner, index) => {
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{owner.id}</td>
                <td>{owner.username}</td>
                <td>{owner.email}</td>
                <td>{owner.pet}</td>
                <td>{owner.mobile_num}</td>
                <td>
                    <div className="flex flex-wrap ">
                        <div className="pl-4 pr-4 md:w-1/4">
                            <EditOwnerModal
                                owner={owner}
                                ownerEdited={ownerEdited}
                            />
                        </div>
                        <div className="pl-4 pr-4 md:w-1/4">
                            <button
                                type="button"
                                onClick={(e) => deleteOwner(owner.id)}
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

    const ownerTable = owners.map((owner, index) => OwnerRow(owner, index))

    return (
        <div className="divide-y divide-gray-100 ">
            <h2 className="font-bold text-center">Owners Dashboard</h2>
            <table className="w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 border-black border-solid divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                <thead className="bg-gray-900">
                    <tr className="text-left text-white">
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Owner Id
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Username
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Email
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Pet
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
                            Mobile Number
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase">
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

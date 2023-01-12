import React from 'react'
import EditOwnerModal from './EditOwnerModal'

export const OwnersTable = ({ owners, deleteOwner, ownerEdited }) => {
    if (owners.length === 0)
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Owner Id</th>
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
                        {/* <div className="col-md-6">{owner.username}</div> */}
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

    const ownerTable = owners.map((owner, index) => OwnerRow(owner, index))

    return (
        <div className="container">
            <h2>Owners Dashboard</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Owner Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Pet</th>
                        <th>Mobile Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{ownerTable}</tbody>
            </table>
        </div>
    )
}
export default OwnersTable
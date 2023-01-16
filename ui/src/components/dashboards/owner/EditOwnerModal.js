import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useForm } from 'react-hook-form'
import { editOwner } from '../../../services/OwnerService'

export default function EditOwnerModal({ owner, ownerEdited }) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data['id'] = owner.id
        editOwner(data).then((response) => {
            ownerEdited(response)
            setShow(false)
        })
    }

    return (
        <>
            <Button
                className="bg-yellow-500 rounded p-2 text-white font-800 w-15"
                onClick={handleShow}
            >
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label htmlFor="ownerId">Id</label>
                                <input
                                    {...register('id')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={owner.id}
                                    name="id"
                                    id="id"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="owner">Username</label>
                                <input
                                    {...register('username')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={owner.username}
                                    name="username"
                                    id="username"
                                    placeholder="Edit username"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="owner">Password</label>
                                <input
                                    {...register('username')}
                                    type="password"
                                    className="form-control"
                                    defaultValue={owner.password}
                                    name="username"
                                    id="username"
                                    placeholder="Edit username"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="assignee">Email</label>
                                <input
                                    {...register('email')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={owner.email}
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="pet">Pet</label>
                                <input
                                    {...register('pet')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={owner.pet}
                                    name="pet"
                                    id="pet"
                                    placeholder="Pet"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="pet">Mobile Number</label>
                                <input
                                    {...register('mobile_num')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={owner.mobile_num}
                                    name="mobile_num"
                                    id="mobile_num"
                                    placeholder="Mobile Number"
                                />
                            </div>
                        </div>
                        <div className="btncenter">
                            <input type="submit" className="btn btn-danger" />
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

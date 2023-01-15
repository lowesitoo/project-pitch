import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useForm } from 'react-hook-form'
import { editDoctor } from '../../../services/DoctorService'

export default function EditDoctorModal({ doctor, doctorEdited }) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data['id'] = doctor.id
        editDoctor(data).then((response) => {
            doctorEdited(response)
            setShow(false)
        })
    }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
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
                                <label htmlFor="doctorId">Id</label>
                                <input
                                    {...register('id')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={doctor.id}
                                    name="id"
                                    id="id"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="doctor">Name</label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={doctor.name}
                                    name="name"
                                    id="name"
                                    placeholder="Edit Name"
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

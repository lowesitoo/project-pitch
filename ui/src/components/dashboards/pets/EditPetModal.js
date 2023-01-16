import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useForm } from 'react-hook-form'
import { editPet } from '../../../services/PetService'

export default function EditPetModal({ pet, petEdited }) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data['id'] = pet.id
        editPet(data).then((response) => {
            petEdited(response)
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
                                <label htmlFor="petId">Id</label>
                                <input
                                    {...register('id')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={pet.id}
                                    name="id"
                                    id="id"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="pet">Name</label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={pet.name}
                                    name="name"
                                    id="name"
                                    placeholder="Edit Name"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="pet">Breed</label>
                                <input
                                    {...register('breed')}
                                    type="password"
                                    className="form-control"
                                    defaultValue={pet.breed}
                                    name="breed"
                                    id="breed"
                                    placeholder="Edit Breed"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="assignee">Primary Doctor</label>
                                <input
                                    {...register('primary_doctor')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={pet.primary_doctor}
                                    name="primary_doctor"
                                    id="primary_doctor"
                                    placeholder="Primary Doctor"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="pet">Clinic</label>
                                <input
                                    {...register('clinic')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={pet.clinic}
                                    name="clinic"
                                    id="clinic"
                                    placeholder="Clinic"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="pet">Vaccine History</label>
                                <input
                                    {...register('vaccine_history')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={pet.vaccine_history}
                                    name="vaccine_history"
                                    id="vaccine_history"
                                    placeholder="Vaccine History"
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

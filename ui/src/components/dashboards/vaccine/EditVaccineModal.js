import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useForm } from 'react-hook-form'
import { editVaccine } from '../../../services/VaccineService'

export default function EditVaccineModal({ vaccine, vaccineEdited }) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data['id'] = vaccine.id
        editVaccine(data).then((response) => {
            vaccineEdited(response)
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
                                <label htmlFor="vaccineId">Id</label>
                                <input
                                    {...register('id')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={vaccine.id}
                                    name="id"
                                    id="id"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="vaccine">Brand</label>
                                <input
                                    {...register('brand')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={vaccine.brand}
                                    name="brand"
                                    id="brand"
                                    placeholder="Edit Brand"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="vaccine">Vaccine Name</label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    className="form-control"
                                    defaultValue={vaccine.name}
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

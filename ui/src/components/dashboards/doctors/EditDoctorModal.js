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
            <Button
                className="p-2 text-white bg-yellow-500 rounded font-800 w-15"
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
                        <div className="flex flex-wrap">
                            <div className="pl-4 pr-4 mb-4 md:w-1/4">
                                <label htmlFor="doctorId">Id</label>
                                <input
                                    {...register('id')}
                                    type="text"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    defaultValue={doctor.id}
                                    name="id"
                                    id="id"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="doctor">Name</label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    defaultValue={doctor.name}
                                    name="name"
                                    id="name"
                                    placeholder="Edit Name"
                                />
                            </div>
                        </div>

                        <div className="btncenter">
                            <input
                                type="submit"
                                className="inline-block px-3 py-1 font-normal leading-normal text-center text-white no-underline whitespace-no-wrap align-middle bg-red-600 border rounded select-none hover:bg-red-700"
                            />
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

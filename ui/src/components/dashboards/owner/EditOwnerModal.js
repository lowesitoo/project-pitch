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
                        <div className="flex flex-wrap ">
                            <div className="pl-4 pr-4 mb-4 md:w-1/4">
                                <label htmlFor="ownerId">Id</label>
                                <input
                                    {...register('id')}
                                    type="text"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    defaultValue={owner.id}
                                    name="id"
                                    id="id"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap ">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="owner">Username</label>
                                <input
                                    {...register('username')}
                                    type="text"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    defaultValue={owner.username}
                                    name="username"
                                    id="username"
                                    placeholder="Edit username"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap ">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="owner">Password</label>
                                <input
                                    {...register('username')}
                                    type="password"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    defaultValue={owner.password}
                                    name="username"
                                    id="username"
                                    placeholder="Edit username"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap ">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="assignee">Email</label>
                                <input
                                    {...register('email')}
                                    type="text"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    defaultValue={owner.email}
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap ">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="pet">Pet</label>
                                <input
                                    {...register('pet')}
                                    type="text"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    defaultValue={owner.pet}
                                    name="pet"
                                    id="pet"
                                    placeholder="Pet"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap ">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="pet">Mobile Number</label>
                                <input
                                    {...register('mobile_num')}
                                    type="text"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    defaultValue={owner.mobile_num}
                                    name="mobile_num"
                                    id="mobile_num"
                                    placeholder="Mobile Number"
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

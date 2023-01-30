import React from 'react'
import { useForm } from 'react-hook-form'
import { createDoctor } from '../../../services/DoctorService'

export default function CreateDoctor(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        createDoctor(data).then((response) => {
            props.doctorCreated()
            e.target.reset()
        })
    }

    return (
        <div className="container w-full max-w-lg ">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                    <h2>Add Record</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mrgnbtm">
                            <div
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                            >
                                <label htmlFor="exampleInputUsername">
                                    Name
                                </label>
                                <input
                                    {...register('name')}
                                    placeholder="Enter your Name"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="btn btn-danger mrgnbtm"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

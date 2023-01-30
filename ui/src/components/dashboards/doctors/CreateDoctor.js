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
        <div className="container w-full max-w-lg mx-auto sm:px-4 ">
            <div className="flex flex-wrap ">
                <div className="pl-4 pr-4 md:w-full mrgnbtm">
                    <h2>Add Record</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap mrgnbtm">
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
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="inline-block px-3 py-1 font-normal leading-normal text-center text-white no-underline whitespace-no-wrap align-middle bg-red-600 border rounded select-none hover:bg-red-700 mrgnbtm"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

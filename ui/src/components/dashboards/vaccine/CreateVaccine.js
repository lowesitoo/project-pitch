import React from 'react'
import { useForm } from 'react-hook-form'
import { createVaccine } from '../../../services/VaccineService'

export default function CreateVaccine(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        createVaccine(data).then((response) => {
            props.vaccineCreated()
            e.target.reset()
        })
    }

    return (
        <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap ">
                <div className="pl-4 pr-4 md:w-full mrgnbtm">
                    <h2 className="font-bold text-center">Add Record</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap mrgnbtm">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="exampleInputUsername">
                                    Brand
                                </label>
                                <input
                                    {...register('brand')}
                                    placeholder="Enter vaccine brand"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    name="brand"
                                    id="brand"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mrgnbtm">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
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

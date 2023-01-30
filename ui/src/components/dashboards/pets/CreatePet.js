import React from 'react'
import { useForm } from 'react-hook-form'
import { createPet } from '../../../services/PetService'

export default function CreatePet(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        createPet(data).then((response) => {
            props.petCreated()
            e.target.reset()
        })
    }

    return (
        <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap ">
                <div className="pl-4 pr-4 md:w-full mrgnbtm">
                    <h2 className="font-bold text-center">Add Pet Record</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap mrgnbtm">
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="exampleInputUsername">
                                    Name
                                </label>
                                <input
                                    {...register('name')}
                                    placeholder="Enter pet name"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="exampleInputPet">Breed</label>
                                <input
                                    {...register('breed')}
                                    placeholder="Breed"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    name="breed"
                                    id="breed   "
                                    required
                                />
                            </div>
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="exampleInputEmailAddress">
                                    Doctor
                                </label>
                                <input
                                    {...register('primary_doctor')}
                                    placeholder="Enter your Veterinarian"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    type="primary_doctor"
                                    name="primary_doctor"
                                    id="primary_doctor"
                                    required
                                />
                            </div>
                        </div>
                        <div className="pl-4 pr-4 mb-4 md:w-1/2">
                            <label htmlFor="exampleInputPet">Clinic</label>
                            <input
                                {...register('clinic')}
                                placeholder="clinic"
                                className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                name="clinic"
                                id="clinic"
                                required
                            />
                        </div>
                        <div className="pl-4 pr-4 mb-4 md:w-1/2">
                            <label htmlFor="exampleInputMobileNumber">
                                Vaccine History
                            </label>
                            <input
                                {...register('vaccine_history')}
                                placeholder="Vaccine History "
                                className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                name="vaccine_history"
                                id="vaccine_history"
                                required
                            />
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

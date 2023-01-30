import React from 'react'
import { useForm } from 'react-hook-form'
import { createOwner } from '../../../services/OwnerService'

export default function CreateOwner(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        createOwner(data).then((response) => {
            props.ownerCreated()
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
                                    Username
                                </label>
                                <input
                                    {...register('username')}
                                    placeholder="Create your username"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    name="username"
                                    id="username"
                                    required
                                />
                            </div>
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="exampleInputPet">
                                    Password
                                </label>
                                <input
                                    {...register('password')}
                                    placeholder="Password"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    name="password"
                                    id="password"
                                    type="password"
                                    required
                                />
                            </div>
                            <div className="pl-4 pr-4 mb-4 md:w-1/2">
                                <label htmlFor="exampleInputEmailAddress">
                                    Email
                                </label>
                                <input
                                    {...register('email')}
                                    placeholder="Email Address"
                                    className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="pl-4 pr-4 mb-4 md:w-1/2">
                            <label htmlFor="exampleInputPet">Pet</label>
                            <input
                                {...register('pet')}
                                placeholder="Pet"
                                className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                name="pet"
                                id="pet"
                                required
                            />
                        </div>
                        <div className="pl-4 pr-4 mb-4 md:w-1/2">
                            <label htmlFor="exampleInputMobileNumber">
                                Mobile Number
                            </label>
                            <input
                                {...register('mobile_num')}
                                placeholder="Mobile Number"
                                className="block w-full px-2 py-1 mb-1 text-base leading-normal text-gray-800 bg-white border border-gray-200 rounded appearance-none"
                                name="mobile_num"
                                id="mobile_num"
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

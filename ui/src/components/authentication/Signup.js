import React from 'react'
import { useForm } from 'react-hook-form'
import { createOwner } from '../../services/OwnerService'

function Signup() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        createOwner(data).then((response) => {
            e.target.reset()
        })
    }
    return (
        <div>
            <section className="h-[75vh]">
                <div className="container m-auto p-20">
                    <div className="flex flex-col items-center h-full text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0"></div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-6">
                                    <input
                                        {...register('username')}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Username"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        {...register('password')}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        {...register('email')}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        {...register('mobile_num')}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Mobile Number"
                                        required
                                    />
                                </div>
                                <div className="flex align-left items-center mb-6">
                                    Already have an account?
                                    <a
                                        href="/login"
                                        className="ml-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >
                                        Sign in
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                >
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup

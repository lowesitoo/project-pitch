import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useToken from './useToken'

async function loginUser(credentials) {
    return fetch('http://localhost:3080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json())
}
function Login({ setToken }) {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password,
        })
        setToken(token)
    }
    const { token, setToken } = useToken()

    if (!token) {
        return (setToken = { setToken })
    }

    return (
        // <div>
        //     <section className="h-[75vh]">
        //         <div className="container px-6 py-12 h-full">
        //             <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        //                 <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        //                     Anivact
        //                     <img
        //                         src="D:\StackTrek\project-pitch\ui\src\utilities\anivact-samplelogo.png
        //                     "
        //                     ></img>
        //                     <h1 className="">
        //                         Track your pets record and appointment
        //                     </h1>
        //                 </div>
        //                 <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        //                     <form>
        //                         <div className="mb-6">
        //                             <input
        //                                 type="text"
        //                                 className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        //                                 placeholder="Email address"
        //                             />
        //                         </div>

        //                         <div className="mb-6">
        //                             <input
        //                                 type="password"
        //                                 className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        //                                 placeholder="Password"
        //                             />
        //                         </div>

        //                         {/* <div className="flex justify-between items-center mb-6">
        //                             <div className="form-group form-check">
        //                                 <input
        //                                     type="checkbox"
        //                                     className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        //                                     id="exampleCheck3"
        //                                     checked
        //                                 />
        //                                 <label
        //                                     className="form-check-label inline-block text-gray-800"
        //                                     for="exampleCheck2"
        //                                 >
        //                                     Remember me
        //                                 </label>
        //                             </div>
        //                             <a
        //                                 href="#!"
        //                                 className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
        //                             >
        //                                 Forgot password?
        //                             </a>
        //                         </div> */}
        //                         <div className="flex align-left items-center mb-6">
        //                             Don't have an account?
        //                             <a
        //                                 href="/signup"
        //                                 className="ml-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
        //                             >
        //                                 Register now!
        //                             </a>
        //                         </div>
        //                         <button
        //                             type="submit"
        //                             className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        //                         >
        //                             Log in
        //                         </button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
        <div className="w-full max-w-xs flex flex-col justify-center items-center">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-center"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                    >
                        Email Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder=" Email Address"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******************"
                    />
                    {/* <p className="text-red-500 text-xs italic">
                        Please choose a password.
                    </p> */}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>

                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="/signup"
                    >
                        Register now!
                    </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 Anivact. All rights reserved.
            </p>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired,
}
export default Login

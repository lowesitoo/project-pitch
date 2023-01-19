import React, { useState } from 'react'

function Login() {
    return (
        <div className="w-full max-w-xs flex flex-col justify-center items-center">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-center"
                // onSubmit={handleSubmit}
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
                        // onChange={(e) => setUserName(e.target.value)}
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
                        // onChange={(e) => setPassword(e.target.value)}
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

export default Login

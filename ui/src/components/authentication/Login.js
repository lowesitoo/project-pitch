import React, { useState } from 'react'
import { Navigate } from 'react-router'
import { LoginUser } from '../../services/LoginService'
function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const emailValidation = () => {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return !(!email || regex.test(email) === false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === '') {
            setError('Email is required')
            return
        }

        if (email) {
            emailValidation()
            if (password === '') {
                setError('Password is required')
                return
            }
        }

        if (email === '' || password === '') {
            setError('Fields are required')
            return
        } else {
            // props.login({ email, password })
            const credentials = { email, password }
            // const response =  LoginUser(credentials)
            // if (!response) {
            //     setError('ERRORS FOUND: ', response)
            // }
            // setIsAuthenticated(true)
            // return <Navigate to="/" />
        }
    }

    return (
        <div className="w-full h-[75vh] flex flex-col justify-center items-center">
            <form className="content-center px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                <div className="mb-4">
                    <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        // for="username"
                    >
                        Email Address
                    </label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" Email Address"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        // for="password"
                    >
                        Password
                    </label>
                    <input
                        className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******************"
                    />
                    {/* <p className="text-xs italic text-red-500">
                        Please choose a password.
                    </p> */}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>

                    <a
                        className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                        href="/signup"
                    >
                        Register now!
                    </a>
                </div>
                {error && (
                    <div
                        className="relative px-4 py-3 mt-5 text-red-700 bg-red-100 border border-red-400 rounded"
                        role="alert"
                    >
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Login

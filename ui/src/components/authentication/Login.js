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
            console.log(
                'this is the data in the frontend from log in hahaha ',
                'this is the email hahahaha ',
                email,
                'password ito lets go',
                password
            )
            const credentials = { email, password }
            // const response =  LoginUser(credentials)
            // if (!response) {
            //     setError('ERRORS FOUND: ', response)
            // }
            setIsAuthenticated(true)
            return <Navigate to="/" />
        }
    }

    return (
        <div className="w-full h-[75vh] flex flex-col justify-center items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-center">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        // for="username"
                    >
                        Email Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" Email Address"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        // for="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
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
                        onClick={handleSubmit}
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
                {error && (
                    <div
                        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-5 rounded relative"
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

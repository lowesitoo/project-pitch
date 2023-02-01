import React, { useState } from 'react'
import { Navigate } from 'react-router'
import { LoginUser } from '../../services/LoginService'
import { toast } from 'react-toastify'

function Login({ setAuth }) {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const { email, password } = inputs

    const onChange = (e) =>
        setInputs({ ...inputs, [e.target.name]: e.target.value })

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { email, password }
            const response = await fetch(
                'http://localhost:3080/authentication/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(body),
                }
            )

            const parseRes = await response.json()

            if (parseRes.jwtToken) {
                localStorage.setItem('token', parseRes.jwtToken)
                setAuth(true)
                toast.success('Logged in Successfully')
            } else {
                setAuth(false)
                toast.error(parseRes)
            }
        } catch (err) {
            console.error(err.message)
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
                        onChange={(e) => onChange(e)}
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
                        onChange={(e) => onChange(e)}
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
                        onClick={onSubmitForm}
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
                {/* {error && (
                        <div
                            className="relative px-4 py-3 mt-5 text-red-700 bg-red-100 border border-red-400 rounded"
                            role="alert"
                        >
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )} */}
            </form>
        </div>
    )
}

export default Login

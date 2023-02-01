import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

import Home from './components/Home'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import About from './components/common/About'
import Contact from './components/common/Contact'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Doctors from './components/dashboards/doctors/Doctors'
import Owners from './components/dashboards/owner/Owners'
import Pets from './components/dashboards/pets/Pets'
import Profile from './components/dashboards/Profile'
import Vaccine from './components/dashboards/vaccine/Vaccines'

import './index.css'

// toast.configure()

function App() {
    const checkAuthenticated = async () => {
        try {
            const res = await fetch(
                'http://localhost:3080/authentication/verify',
                {
                    method: 'POST',
                    headers: { jwt_token: localStorage.token },
                }
            )

            const parseRes = await res.json()

            parseRes === true
                ? setIsAuthenticated(true)
                : setIsAuthenticated(false)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        checkAuthenticated()
    }, [])

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const setAuth = (boolean) => {
        setIsAuthenticated(boolean)
    }
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    {/* <Route
                        exact
                        path="/login"
                        render={(props) =>
                            !isAuthenticated ? (
                                <Login {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/owners" />
                            )
                        }
                    /> */}
                    <Route path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/signup"
                        render={(props) =>
                            !isAuthenticated ? (
                                <Signup {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/owners" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/owners"
                        render={(props) =>
                            isAuthenticated ? (
                                <Owners {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />

                    <Route
                        path="/owners"
                        element={<Owners />}
                        render={(props) =>
                            !isAuthenticated ? (
                                <Signup {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/owners" />
                            )
                        }
                    />
                    <Route
                        path="/pets"
                        element={<Pets />}
                        render={(props) =>
                            !isAuthenticated ? (
                                <Signup {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/pets" />
                            )
                        }
                    />
                    <Route
                        path="/profile"
                        element={<Profile />}
                        ender={(props) =>
                            !isAuthenticated ? (
                                <Signup {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/profile" />
                            )
                        }
                    />
                    <Route
                        path="/doctors"
                        element={<Doctors />}
                        ender={(props) =>
                            !isAuthenticated ? (
                                <Signup {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/doctors" />
                            )
                        }
                    />
                    <Route
                        path="/vaccine"
                        element={<Vaccine />}
                        ender={(props) =>
                            !isAuthenticated ? (
                                <Signup {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/vaccine" />
                            )
                        }
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                        ender={(props) =>
                            !isAuthenticated ? (
                                <Signup {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/contact" />
                            )
                        }
                    />
                    <Route
                        path="/about"
                        element={<About />}
                        ender={(props) =>
                            !isAuthenticated ? (
                                <Signup {...props} setAuth={setAuth} />
                            ) : (
                                <Navigate to="/about" />
                            )
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Owners from './components/dashboards/owner/Owners'
import Splash from './components/Splash'

import './App.css'
import useToken from './components/useToken'
import Pets from './components/dashboards/pets/Pets'

function App() {
    // const { token, setToken } = useToken()

    // if (!token) {
    //     return <Login setToken={setToken} />
    // }
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Splash />} />
                    <Route path="/owners" element={<Owners />} />
                    <Route path="/pets" element={<Pets />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App

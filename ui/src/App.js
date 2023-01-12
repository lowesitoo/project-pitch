import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Owners from './components/dashboards/Owners'
import Pets from './components/dashboards/Pets'
import Splash from './components/Splash'

import './App.css'

function App() {
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
